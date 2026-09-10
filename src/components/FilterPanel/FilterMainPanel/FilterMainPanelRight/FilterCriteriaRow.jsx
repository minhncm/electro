import { ActionIcon, Group, Input, Select } from "@mantine/core";
import { AB, DragDrop, Filter, Keyboard, PlaystationX } from "tabler-icons-react";

function FilterCriteriaRow() {
  return (
    <Group gap="sm" wrap="nowrap" justify="space-between">
      <ActionIcon color="blue" variant="subtle" size={36} title="Di chuyển tiêu chí lọc">
        <DragDrop />
      </ActionIcon>
      <Select w="100%" placeholder="Chọn thuộc tính" leftSection={<AB size={14} />} clearable />
      <Select w="100%" placeholder="Chọn cách lọc" leftSection={<Filter size={14} />} clearable />
      <Input w="100%" placeholder="Nhập giá trị" leftSection={<Keyboard size={14} />} />
      <ActionIcon color="red" variant="subtle" size={36} title="Xoá tiêu chí lọc">
        <PlaystationX />
      </ActionIcon>
    </Group>
  );
}

export default FilterCriteriaRow;
