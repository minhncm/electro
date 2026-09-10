import { ActionIcon, Button, Code, Group, Text, TextInput, Tooltip } from "@mantine/core";
import { Filter, FilterOff } from "tabler-icons-react";

function FilterHeaderPanel() {
  return (
    <Group justify="space-between">
      <Group>
        <TextInput placeholder="Bộ lọc..." leftSection={<Filter size={14} />} w={250} />
        <Text size="sm">
          Ngày tạo: <Code color="blue.0">__/__/____</Code>
        </Text>
        <Text size="sm">
          Ngày sửa: <Code color="blue.0">__/__/____</Code>
        </Text>
      </Group>

      <Group gap="sm">
        <Tooltip label="Hủy tạo bộ lọc" withArrow>
          <ActionIcon color="red" variant="light" size={36}>
            <FilterOff />
          </ActionIcon>
        </Tooltip>
        <Button variant="light">Tạo bộ lọc</Button>
      </Group>
    </Group>
  );
}

export default FilterHeaderPanel;
