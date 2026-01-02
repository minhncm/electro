import { Button, Group, Stack, Text, Textarea, ThemeIcon } from "@mantine/core";
import { useModals } from "@mantine/modals";
import { Box, Clock, User } from "tabler-icons-react";
import DateUtils from "~/utils/DateUtils";

const reply = false;

function ReplyReviewModal({ review }) {
  const modals = useModals();

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
      <Textarea data-autofocus placeholder="Nhập nội dung phản hồi" autosize minRows={4} />
      <Group justify="space-between">
        <Button variant="default" onClick={modals.closeAll}>
          Đóng
        </Button>
        <Button
          color="grape"
          disabled={(!review.reply && reply.length === 0) || (!!review.reply && review.reply === reply)}
        >
          {!review.reply ? "Thêm phản hồi" : reply.length === 0 ? "Xóa phản hồi" : "Sửa phản hồi"}
        </Button>
      </Group>
    </Stack>
  );
}

export default ReplyReviewModal;
