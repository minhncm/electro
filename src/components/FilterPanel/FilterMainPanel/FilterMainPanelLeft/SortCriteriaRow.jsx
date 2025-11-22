import { ActionIcon, Group, Select } from "@mantine/core";
import { AB, ArrowsDownUp, DragDrop, PlaystationX } from "tabler-icons-react";

function SortCriteriaRow() {
  return (
    <Group gap="sm" wrap="nowrap" justify="space-between">
      <ActionIcon color="blue" variant="subtle" size={36} title="Di chuyển tiêu chí sắp xếp">
        <DragDrop />
      </ActionIcon>
      <Select w="100%" placeholder="Chọn thuộc tính" leftSection={<AB size={14} />} clearable />
      <Select w="100%" placeholder="Chọn thứ tự sắp xếp" leftSection={<ArrowsDownUp size={14} />} clearable />
      <ActionIcon color="red" variant="subtle" size={36} title="Xoá tiêu chí sắp xếp">
        <PlaystationX />
      </ActionIcon>
    </Group>
  );
}

export default SortCriteriaRow;
