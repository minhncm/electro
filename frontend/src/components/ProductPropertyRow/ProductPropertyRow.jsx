import { ActionIcon, Group, MultiSelect, Select } from "@mantine/core";
import { AB, DragDrop, Keyboard, PlaystationX } from "tabler-icons-react";

function ProductPropertyRow({
  productProperty,
  index,
  productProperties,
  setProductProperties,
  productPropertySelectList,
  setProductPropertySelectList,
}) {
  const isDisabledProductPropertyValueInput = productProperty.id === 0;
  return (
    <Group gap="sm" wrap="nowrap" justify="space-between">
      <ActionIcon color="blue" variant="hover" size={36} title="Di chuyển thuộc tính sản phẩm">
        <DragDrop />
      </ActionIcon>
      <Select
        w="100%"
        placeholder="Chọn thuộc tính"
        icon={<AB size={14} />}
        clearable
        searchable
        value={JSON.stringify({ id: productProperty.id, name: productProperty.name, code: productProperty.code })}
        data={productPropertySelectList}
      />
      <MultiSelect
        w="100%"
        placeholder="Nhập giá trị"
        icon={<Keyboard size={14} />}
        searchable
        creatable
        getCreateLabel={(value) => `+ Thêm giá trị ${value}`}
        data={productProperty.value}
        value={productProperty.value}
        disabled={isDisabledProductPropertyValueInput}
      />
      <ActionIcon color="red" variant="hover" size={36} title="Xóa thuộc tính">
        <PlaystationX />
      </ActionIcon>
    </Group>
  );
}

export default ProductPropertyRow;
