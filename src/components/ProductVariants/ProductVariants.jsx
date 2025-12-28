import { Table } from "@mantine/core";
import ProductVariantRow from "~/components/ProductVariantRow";

function ProductVariants({
  variants,
  setVariants,
  productProperties,
  setProductProperties,
  selectedVariantIndexes,
  setSelectedVariantIndexes,
}) {
  return (
    <Table horizontalSpacing="xs" verticalSpacing="sm" striped>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>#</Table.Th>
          <Table.Th>Phiên bản</Table.Th>
          <Table.Th>SKU</Table.Th>
          <Table.Th>Giá vốn</Table.Th>
          <Table.Th>Giá bán</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <tbody>
        {variants.map((variant, index) => (
          <ProductVariantRow
            key={index}
            variant={variant}
            index={index}
            variants={variants}
            setVariants={setVariants}
            selectedVariantIndexes={selectedVariantIndexes}
            setSelectedVariantIndexes={setSelectedVariantIndexes}
          />
        ))}
      </tbody>
    </Table>
  );
}

export default ProductVariants;
