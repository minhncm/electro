import {
  Card,
  Center,
  Grid,
  Loader,
  LoadingOverlay,
  Stack,
  Title,
} from "@mantine/core";
import InfiniteScroll from "react-infinite-scroll-component";
import ClientUserNavbar from "~/components/ClientUserNavbar/ClientUserNavbar";
import Container from "~/components/Container/Container";
import ClientOrderCard from "./ClientOrderCard";
import { useGetOrderByUser } from "~/hooks/client/use-order-api";
import { useState } from "react";

function ClientOrder() {
  const { data, hasNextPage, isFetchingNextPage, fetchNextPage } =
    useGetOrderByUser();
  const [isDelayLoading, setIsDelayLoading] = useState(false);
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  if (!data) return <LoadingOverlay visible />;

  const orders = data.pages.flatMap((page) => page.content);

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
                <InfiniteScroll
                  dataLength={orders.length}
                  next={async () => {
                    if (hasNextPage && !isFetchingNextPage && !isDelayLoading) {
                      setIsDelayLoading(true);
                      await sleep(2000);
                      await fetchNextPage();
                      setIsDelayLoading(false);
                    }
                  }}
                  hasMore={!!hasNextPage}
                  loader={
                    <Center>
                      <Loader size="sm" />
                    </Center>
                  }
                >
                  {orders.map((order) => (
                    <ClientOrderCard key={order.id} order={order} />
                  ))}
                </InfiniteScroll>
              </Stack>
            </Card>
          </Grid.Col>
        </Grid>
      </Container>
    </main>
  );
}

export default ClientOrder;
