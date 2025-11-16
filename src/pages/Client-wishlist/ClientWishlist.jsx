import { Card, Grid, Group, Pagination, Stack, Text, Title, useMantineTheme } from "@mantine/core";
import { Marquee } from "tabler-icons-react";
import ClientUserNavbar from "~/components/ClientUserNavbar/ClientUserNavbar";
import Container from "~/components/Container/Container";
import ClientWishlistCard from "~/pages/Client-wishlist/ClientWishlistCard";

const wishlist = {
  content: [
    {
      wishId: 5,
      wishCreatedAt: "2025-11-01T14:52:10Z",
      wishProduct: {
        productId: 2,
        productName: "Microsoft Surface Pro 9",
        productSlug: "eblackaller1",
        productThumbnail:
          "https://media-api-beta.thinkpro.vn/media/core/products/2023/2/3/surface-pro-9-thinkpro-1.png",
        productPriceRange: [1.2e7],
        productVariants: [
          {
            variantId: 4,
            variantPrice: 1.2e7,
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
    },
    {
      wishId: 4,
      wishCreatedAt: "2025-11-01T14:52:09Z",
      wishProduct: {
        productId: 1,
        productName: "Dell XPS 13 9315",
        productSlug: "ealdus0",
        productThumbnail:
          "https://media-api-beta.thinkpro.vn/media/core/products/2022/5/9/xps%2013%20plus%209320%201.png?w=700&h=700",
        productPriceRange: [5500000.0, 1.25e7],
        productVariants: [
          {
            variantId: 1,
            variantPrice: 5500000.0,
            variantProperties: {
              content: [
                {
                  id: 1,
                  code: "size",
                  name: "Kích cỡ",
                  value: "S",
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
          {
            variantId: 2,
            variantPrice: 1.25e7,
            variantProperties: {
              content: [
                {
                  id: 1,
                  code: "size",
                  name: "Kích cỡ",
                  value: "M",
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
          {
            variantId: 3,
            variantPrice: 1.0e7,
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
    },
  ],
  page: 1,
  size: 5,
  totalElements: 2,
  totalPages: 1,
  last: true,
};

function ClientWishlist() {
  const theme = useMantineTheme();

  let wishlistContentFragment;

  if (wishlist && wishlist.totalElements === 0) {
    wishlistContentFragment = (
      <Stack my="xl" align="center" c={theme.colors.blue[6]}>
        <Marquee size={125} strokeWidth={1} />
        <Text size="xl" fw={500}>
          Chưa có sản phẩm yêu thích nào
        </Text>
      </Stack>
    );
  }

  if (wishlist && wishlist.totalElements > 0) {
    wishlistContentFragment = (
      <>
        <Stack gap="xs">
          {wishlist.content.map((wish) => (
            <ClientWishlistCard key={wish.wishId} wish={wish} />
          ))}
        </Stack>

        <Group justify="space-between" mt="lg">
          <Pagination value={1} total={wishlist.totalPages}>
            <Text component="span" fw={500}>
              Trang 1
            </Text>
            <span> / {wishlist.totalPages}</span>
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
                <Title order={2}>Sản phẩm yêu thích</Title>

                {wishlistContentFragment}
              </Stack>
            </Card>
          </Grid.Col>
        </Grid>
      </Container>
    </main>
  );
}

export default ClientWishlist;
