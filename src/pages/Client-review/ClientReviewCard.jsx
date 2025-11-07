import { Anchor, Blockquote, Button, Card, Group, Image, rgba, Stack, Text, useMantineTheme } from "@mantine/core";
import { Link } from "react-router-dom";
import { Trash } from "tabler-icons-react";
import ReviewBadge from "~/components/ReviewBadge/ReviewBadge";
import ReviewStar from "~/components/ReviewStar";
import onModalDelete from "~/utils/ModalsUtil";

function ClientReviewCard({ review }) {
  const theme = useMantineTheme();
  const cardStyle = {
    backgroundColor:
      review.reviewStatus === 1
        ? theme.colorScheme === "dark"
          ? theme.colors.dark[5]
          : theme.colors.gray[0]
        : theme.colorScheme === "dark"
        ? rgba(theme.colors[review.reviewStatus === 2 ? "teal" : "pink"][8], 0.25)
        : rgba(theme.colors[review.reviewStatus === 2 ? "teal" : "pink"][1], 0.5),
  };
  const handleDeleteReviewButton = () => {
    const onConfirm = () => alert("Comfirm");
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
                src={review.reviewProduct.productThumbnail || undefined}
                alt={review.reviewProduct.productName}
              />
              <Anchor component={Link} to={`/product/${review.reviewProduct.productSlug}`} fw={500} size="sm">
                {review.reviewProduct.productName}
              </Anchor>
            </Group>

            <Text size="sm" c="dimmed">
              {review.reviewCreatedAt}
            </Text>

            <ReviewStar score={review.reviewRatingScore} />

            <ReviewBadge status={review.reviewStatus} />
          </Group>

          <Button
            variant="outline"
            color="red"
            size="xs"
            leftSection={<Trash size={18} strokeWidth={1.5} />}
            onClick={handleDeleteReviewButton}
          >
            Xóa
          </Button>
        </Group>

        <Blockquote
          color={review.reviewStatus === 1 ? "gray" : review.reviewStatus === 2 ? "teal" : "pink"}
          style={{ fontSize: theme.fontSizes.sm }}
        >
          {review.reviewContent}
        </Blockquote>

        {review.reviewReply && (
          <Card p="sm" radius="md" style={cardStyle}>
            <Stack gap="xs">
              <Text size="sm" fw={500}>
                Phản hồi từ khách hàng
              </Text>
              <Text size="sm">{review.reviewReply}</Text>
            </Stack>
          </Card>
        )}
      </Stack>
    </Card>
  );
}

export default ClientReviewCard;
