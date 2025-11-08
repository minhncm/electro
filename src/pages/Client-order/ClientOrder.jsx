import { Card, Grid, Stack, Title } from "@mantine/core";
import ClientUserNavbar from "~/components/ClientUserNavbar/ClientUserNavbar";
import Container from "~/components/Container/Container";
import ClientOrderCard from "./ClientOrderCard";

const orders = {
  content: [
    {
      orderId: 2,
      orderCreatedAt: "2022-05-02T16:20:36Z",
      orderCode: "36987-166",
      orderStatus: 4,
      orderTotalPay: 700000.0,
      orderItems: [
        {
          orderItemVariant: {
            variantId: 3,
            variantProduct: {
              productId: 1,
              productName: "Dell XPS 13 9315",
              productSlug: "ealdus0",
              productThumbnail:
                "https://media-api-beta.thinkpro.vn/media/core/products/2022/5/9/xps%2013%20plus%209320%201.png?w=700&h=700",
              productIsReviewed: false,
            },
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
          orderItemPrice: 300000.0,
          orderItemQuantity: 2,
          orderItemAmount: 600000.0,
        },
      ],
      orderPaymentStatus: 2,
    },
    {
      orderId: 1,
      orderCreatedAt: "2022-06-30T01:32:41Z",
      orderCode: "68400-107",
      orderStatus: 1,
      orderTotalPay: 600000.0,
      orderItems: [
        {
          orderItemVariant: {
            variantId: 2,
            variantProduct: {
              productId: 1,
              productName: "Dell XPS 13 9315",
              productSlug: "ealdus0",
              productThumbnail:
                "https://media-api-beta.thinkpro.vn/media/core/products/2022/5/9/xps%2013%20plus%209320%201.png?w=700&h=700",
              productIsReviewed: false,
            },
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
          orderItemPrice: 200000.0,
          orderItemQuantity: 2,
          orderItemAmount: 400000.0,
        },
        {
          orderItemVariant: {
            variantId: 1,
            variantProduct: {
              productId: 1,
              productName: "Dell XPS 13 9315",
              productSlug: "ealdus0",
              productThumbnail:
                "https://media-api-beta.thinkpro.vn/media/core/products/2022/5/9/xps%2013%20plus%209320%201.png?w=700&h=700",
              productIsReviewed: false,
            },
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
          orderItemPrice: 100000.0,
          orderItemQuantity: 1,
          orderItemAmount: 100000.0,
        },
      ],
      orderPaymentStatus: 1,
    },
  ],
  page: 1,
  size: 5,
  totalElements: 2,
  totalPages: 1,
  last: true,
};

function ClientOrder() {
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
                <Title order={2}>Đơn hàng của tôi</Title>
                {orders.content.map((order) => (
                  <ClientOrderCard key={order.orderId} order={order} />
                ))}
              </Stack>
            </Card>
          </Grid.Col>
        </Grid>
      </Container>
    </main>
  );
}

export default ClientOrder;
