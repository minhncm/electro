import {
  Anchor,
  Blockquote,
  Button,
  Card,
  Group,
  Image,
  rgba,
  Stack,
  Text,
  useMantineTheme,
} from "@mantine/core";
import { Link } from "react-router-dom";
import { Trash } from "tabler-icons-react";
import ReviewBadge from "~/components/ReviewBadge/ReviewBadge";
import ReviewStar from "~/components/ReviewStar";
import { useDeleteReviews } from "~/hooks/client/use-review-api";
import onModalDelete from "~/utils/ModalsUtil";

function ClientReviewCard({ review }) {
  const theme = useMantineTheme();
  const cardStyle = {
    backgroundColor:
      review.status === 1
        ? theme.colorScheme === "dark"
          ? theme.colors.dark[5]
          : theme.colors.gray[0]
        : theme.colorScheme === "dark"
          ? rgba(theme.colors[review.status === 2 ? "teal" : "pink"][8], 0.25)
          : rgba(theme.colors[review.status === 2 ? "teal" : "pink"][1], 0.5),
  };

  const deleteApi = useDeleteReviews();

  const handleDeleteReviewButton = (id) => {
    const onConfirm = () => deleteApi.mutate([id]);
    onModalDelete("Xóa đánh giá ở sản phẩm này", onConfirm);
  };
  return (
    <Card p="sm" radius="md" style={cardStyle}>
      <Stack gap={3.5}>
        <Group justify="space-between">
          <Group>
            <Group gap="xs">
              <Image
                radius="md"
                w={22}
                h={22}
                src={review.product.thumbnail || undefined}
                alt={review.product.name}
              />
              <Anchor
                component={Link}
                to={`/product/${review.product.slug}`}
                fw={500}
                size="sm"
              >
                {review.product.name}
              </Anchor>
            </Group>

            <Text size="sm" c="dimmed">
              {review.createdAt}
            </Text>

            <ReviewStar score={review.ratingScore} />

            <ReviewBadge status={review.status} />
          </Group>

          <Button
            variant="outline"
            color="red"
            size="xs"
            leftSection={<Trash size={18} strokeWidth={1.5} />}
            onClick={() => handleDeleteReviewButton(review.id)}
          >
            Xóa
          </Button>
        </Group>

        <Blockquote
          color={
            review.status === 1 ? "gray" : review.status === 2 ? "teal" : "pink"
          }
          style={{ fontSize: theme.fontSizes.sm }}
        >
          {review.content}
        </Blockquote>

        {review.reply && (
          <Card p="sm" radius="md" style={cardStyle}>
            <Stack gap="xs">
              <Text size="sm" fw={700}>
                Phản hồi từ cửa hàng
              </Text>
              <Text size="sm">{review.reply}</Text>
            </Stack>
          </Card>
        )}
      </Stack>
    </Card>
  );
}

export default ClientReviewCard;
