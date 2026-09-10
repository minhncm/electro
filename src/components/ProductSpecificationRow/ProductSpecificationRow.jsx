import { ActionIcon, Group, Select, TextInput } from "@mantine/core";
import { AB, DragDrop, Keyboard, PlaystationX } from "tabler-icons-react";

function ProductSpecificationRow({
  specification,
  index,
  specifications,
  setSpecifications,
  specificationSelectList,
  setSpecificationSelectList,
}) {
  const isDisabledProductSpecificationValueInput = specification.id === 0;
  return (
    <Group gap="sm" wrap="nowrap" justify="space-between">
      <ActionIcon color="blue" variant="hover" size={36} title="Di chuyển thông số sản phẩm">
        <DragDrop />
      </ActionIcon>
      <Select
        w="100%"
        placeholder="Chọn thông số"
        icon={<AB size={14} />}
        clearable
        searchable
        value={JSON.stringify({ id: specification.id, name: specification.name, code: specification.code })}
        data={specificationSelectList}
      />
      <TextInput
        w="100%"
        placeholder="Nhập giá trị"
        icon={<Keyboard size={14} />}
        value={specification.value}
        disabled={isDisabledProductSpecificationValueInput}
      />
      <ActionIcon color="red" variant="hover" size={36} title="Xóa thông số">
        <PlaystationX />
      </ActionIcon>
    </Group>
  );
}

export default ProductSpecificationRow;
