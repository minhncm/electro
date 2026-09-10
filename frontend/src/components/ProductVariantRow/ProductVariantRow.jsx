import { Checkbox, NumberInput, Table, TextInput, useMantineTheme } from "@mantine/core";
import MiscUtils from "~/utils/MiscUtils";

function ProductVariantRow({
  variant,
  index,
  variants,
  setVariants,
  selectedVariantIndexes,
  setSelectedVariantIndexes,
  isNewable,
}) {
  const theme = useMantineTheme();
  return (
    <Table.Tr
      style={
        isNewable
          ? {
              backgroundColor:
                theme.colorScheme === "dark" ? theme.fn.rgba(theme.colors.yellow[8], 0.1) : theme.colors.yellow[0],
            }
          : {}
      }
    >
      <Table.Td>
        <Checkbox
          checked={selectedVariantIndexes.includes(index)}
          disabled={selectedVariantIndexes.includes(index) && selectedVariantIndexes.length === 1}
        />
      </Table.Td>
      <Table.Td>
        {variant.properties ? variant.properties.content.map((p) => p.value).join(" ⋅ ") : <em>mặc định</em>}
      </Table.Td>
      <Table.Td>
        <TextInput
          styles={{ input: { fontFamily: "monospace" } }}
          size="xs"
          placeholder="Nhập SKU"
          value={variant.sku}
          disabled={!selectedVariantIndexes.includes(index)}
        />
      </Table.Td>
      <Table.Td>
        <NumberInput
          size="xs"
          placeholder="Nhập giá gốc"
          value={variant.cost}
          disabled={!selectedVariantIndexes.includes(index)}
          min={0}
          step={100}
          icon={"₫"}
          parser={MiscUtils.parserPrice}
          formatter={MiscUtils.formatterPrice}
        />
      </Table.Td>
      <Table.Td>
        <NumberInput
          size="xs"
          placeholder="Nhập giá bán"
          value={variant.price}
          disabled={!selectedVariantIndexes.includes(index)}
          min={0}
          step={100}
          icon={"₫"}
          parser={MiscUtils.parserPrice}
          formatter={MiscUtils.formatterPrice}
        />
      </Table.Td>
    </Table.Tr>
  );
}

export default ProductVariantRow;
