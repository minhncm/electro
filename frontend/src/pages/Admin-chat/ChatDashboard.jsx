import {
  ActionIcon,
  Box,
  Grid,
  Group,
  LoadingOverlay,
  Paper,
  ScrollArea,
  Stack,
  Text,
  UnstyledButton,
} from "@mantine/core";
import { useState } from "react";
import { Refresh } from "tabler-icons-react";
import ResourceUrl from "~/constants/ResourceURL";
import useGetAllApi from "~/hooks/admin/use-get-all-api";
import ChatPanel from "./ChatPanel";
import RoomCard from "./RoomCard";

function ChatDashboard() {
  const [activeRoomId, setActiveRoomId] = useState(0);
  const {
    data: roomResponses,
    isLoading: isLoadingRoomResponses,
    refetch: refetchRoomResponses,
  } = useGetAllApi(
    ResourceUrl.ROOM,
    "rooms",
    {
      sort: "updatedAt,desc",
      all: 1,
    },
    (roomResponses) => {
      if (roomResponses.totalElements > 0) {
        setActiveRoomId(roomResponses.content[0].id);
      }
    },
  );

  if (!roomResponses) return <LoadingOverlay visible={true} />;

  return (
    <Grid h="100%">
      <Grid.Col span={4} h="100%">
        <Paper shadow="xs" p="sm" h="100%">
          <Stack gap="xs">
            <Group justify="space-between">
              <Text size="lg" fw={500}>
                Khách hàng
              </Text>
              <ActionIcon
                variant="light"
                color="blue"
                size="sm"
                onClick={() => refetchRoomResponses()}
              >
                <Refresh size={16} />
              </ActionIcon>
            </Group>
            <Box pos="relative">
              <LoadingOverlay visible={isLoadingRoomResponses} />
              <ScrollArea sx={{ height: "calc(100vh - 174px)" }}>
                <Stack gap="xs">
                  {roomResponses.content.map((roomResponse) => (
                    <UnstyledButton
                      key={roomResponse.id}
                      onClick={() => setActiveRoomId(roomResponse.id)}
                    >
                      <RoomCard
                        roomResponse={roomResponse}
                        active={roomResponse.id === activeRoomId}
                      />
                    </UnstyledButton>
                  ))}
                </Stack>
              </ScrollArea>
            </Box>
          </Stack>
        </Paper>
      </Grid.Col>
      <Grid.Col span={8} h="100%">
        <Paper shadow="xs" h="100%" style={{ overflow: "hidden" }}>
          {roomResponses.content.length > 0 && (
            <ChatPanel roomId={activeRoomId} />
          )}
        </Paper>
      </Grid.Col>
    </Grid>
  );
}

export default ChatDashboard;
