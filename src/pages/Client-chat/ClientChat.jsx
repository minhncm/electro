import {
  Box,
  Button,
  Card,
  Grid,
  ScrollArea,
  Stack,
  Title,
  useMantineTheme,
} from "@mantine/core";
import ClientUserNavbar from "~/components/ClientUserNavbar/ClientUserNavbar";
import Container from "~/components/Container/Container";
import MessageInput from "./MessageInput";
import ToMessage from "./ToMessage";
import FromMessage from "./FromMessage";
import useAuthStore from "~/stores/use-auth-store";
import { useCreateRoomApi, useGetRoomApi } from "~/hooks/client/use-chat-api";
import { useSubscription } from "react-stomp-hooks";
import { useEffect, useState } from "react";

function ClientChat() {
  const theme = useMantineTheme();

  const { user } = useAuthStore();
  const { data: roomExistResponse } = useGetRoomApi();
  const createRoomApi = useCreateRoomApi();
  const [messages, setMessages] = useState([]);
  useSubscription(
    roomExistResponse && roomExistResponse.roomExistence
      ? ["/chat/receive/" + roomExistResponse.roomResponse.id]
      : [],
    (message) =>
      setMessages((messages) => [...messages, JSON.parse(message.body)]),
  );

  useEffect(() => {
    if (roomExistResponse) {
      setMessages(roomExistResponse.roomRecentMessages);
    }
  }, [roomExistResponse]);

  const handleCreateRoomButton = () => createRoomApi.mutate();

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
                <Title order={2}>Yêu cầu tư vấn</Title>

                <Card p={0} radius="md" h={550} withBorder shadow="none">
                  {roomExistResponse && !roomExistResponse.roomExistence && (
                    <Box
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        zIndex: 10,
                      }}
                    >
                      <Button size="lg" onClick={handleCreateRoomButton}>
                        Gửi yêu cầu tư vấn
                      </Button>
                    </Box>
                  )}
                  {roomExistResponse &&
                    roomExistResponse.roomExistence &&
                    user && (
                      <Stack
                        gap={0}
                        style={{ position: "relative", height: "100%" }}
                      >
                        {roomExistResponse &&
                          roomExistResponse.roomResponse &&
                          user && (
                            <ScrollArea style={{ height: "calc(100% - 68px)" }}>
                              <Stack
                                gap={0}
                                style={{ paddingTop: theme.spacing.md }}
                              >
                                {messages.map((message) =>
                                  message.user.id === user.id ? (
                                    <FromMessage
                                      key={message.id}
                                      message={message}
                                    />
                                  ) : (
                                    <ToMessage
                                      key={message.id}
                                      message={message}
                                    />
                                  ),
                                )}
                              </Stack>
                            </ScrollArea>
                          )}
                        <MessageInput
                          roomId={roomExistResponse.roomResponse.id}
                          userId={user.id}
                        />
                      </Stack>
                    )}
                </Card>
              </Stack>
            </Card>
          </Grid.Col>
        </Grid>
      </Container>
    </main>
  );
}

export default ClientChat;
