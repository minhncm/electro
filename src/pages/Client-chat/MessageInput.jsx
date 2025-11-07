import { ActionIcon, Group, TextInput, useMantineTheme } from "@mantine/core";
import { Send } from "tabler-icons-react";

function MessageInput() {
  const theme = useMantineTheme();
  return (
    <Group
      gap="xs"
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%",
        padding: theme.spacing.md,
        borderTop: `1px solid ${theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]}`,
      }}
    >
      <TextInput placeholder="Nhập tin nhắn" variant="filled" radius="md" style={{ flexGrow: 1 }} />
      <ActionIcon color="blue" radius="md" variant="light" size="lg" title="Gửi tin nhắn">
        <Send size={18} />
      </ActionIcon>
    </Group>
  );
}

export default MessageInput;
