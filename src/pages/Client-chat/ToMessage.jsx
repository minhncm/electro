import {
  Avatar,
  Card,
  Group,
  Stack,
  Text,
  useMantineTheme,
} from "@mantine/core";
import DateUtils from "~/utils/DateUtils";

function ToMessage({ message }) {
  const theme = useMantineTheme();
  return (
    <Group gap="xs" px="md" pb="md" wrap="nowrap" align="flex-end">
      <Avatar size="sm" radius="md" color="cyan">
        {message.user.username.toUpperCase().charAt(0)}
      </Avatar>
      <Stack gap={2.5}>
        <Text size="xs" fw={500}>
          {message.user.fullname}
        </Text>
        <Card
          radius="md"
          px="md"
          py="xs"
          maw={500}
          bg={
            theme.colorScheme === "dark"
              ? theme.colors.dark[4]
              : theme.colors.gray[0]
          }
        >
          <Text size="sm">{message.content}</Text>
        </Card>
        <Text size="xs" c="dimmed">
          {DateUtils.formatterDate(message.createdAt)}
        </Text>
      </Stack>
    </Group>
  );
}

export default ToMessage;
