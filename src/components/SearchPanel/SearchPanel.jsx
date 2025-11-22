import { ActionIcon, Button, Group, Paper, Select, TextInput, Tooltip } from "@mantine/core";
import { AdjustmentsHorizontal, Edit, Eraser, Filter, Search } from "tabler-icons-react";

function SearchPanel() {
  return (
    <Paper shadow="xs" p="sm">
      <Group justify="space-between">
        <Group gap="xs">
          <TextInput placeholder="Từ khóa" leftSection={<Search size={14} />} w={250} />
          <Select placeholder="Chọn bộ lọc" leftSection={<AdjustmentsHorizontal size={14} />} clearable />
          <Tooltip label="Sửa bộ lọc" withArrow>
            <ActionIcon color="teal" variant="light" size={36}>
              <Edit />
            </ActionIcon>
          </Tooltip>
          <Button variant="light" leftSection={<Filter />}>
            Thêm bộ lọc
          </Button>
        </Group>

        <Group gap="sm">
          <Tooltip label="Đặt mặc định" withArrow>
            <ActionIcon color="red" variant="filled" size={36}>
              <Eraser />
            </ActionIcon>
          </Tooltip>
          <Button>Tìm kiếm</Button>
        </Group>
      </Group>
    </Paper>
  );
}

export default SearchPanel;
