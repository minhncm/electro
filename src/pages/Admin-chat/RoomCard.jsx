import {
  Avatar,
  Badge,
  Card,
  Group,
  Stack,
  Text,
  useMantineTheme,
} from "@mantine/core";
import { useState } from "react";
import { useSubscription } from "react-stomp-hooks";
import useAuthStore from "~/stores/use-auth-store";
import DateUtils from "~/utils/DateUtils";

function RoomCard({ roomResponse, active }) {

  const theme = useMantineTheme();
  const { user: adminUser } = useAuthStore();
  const [newMessagesNumber, setNewMessagesNumber] = useState(0);

  useSubscription(["/chat/receive/" + roomResponse.id], (message) => {
    const messageResponse = JSON.parse(message.body);
    if (adminUser && messageResponse.user.id !== adminUser.id) {
      setNewMessagesNumber(newMessagesNumber + 1);
    }
  });
  return (
    <Card
      radius="sm"
      p="sm"
      style={{
        border: `1px solid ${theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]}`,
        backgroundColor: active
          ? theme.colorScheme === "dark"
            ? theme.colors.dark[5]
            : theme.colors.gray[0]
          : "unset",
        "&:hover": {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[5]
              : theme.colors.gray[0],
        },
      }}
    >
      <Group>
        <Avatar color="cyan" size="md" radius="md">
          {roomResponse.user.username.toUpperCase().charAt(0)}
        </Avatar>
        <Stack gap={2}>
          <Group>
            <Text size="xs" c="dimmed">
              Room ID: {roomResponse.id} –{" "}
              {DateUtils.formatterDate(roomResponse.updatedAt)}
            </Text>
          </Group>
          <Group gap="xs">
            <Text size="sm">{roomResponse.user.fullname}</Text>
            {newMessagesNumber > 0 && (
              <Badge variant="filled" size="sm">
                {newMessagesNumber}
              </Badge>
            )}
          </Group>
        </Stack>
      </Group>
    </Card>
  );
}

export default RoomCard;
