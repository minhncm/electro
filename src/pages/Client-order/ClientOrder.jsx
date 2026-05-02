import { Card, Grid, LoadingOverlay, Stack, Title } from "@mantine/core";
import ClientUserNavbar from "~/components/ClientUserNavbar/ClientUserNavbar";
import Container from "~/components/Container/Container";
import ClientOrderCard from "./ClientOrderCard";
import { useGetOrderByUser } from "~/hooks/client/use-order-api";

function ClientOrder() {
  const { data: orders } = useGetOrderByUser();
  if (!orders) return <LoadingOverlay />;
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
                  <ClientOrderCard key={order.id} order={order} />
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
