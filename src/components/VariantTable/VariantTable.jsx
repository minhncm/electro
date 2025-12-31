import { ActionIcon, Center, Group, NumberInput, Stack, Table, Text } from "@mantine/core";
import React from "react";
import MiscUtils from "~/utils/MiscUtils";

export const EntityType = {
  PURCHASE_ORDER: 0,
  DOCKET: 1,
  TRANSFER: 2,
  ORDER: 3,
  COUNT: 4,
};

function VariantTable({
  type,
  variants,
  variantRequests,
  handleDeleteVariantButton,
  handleQuantityInput,
  handleActualInventoryInput,
}) {
  const deltaVariantInventoryFragment = (delta) => {
    const result = MiscUtils.formatterPrice(String(Math.abs(delta)));
    if (delta > 0) {
      return (
        <Text c="green" inherit>
          +{result}
        </Text>
      );
    } else if (delta < 0) {
      return (
        <Text c="red" inherit>
          -{result}
        </Text>
      );
    }
    return (
      <Text c="blue" inherit>
        {result}
      </Text>
    );
  };
  return (
    <Table horizontalSpacing="xs" verticalSpacing="sm" striped>
      <Table.Thead>
        <Table.Tr>
          <Table.Th ta="center">STT</Table.Th>
          <Table.Th>Mặt hàng</Table.Th>
          {type === EntityType.PURCHASE_ORDER && <Table.Th ta="right">Giá vốn</Table.Th>}
          {type === EntityType.ORDER && <Table.Th ta="right">Giá bán</Table.Th>}
          {type !== EntityType.COUNT && <Table.Th ta="center">Số lượng</Table.Th>}
          {type === EntityType.COUNT && <Table.Th ta="center">Tồn kho</Table.Th>}
          {type === EntityType.COUNT && <Table.Th ta="center">Kiểm thực tế</Table.Th>}
          {type === EntityType.COUNT && <Table.Th ta="center">Chênh lệch</Table.Th>}
          {[EntityType.PURCHASE_ORDER, EntityType.ORDER].includes(type) && <Table.Th ta="right">Thành tiền</Table.Th>}
          <Table.Th ta="center">Thao tác</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {variants.map((variant, index) => (
          <Table.Tr key={variant.id}>
            <Table.Td ta="center">{index + 1}</Table.Td>
            <Table.Td>
              <Stack gap={2}>
                <Text size="sm">{variant.product.name}</Text>
                <Group gap={5}>
                  {variant.properties &&
                    variant.properties.content.map((property) => (
                      <React.Fragment key={property.code}>
                        <Text size="xs" c="blue" title={property.name}>
                          {property.value}
                        </Text>
                        <Text size="xs" c="dimmed">
                          ⋅
                        </Text>
                      </React.Fragment>
                    ))}
                  <Text size="xs" c="dimmed">
                    SKU: {variant.sku}
                  </Text>
                </Group>
              </Stack>
            </Table.Td>
            {type === EntityType.PURCHASE_ORDER && <Table.Td ta="right">{MiscUtils.toVND(variant.cost)}</Table.Td>}
            {type === EntityType.ORDER && <Table.Td ta="right">{MiscUtils.toVND(variant.price)}</Table.Td>}
            {type !== EntityType.COUNT && handleQuantityInput && (
              <Table.Td>
                <Center>
                  <NumberInput
                    size="xs"
                    placeholder="--"
                    value={variantRequests[index]?.quantity}
                    onChange={(value) => handleQuantityInput(value || 1, index)}
                    min={1}
                    max={1_000_000}
                    w={100}
                  />
                </Center>
              </Table.Td>
            )}
            {type === EntityType.COUNT && handleActualInventoryInput && (
              <>
                <Table.Td ta="center">{variantRequests[index].inventory}</Table.Td>
                <Table.Td>
                  <Center>
                    <NumberInput
                      size="xs"
                      placeholder="--"
                      onChange={(value) => handleActualInventoryInput(value || 0, index)}
                      min={0}
                      max={1_000_000}
                      parser={MiscUtils.parserPrice}
                      formatter={MiscUtils.formatterPrice}
                      sx={{ width: 100 }}
                    />
                  </Center>
                </Table.Td>
                <Table.Td ta="center">
                  {deltaVariantInventoryFragment(
                    variantRequests[index].actualInventory - variantRequests[index].inventory
                  )}
                </Table.Td>
              </>
            )}
            {[EntityType.PURCHASE_ORDER, EntityType.ORDER].includes(type) && (
              <Table.Td ta="right">{MiscUtils.toVND(variantRequests[index].amount)}</Table.Td>
            )}
            <Table.Td>
              <Center>
                <ActionIcon
                  color="red"
                  variant="outline"
                  size={24}
                  title="Xóa mặt hàng này"
                  onClick={() => handleDeleteVariantButton(index)}
                >
                  <Table.Trash size={16} />
                </ActionIcon>
              </Center>
            </Table.Td>
          </Table.Tr>
        ))}
      </Table.Tbody>
    </Table>
  );
}

export default VariantTable;
