import { ActionIcon, Button, Group, Title } from "@mantine/core";
import { Link } from "react-router-dom";
import { Hash, Plus, Trash } from "tabler-icons-react";

function ManageHeader({ title }) {
  return (
    <Group justify="space-between">
      <Group gap="xs">
        <ActionIcon>
          <Hash />
        </ActionIcon>
        <Title order={3}>{title}</Title>
      </Group>

      <Group gap="xs">
        <Button component={Link} to="create" variant="outline" leftSection={<Plus />}>
          Thêm mới
        </Button>
        <Button component={Link} to="create" variant="outline" color="red" leftSection={<Trash />}>
          Xóa hàng loạt
        </Button>
      </Group>
    </Group>
  );
}

export default ManageHeader;
