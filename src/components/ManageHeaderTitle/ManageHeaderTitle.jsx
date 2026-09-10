import { ActionIcon, Group, Title } from "@mantine/core";
import { Hash } from "tabler-icons-react";

function ManageHeaderTitle({ title }) {
  return (
    <Group justify="space-between">
      <Group gap="xs">
        <ActionIcon>
          <Hash />
        </ActionIcon>
        <Title order={3}>{title}</Title>
      </Group>
    </Group>
  );
}

export default ManageHeaderTitle;
