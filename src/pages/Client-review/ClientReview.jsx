import { Card, ColorSwatch, Grid, Group, Pagination, Stack, Text, Title, useMantineTheme } from "@mantine/core";
import ClientUserNavbar from "~/components/ClientUserNavbar/ClientUserNavbar";
import Container from "~/components/Container/Container";
import ClientReviewCard from "./ClientReviewCard";
import { Marquee } from "tabler-icons-react";

const reviews = {
  content: [
    {
      reviewId: 2,
      reviewCreatedAt: "2025-10-29T14:32:50Z",
      reviewUpdatedAt: "2025-10-29T14:32:50Z",
      reviewProduct: {
        productId: 6,
        productName: "Loa Harman Kardon Onyx Studio 7",
        productSlug: "harman",
        productThumbnail:
          "https://media-api-beta.thinkpro.vn/media/core/products/2022/11/18/Loa-Harman-Kardon-Onyx-Studio-7-thinkpro-01.jpeg?w=700&h=700",
        productPriceRange: [1.1e7],
        productVariants: [
          {
            variantId: 8,
            variantPrice: 1.1e7,
            variantProperties: {
              content: [
                {
                  id: 1,
                  code: "size",
                  name: "Kích cỡ",
                  value: "L",
                },
                {
                  id: 2,
                  code: "color",
                  name: "Màu sắc",
                  value: "Đỏ",
                },
              ],
              totalElements: 2,
            },
          },
        ],
        productSaleable: false,
        productPromotion: null,
      },
      reviewRatingScore: 5,
      reviewContent: "ok giao nhanh, hàng chất lượng",
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

function ClientReview() {
  const theme = useMantineTheme();

  let reviewContentFragment;

  if (reviews && reviews.totalElements === 0) {
    reviewContentFragment = (
      <Stack my="xl" align="center" c={theme.colors.blue[6]}>
        <Marquee size={125} strokeWidth={1} />
        <Text size="xl" fw={500}>
          Chưa có đánh giá nào
        </Text>
      </Stack>
    );
  }

  if (reviews && reviews.totalElements > 0) {
    reviewContentFragment = (
      <>
        <Stack gap="xs">
          {reviews.content.map((review) => (
            <ClientReviewCard key={review.reviewId} review={review} />
          ))}
        </Stack>

        <Group justify="space-between" mt="lg">
          <Pagination value={1} total={reviews.totalPages}>
            <Text component="span" fw={500}>
              Trang 1
            </Text>
            <span> / {reviews.totalPages}</span>
          </Pagination>
        </Group>
      </>
    );
  }

  return (
    <main>
      <Container>
        <Grid gutter="lg">
          <Grid.Col span={3}>
            <ClientUserNavbar />
          </Grid.Col>

          <Grid.Col span={9}>
            <Card radius="md" shadow="sm" p="lg">
              <Stack>
                <Title order={2}>Đánh giá sản phẩm</Title>

                <Card
                  p="sm"
                  radius="md"
                  withBorder
                  style={{
                    maxWidth: "fit-content",
                    borderColor: theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2],
                  }}
                >
                  <Group gap="lg">
                    <Group gap="xs">
                      <ColorSwatch color={theme.colors.gray[5]} size={20} />
                      <Text size="sm">Chưa duyệt</Text>
                    </Group>
                    <Group gap="xs">
                      <ColorSwatch color={theme.colors.teal[5]} size={20} />
                      <Text size="sm">Đã duyệt</Text>
                    </Group>
                    <Group gap="xs">
                      <ColorSwatch color={theme.colors.pink[5]} size={20} />
                      <Text size="sm">Không duyệt</Text>
                    </Group>
                  </Group>
                </Card>
                {reviewContentFragment}
              </Stack>
            </Card>
          </Grid.Col>
        </Grid>
      </Container>
    </main>
  );
}

export default ClientReview;
