import { Card, Grid, LoadingOverlay, Stack, Title } from "@mantine/core";
import ClientUserNavbar from "~/components/ClientUserNavbar/ClientUserNavbar";
import Container from "~/components/Container/Container";
import OrderContent from "./OrderContent";
import { useParams } from "react-router-dom";
import { useGetOrderDetail } from "~/hooks/client/use-order-api";

function ClientOrderDetail() {
  const { code } = useParams();

  const { data: order } = useGetOrderDetail(code);
  if (!order) return <LoadingOverlay />;

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
                <Title order={2}>Chi tiết đơn hàng</Title>
                <OrderContent order={order} />
              </Stack>
            </Card>
          </Grid.Col>
        </Grid>
      </Container>
    </main>
  );
}

export default ClientOrderDetail;
