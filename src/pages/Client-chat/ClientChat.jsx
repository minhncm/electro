import { Box, Button, Card, Grid, ScrollArea, Stack, Title, useMantineTheme } from "@mantine/core";
import ClientUserNavbar from "~/components/ClientUserNavbar/ClientUserNavbar";
import Container from "~/components/Container/Container";
import MessageInput from "./MessageInput";
import ToMessage from "./ToMessage";
import FromMessage from "./FromMessage";

const roomExistResponse = {
  roomExistence: true,
  roomResponse: {
    id: 3,
    createdAt: "2025-10-29T14:29:40Z",
    updatedAt: "2025-10-29T14:31:21Z",
    name: "Nguyễn Công Minh",
    user: {
      id: 6,
      username: "ncm",
      fullname: "Nguyễn Công Minh",
      email: "ncm071205@gmail.com",
    },
    lastMessage: {
      id: 5,
      createdAt: "2025-10-29T14:31:21Z",
      updatedAt: "2025-10-29T14:31:21Z",
      content: "ok bạn nói đi",
      status: 1,
      user: {
        id: 3,
        username: "ethuillier2",
        fullname: "Ermin Thuillier",
        email: "ethuillier2@jimdo.com",
      },
    },
  },
  roomRecentMessages: [
    {
      id: 2,
      createdAt: "2025-10-29T14:29:46Z",
      updatedAt: "2025-10-29T14:29:46Z",
      content: "ALooo",
      status: 1,
      user: {
        id: 6,
        username: "ncm",
        fullname: "Nguyễn Công Minh",
        email: "ncm071205@gmail.com",
      },
    },
    {
      id: 3,
      createdAt: "2025-10-29T14:30:20Z",
      updatedAt: "2025-10-29T14:30:20Z",
      content: "có gì không bạn êi",
      status: 1,
      user: {
        id: 3,
        username: "ethuillier2",
        fullname: "Ermin Thuillier",
        email: "ethuillier2@jimdo.com",
      },
    },
    {
      id: 4,
      createdAt: "2025-10-29T14:30:38Z",
      updatedAt: "2025-10-29T14:30:38Z",
      content: "tôi muốn tư vấn 1 vài thứ",
      status: 1,
      user: {
        id: 6,
        username: "ncm",
        fullname: "Nguyễn Công Minh",
        email: "ncm071205@gmail.com",
      },
    },
    {
      id: 5,
      createdAt: "2025-10-29T14:31:21Z",
      updatedAt: "2025-10-29T14:31:21Z",
      content: "ok bạn nói đi",
      status: 1,
      user: {
        id: 3,
        username: "ethuillier2",
        fullname: "Ermin Thuillier",
        email: "ethuillier2@jimdo.com",
      },
    },
  ],
};

function ClientChat() {
  const theme = useMantineTheme();

  const user = { id: 6 };

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
                      <Button size="lg">Gửi yêu cầu tư vấn</Button>
                    </Box>
                  )}
                  {roomExistResponse && roomExistResponse.roomExistence && user && (
                    <Stack gap={0} style={{ position: "relative", height: "100%" }}>
                      <ScrollArea style={{ height: "calc(100% - 68px)" }}>
                        <Stack gap={0} style={{ paddingTop: theme.spacing.md }}>
                          {roomExistResponse.roomRecentMessages.map((message) =>
                            message.user.id === user.id ? (
                              <FromMessage key={message.id} message={message} />
                            ) : (
                              <ToMessage key={message.id} message={message} />
                            )
                          )}
                        </Stack>
                      </ScrollArea>
                      <MessageInput />
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
