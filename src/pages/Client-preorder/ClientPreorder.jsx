import { Card, Grid, Group, Pagination, Stack, Text, Title, useMantineTheme } from "@mantine/core";
import { Marquee } from "tabler-icons-react";
import ClientUserNavbar from "~/components/ClientUserNavbar/ClientUserNavbar";
import Container from "~/components/Container/Container";
import ClientPreorderCard from "./ClientPreorderCard";

const preorders = {
  content: [
    {
      preorderId: 1,
      preorderCreatedAt: "2021-10-03T14:16:01Z",
      preorderUpdatedAt: "2021-11-17T17:55:52Z",
      preorderProduct: {
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
      preorderStatus: 1,
    },
  ],
  page: 1,
  size: 5,
  totalElements: 1,
  totalPages: 1,
  last: true,
};

function ClientPreorder() {
  const theme = useMantineTheme();

  let preorderContentFragment;

  if (preorders && preorders.totalElements === 0) {
    preorderContentFragment = (
      <Stack my="xl" align="center" c={theme.colors.blue[6]}>
        <Marquee size={125} strokeWidth={1} />
        <Text size="xl" fw={500}>
          Chưa đặt trước sản phẩm nào
        </Text>
      </Stack>
    );
  }

  if (preorders && preorders.totalElements > 0) {
    preorderContentFragment = (
      <>
        <Stack>
          {preorders.content.map((preorder) => (
            <ClientPreorderCard key={preorder.preorderId} preorder={preorder} />
          ))}
        </Stack>
        <Group justify="space-between" mt="lg">
          <Pagination value={1} total={preorders.totalPages} />
          <Text>
            <Text component="span" fw={500}>
              Trang 1
            </Text>
            <span> / {preorders.totalPages}</span>
          </Text>
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
                <Title order={2}>Đặt trước sản phẩm</Title>

                {preorderContentFragment}
              </Stack>
            </Card>
          </Grid.Col>
        </Grid>
      </Container>
    </main>
  );
}

export default ClientPreorder;
