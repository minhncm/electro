import {
  Card,
  Grid,
  Group,
  Pagination,
  Stack,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
import ClientUserNavbar from "~/components/ClientUserNavbar/ClientUserNavbar";
import Container from "~/components/Container/Container";
import ClientNotificationCard from "./ClientNotificationCard";
import { Marquee } from "tabler-icons-react";
import { useGetAllNotificationApi } from "~/hooks/client/use-notification-api";
import { useState } from "react";

function ClientNotification() {
  const theme = useMantineTheme();
  const [activePage, setActivePage] = useState(1);
  const { data: notifications } = useGetAllNotificationApi(activePage);

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
            <ClientNotificationCard
              key={notification.id}
              notification={notification}
            />
          ))}
        </Stack>

        <Group justify="space-between" mt="lg">
          <Pagination
            value={activePage}
            total={notifications.totalPages}
            onChange={(page) => page !== activePage && setActivePage(page)}
          />

          <Text>
            <Text component="span" fw={500}>
              Trang {activePage}
            </Text>
            <span> / {notifications.totalPages}</span>
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
