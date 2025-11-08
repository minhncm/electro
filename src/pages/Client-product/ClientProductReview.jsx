import { Alert, Avatar, Badge, Box, Card, Group, Pagination, Stack, Text, Title, useMantineTheme } from "@mantine/core";
import { AlertCircle, Edit, Messages } from "tabler-icons-react";
import ReviewStar from "~/components/ReviewStar";

const reviews = {
  content: [
    {
      reviewId: 1,
      reviewCreatedAt: "2021-10-03T14:16:01Z",
      reviewUpdatedAt: "2021-11-17T17:55:52Z",
      reviewUser: {
        userId: 4,
        userUsername: "dtreat3",
        userFullname: "Danila Treat",
      },
      reviewRatingScore: 4,
      reviewContent:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec posuere felis sed justo finibus, eget maximus diam rhoncus. Integer posuere tempor magna, ut dictum massa suscipit vel. Sed quis placerat neque. Etiam urna sapien, accumsan nec nulla in, condimentum venenatis ex.",
      reviewReply: null,
      reviewStatus: 2,
    },
  ],
  page: 1,
  size: 5,
  totalElements: 1,
  totalPages: 1,
  last: true,
};

function ClientProductReview() {
  const theme = useMantineTheme();
  let reviewsContentFrament;

  if (reviews && reviews.totalElements === 0)
    reviewsContentFrament = (
      <Alert icon={<AlertCircle size={16} />} title="Thông báo" color="cyan" radius="md">
        Sản phẩm hiện không có đánh giá nào
      </Alert>
    );

  if (reviews && reviews.totalElements > 0)
    reviewsContentFrament = (
      <Stack>
        <Stack>
          {reviews.content.map((review) => (
            <Card key={review.reviewId} radius="md" shadow="sm" p="lg">
              <Stack>
                <Group gap="lg">
                  <Group gap="xs">
                    <Avatar color="cyan" size="sm" radius="sm">
                      {review.reviewUser.userFullname.charAt(0)}
                    </Avatar>
                    <Text size="sm" c="dimmed">
                      {review.reviewUser.userFullname}
                    </Text>
                    <ReviewStar score={review.reviewRatingScore} />
                  </Group>
                  <Text size="sm">{review.reviewContent}</Text>
                  {review.reviewReply && (
                    <Box
                      style={{
                        backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[0],
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
                        <Text size="sm">{review.reviewReply}</Text>
                      </Stack>
                    </Box>
                  )}
                </Group>
              </Stack>
            </Card>
          ))}
        </Stack>
        <Group justify="space-between" mt="lg">
          <Pagination value={1} total={reviews.totalPages} />

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
        {reviewsContentFrament}
      </Group>
    </Stack>
  );
}

export default ClientProductReview;
