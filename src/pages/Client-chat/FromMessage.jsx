import { Card, Group, Text, useMantineTheme } from "@mantine/core";

function FromMessage({ message }) {
  const theme = useMantineTheme();
  return (
    <Group gap="xs" px="md" pb="md" justify="end" align="end">
      <Text size="xs" c="dimmed">
        {message.createdAt}
      </Text>
      <Card
        radius="md"
        px="md"
        py="xs"
        maw={500}
        bg={theme.colorScheme === "dark" ? theme.colors.blue[9] : theme.colors.blue[5]}
      >
        <Text size="sm" c="white">
          {message.content}
        </Text>
      </Card>
    </Group>
  );
}

export default FromMessage;
