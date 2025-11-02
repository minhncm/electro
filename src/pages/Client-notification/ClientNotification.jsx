import { Card, Grid, Group, Pagination, Stack, Text, Title, useMantineTheme } from "@mantine/core";
import ClientUserNavbar from "~/components/ClientUserNavbar/ClientUserNavbar";
import Container from "~/components/Container/Container";
import ClientNotificationCard from "./ClientNotificationCard";
import { Marquee } from "tabler-icons-react";

const notifications = {
  content: [
    {
      id: 2,
      createdAt: "2025-10-29T14:33:09Z",
      type: "REVIEW",
      message: "Bạn đã nhận được 50 điểm thưởng cho đánh giá ở sản phẩm Loa Harman Kardon Onyx Studio 7.",
      anchor: "/user/reward",
      status: 1,
    },
    {
      id: 1,
      createdAt: "2025-10-29T13:44:35Z",
      type: "ORDER",
      message: "Đơn hàng 1R9LFP7EEFMJ của bạn đã được duyệt.",
      anchor: "/order/detail/1R9LFP7EEFMJ",
      status: 2,
    },
  ],
  page: 1,
  size: 5,
  totalElements: 2,
  totalPages: 1,
  last: true,
};

function ClientNotification() {
  const theme = useMantineTheme();
  let notificationContentFragment;

  if (notifications && notifications.totalElements === 0) {
    notificationContentFragment = (
      <Stack my="xl" align="center" c={theme.colors.blue[6]}>
        <Marquee size={125} strokeWidth={1} />
        <Text size="xl" fw={500}>
          Chưa có thông báo nào
        </Text>
      </Stack>
    );
  }

  if (notifications && notifications.totalElements > 0) {
    notificationContentFragment = (
      <>
        <Stack gap="xs">
          {notifications.content.map((notification) => (
            <ClientNotificationCard key={notification.id} notification={notification} />
          ))}
        </Stack>

        <Group justify="space-between" mt="lg">
          <Pagination value={1} total={notifications.totalPages}>
            <Text component="span" fw={500}>
              Trang 1
            </Text>
            <span> / {notifications.totalPages}</span>
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
                <Title order={2}>Thông báo</Title>
                {notificationContentFragment}
              </Stack>
            </Card>
          </Grid.Col>
        </Grid>
      </Container>
    </main>
  );
}

export default ClientNotification;
