import {
  LoadingOverlay,
  ScrollArea,
  Stack,
  useMantineTheme,
} from "@mantine/core";
import { FromMessage, ToMessage } from "../Client-chat";
import MessageInput from "../Client-chat/MessageInput";
import useAuthStore from "~/stores/use-auth-store";
import { useRef, useState } from "react";
import { useSubscription } from "react-stomp-hooks";
import ResourceUrl from "~/constants/ResourceURL";
import useGetAllApi from "~/hooks/admin/use-get-all-api";

function ChatPanel({ roomId }) {
  const theme = useMantineTheme();
  const { user: adminUser } = useAuthStore();
  const viewport = useRef(null);
  const [messages, setMessages] = useState([]);

  console.log(messages);

  const {
    isSuccess: isSuccessMessageResponses,
    isLoading: isLoadingMessageResponses,
  } = useGetAllApi(
    ResourceUrl.MESSAGE,
    "messages",
    { filter: "room.id==" + roomId },
    (messageResponses) =>
      setMessages(messageResponses.content.sort((a, b) => a.id - b.id)),
  );

  useSubscription(
    isSuccessMessageResponses ? ["/chat/receive/" + roomId] : [],
    (message) =>
      setMessages((messages) => [...messages, JSON.parse(message.body)]),
  );

  return (
    <Stack gap={0} style={{ position: "relative", height: "100%" }}>
      <LoadingOverlay visible={isLoadingMessageResponses} />
      <ScrollArea
        viewportRef={viewport}
        style={{ height: "calc(100vh - 172px)" }}
      >
        <Stack gap={0} style={{ paddingTop: theme.spacing.md }}>
          {messages.map((message) =>
            adminUser && message.user.id === adminUser.id ? (
              <FromMessage key={message.id} message={message} />
            ) : (
              <ToMessage key={message.id} message={message} />
            ),
          )}
        </Stack>
      </ScrollArea>
      <MessageInput roomId={roomId} userId={adminUser?.id || 0} />
    </Stack>
  );
}
export default ChatPanel;
