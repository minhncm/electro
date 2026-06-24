import {
  Anchor,
  Box,
  Button,
  Card,
  Group,
  rgba,
  Stack,
  Text,
  ThemeIcon,
  useMantineTheme,
} from "@mantine/core";
import { Link } from "react-router-dom";
import { useUpdateNotificationApi } from "~/hooks/client/use-notification-api";
import { notificationIconMap } from "~/pages/PageConfig";
import useAuthStore from "~/stores/use-auth-store";
import DateUtils from "~/utils/DateUtils";

function ClientNotificationCard({ notification }) {
  const theme = useMantineTheme();
  const { user } = useAuthStore();

  const updateNotificationApi = useUpdateNotificationApi(notification.id);

  const handleMarkAsReadButton = () => {
    if (user) {
      const notificationRequest = {
        userId: user.id,
        type: notification.type,
        message: notification.message,
        anchor: notification.anchor,
        status: 2,
      };

      updateNotificationApi.mutate(notificationRequest);
    }
  };

  const LeftIcon = notificationIconMap[notification.type].icon;
  return (
    <Card
      px="md"
      py="sm"
      radius="md"
      style={{
        backgroundColor:
          notification.status === 1
            ? theme.colorScheme === "dark"
              ? rgba(theme.colors["blue"][8], 0.25)
              : rgba(theme.colors["blue"][1], 0.25)
            : theme.colorScheme === "dark"
              ? theme.colors.dark[5]
              : theme.colors.gray[0],
      }}
    >
      <Group justify="space-between" wrap="nowrap">
        <Group wrap="nowrap">
          <ThemeIcon
            variant="filled"
            size="xl"
            radius="xl"
            color={notificationIconMap[notification.type].color}
          >
            <LeftIcon />
          </ThemeIcon>

          <Stack gap={3.5}>
            <Group gap={7.5}>
              {notification.status === 1 && (
                <Box
                  style={{
                    width: 6.5,
                    height: 6.5,
                    backgroundColor:
                      theme.colors["blue"][
                        theme.colorScheme === "dark" ? 5 : 7
                      ],
                    borderRadius: "50%",
                  }}
                />
              )}
              <Text size="xs" c="dimmed">
                {DateUtils.formatterDate(notification.createdAt)}
              </Text>
            </Group>
            <Text size="sm">
              {notification.message}
              {notification.anchor && (
                <Anchor component={Link} to={notification.anchor} ml={5}>
                  Chi tiết
                </Anchor>
              )}
            </Text>
          </Stack>
        </Group>
        {notification.status === 1 && (
          <Button
            variant={"outline"}
            c={"blue"}
            onClick={handleMarkAsReadButton}
          >
            Đánh dấu đã đọc
          </Button>
        )}
      </Group>
    </Card>
  );
}

export default ClientNotificationCard;
