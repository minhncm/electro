import { Blockquote, Button, Group, Stack, Text, ThemeIcon, useMantineTheme } from "@mantine/core";
import { useModals } from "@mantine/modals";
import { Box, Clock, Star, User } from "tabler-icons-react";
import DateUtils from "~/utils/DateUtils";
import ReviewStar from "~/components/ReviewStar";

function CheckReviewModal({ review }) {
  const theme = useMantineTheme();
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
        <Group gap="xs">
          <ThemeIcon>
            <Star size={16} />
          </ThemeIcon>
          <ReviewStar ratingScore={review.ratingScore} />
        </Group>
      </Group>
      <Blockquote fs={theme.fontSizes.sm}>{review.content}</Blockquote>
      <Group position="right">
        <Button variant="default" onClick={modals.closeAll}>
          Đóng
        </Button>
        <Button color="teal" disabled={review.status === 2}>
          Duyệt
        </Button>
        <Button color="pink" disabled={review.status === 3}>
          Không duyệt
        </Button>
      </Group>
    </Stack>
  );
}

export default CheckReviewModal;
