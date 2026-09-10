import { ActionIcon, Group, TextInput, useMantineTheme } from "@mantine/core";
import { useState } from "react";
import { useStompClient } from "react-stomp-hooks";
import { Send } from "tabler-icons-react";

function MessageInput({ roomId, userId }) {
  const theme = useMantineTheme();
  const [message, setMessage] = useState("");
  const stompClient = useStompClient();

  const handleSendMessageButton = () => {
    if (message.trim() !== "" && stompClient) {
      stompClient.publish({
        destination: "/chat/send/" + roomId,
        body: JSON.stringify({
          content: message.trim(),
          status: 1,
          userId,
          roomId,
        }),
      });
      setMessage("");
    }
  };

  const handleSendMessageInput = (event) => {
    if (event.key === "Enter") {
      handleSendMessageButton();
    }
  };

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
      <TextInput
        placeholder="Nhập tin nhắn"
        variant="filled"
        radius="md"
        style={{ flexGrow: 1 }}
        value={message}
        onChange={(e) => setMessage(e.currentTarget.value)}
        onKeyDown={handleSendMessageInput}
      />
      <ActionIcon
        color="blue"
        radius="md"
        variant="light"
        size="lg"
        title="Gửi tin nhắn"
        onClick={handleSendMessageButton}
      >
        <Send size={18} />
      </ActionIcon>
    </Group>
  );
}

export default MessageInput;
