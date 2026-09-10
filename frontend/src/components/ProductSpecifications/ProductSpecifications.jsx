import { Button, Stack } from "@mantine/core";
import ProductSpecificationRow from "~/components/ProductSpecificationRow";

function ProductSpecifications({
  specifications,
  setSpecifications,
  specificationSelectList,
  setSpecificationSelectList,
}) {
  const isDisabledCreateProductSpecificationButton = specifications?.content.length === specificationSelectList.length;

  return (
    <Stack gap="sm">
      {specifications?.content.map((specification, index) => (
        <ProductSpecificationRow
          key={index}
          specification={specification}
          index={index}
          specifications={specifications}
          setSpecifications={setSpecifications}
          specificationSelectList={specificationSelectList}
          setSpecificationSelectList={setSpecificationSelectList}
        />
      ))}
      <Button variant="outline" disabled={isDisabledCreateProductSpecificationButton}>
        Thêm thông số sản phẩm
      </Button>
    </Stack>
  );
}

export default ProductSpecifications;
