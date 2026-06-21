import { Button, Group, Stack, Text, Textarea, ThemeIcon } from "@mantine/core";
import { useModals } from "@mantine/modals";
import { Box, Clock, User } from "tabler-icons-react";
import useUpdateApi from "~/hooks/admin/use-update-api";
import DateUtils from "~/utils/DateUtils";
import ReviewConfigs from "./ReviewConfigs";
import { useState } from "react";

function ReplyReviewModal({ review }) {
  const modals = useModals();
  const [reply, setReply] = useState(review.reply || "");

  const updateReviewApi = useUpdateApi(
    ReviewConfigs.resourceUrl,
    ReviewConfigs.resourceKey,
    review.id,
  );

  const handleReplyReviewButton = () => {
    const requestBody = {
      userId: review.user.id,
      productId: review.product.id,
      ratingScore: review.ratingScore,
      content: review.content,
      reply: reply.trim() || null,
      status: review.status,
    };
    updateReviewApi.mutate(requestBody);
    modals.closeAll();
  };

  return (
    <Stack>
      <Group>
        <Group gap="xs">
          <ThemeIcon>
            <Clock size={16} />
          </ThemeIcon>
          <Text size="sm">{DateUtils.formatterDate(review.createdAt)}</Text>
        </Group>
        <Group gap="xs">
          <ThemeIcon>
            <User size={16} />
          </ThemeIcon>
          <Text size="sm">{review.user.fullname}</Text>
        </Group>
        <Group gap="xs">
          <ThemeIcon>
            <Box size={16} />
          </ThemeIcon>
          <Text size="sm">{review.product.name}</Text>
        </Group>
      </Group>
      <Textarea
        placeholder="Nhập nội dung phản hồi"
        autosize
        minRows={4}
        value={reply}
        onChange={(e) => setReply(e.currentTarget.value)}
      />
      <Group justify="space-between">
        <Button variant="default" onClick={modals.closeAll}>
          Đóng
        </Button>
        <Button
          color="grape"
          disabled={
            (!review.reply && reply.length === 0) ||
            (!!review.reply && review.reply === reply)
          }
          onClick={handleReplyReviewButton}
        >
          {!review.reply
            ? "Thêm phản hồi"
            : reply.length === 0
              ? "Xóa phản hồi"
              : "Sửa phản hồi"}
        </Button>
      </Group>
    </Stack>
  );
}

export default ReplyReviewModal;
