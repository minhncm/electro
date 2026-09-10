import { Button, Stack } from "@mantine/core";
import ProductPropertyRow from "~/components/ProductPropertyRow";

function ProductProperties({
  productProperties,
  setProductProperties,
  productPropertySelectList,
  setProductPropertySelectList,
}) {
  const isDisabledCreateProductPropertyButton = productProperties?.content.length === productPropertySelectList.length;
  return (
    <Stack spacing="sm">
      {productProperties?.content.map((productProperty, index) => (
        <ProductPropertyRow
          key={index}
          productProperty={productProperty}
          index={index}
          productProperties={productProperties}
          setProductProperties={setProductProperties}
          productPropertySelectList={productPropertySelectList}
          setProductPropertySelectList={setProductPropertySelectList}
        />
      ))}
      <Button variant="outline" disabled={isDisabledCreateProductPropertyButton}>
        Thêm thuộc tính sản phẩm
      </Button>
    </Stack>
  );
}

export default ProductProperties;
