import { Center, LoadingOverlay, Paper, ScrollArea, Stack, Text, useMantineTheme } from "@mantine/core";
import { Marquee } from "tabler-icons-react";

function ManageMain({ listResponse, isLoading, children }) {
  const theme = useMantineTheme();

  const manageMainInnerFragment = <ScrollArea>{children}</ScrollArea>;

  if (listResponse.totalElements === 0) {
    <Center h="100%">
      {!isLoading && (
        <Stack my={theme.spacing.xl} align="center" bg={theme.colors.blue}>
          <Marquee size={75} strokeWidth={1} />
          <Text size="lg" fw={500}>
            Không có nội dung
          </Text>
        </Stack>
      )}
    </Center>;
  }

  return (
    <Paper shadow="xs" pos="relative">
      <LoadingOverlay visible={isLoading} zIndex={50} />
      {manageMainInnerFragment}
    </Paper>
  );
}

export default ManageMain;
