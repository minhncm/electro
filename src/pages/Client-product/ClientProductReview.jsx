import {
  Alert,
  Avatar,
  Badge,
  Box,
  Card,
  Group,
  Pagination,
  Stack,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { useState } from "react";
import { AlertCircle, Edit, Messages } from "tabler-icons-react";
import ReviewStar from "~/components/ReviewStar";
import { useGetReviewsByProductSlug } from "~/hooks/client/use-product-api";

function ClientProductReview({ productSlug }) {
  const theme = useMantineTheme();

  const [activePage, setActivePage] = useState(1);

  const { data: reviews } = useGetReviewsByProductSlug(productSlug, {
    page: activePage,
    size: 5,
    filter: "status==2",
  });

  let reviewsContentFrament;

  if (reviews && reviews.totalElements === 0)
    reviewsContentFrament = (
      <Alert
        icon={<AlertCircle size={16} />}
        title="Thông báo"
        color="cyan"
        radius="md"
      >
        Sản phẩm hiện không có đánh giá nào
      </Alert>
    );

  if (reviews && reviews.totalElements > 0)
    reviewsContentFrament = (
      <Stack>
        <Stack>
          {reviews.content.map((review) => (
            <Card key={review.id} radius="md" shadow="sm" p="lg">
              <Stack>
                <Group gap="lg">
                  <Group gap="xs">
                    <Avatar color="cyan" size="sm" radius="sm">
                      {review.user.fullname.charAt(0)}
                    </Avatar>
                    <Text size="sm" c="dimmed">
                      {review.user.fullname}
                    </Text>
                    <ReviewStar score={review.ratingScore} />
                  </Group>
                  <Text size="sm">{review.content}</Text>
                  {review.reply && (
                    <Box
                      style={{
                        backgroundColor:
                          theme.colorScheme === "dark"
                            ? theme.colors.dark[5]
                            : theme.colors.gray[0],
                        borderRadius: theme.radius.md,
                        padding: "16px 20px",
                      }}
                    >
                      <Stack gap="xs">
                        <Group gap="xs">
                          <Messages size={14} />
                          <Text size="sm" fw={500}>
                            Phản hồi từ cửa hàng
                          </Text>
                        </Group>
                        <Text size="sm">{review.reply}</Text>
                      </Stack>
                    </Box>
                  )}
                </Group>
              </Stack>
            </Card>
          ))}
        </Stack>
        <Group justify="space-between" mt="lg">
          <Pagination
            value={activePage}
            total={reviews.totalPages}
            onChange={(page) => page !== activePage && setActivePage(page)}
          />

          <Text>
            <Text component="span" fw={500}>
              Trang 1
            </Text>
            <span> / {reviews.totalPages}</span>
          </Text>
        </Group>
      </Stack>
    );
  return (
    <Stack>
      <Group justify="space-between">
        <Group gap="xs">
          <Edit />
          <Title order={2}>Đánh giá sản phẩm</Title>
        </Group>
        {reviews && reviews.totalElements > 0 && (
          <Badge size="lg" ml="xs" variant="filled">
            {reviews.totalElements}
          </Badge>
        )}
      </Group>
      {reviewsContentFrament}
    </Stack>
  );
}

export default ClientProductReview;
