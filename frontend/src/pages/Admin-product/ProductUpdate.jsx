import {
  Button,
  Divider,
  Grid,
  Group,
  MultiSelect,
  NumberInput,
  Paper,
  Select,
  Stack,
  Text,
  Textarea,
  TextInput,
  Title,
} from "@mantine/core";
import CreateUpdateTitle from "~/components/CreateUpdateTitle";
import DefaultPropertyPanel from "~/components/DefaultPropertyPanel";
import ProductConfigs from "~/pages/Admin-product/ProductConfigs";

function ProductUpdate() {
  return (
    <Stack maw={800}>
      <CreateUpdateTitle managerPath={ProductConfigs.managerPath} title={ProductConfigs.updateTitle} />
      <DefaultPropertyPanel />
      <form>
        <Paper shadow="xs">
          <Stack gap={0}>
            <Grid p="sm">
              <Grid.Col>
                <Title order={4}>Thông tin cơ bản</Title>
                <Text size="sm">Một số thông tin chung</Text>
              </Grid.Col>
              <Grid.Col>
                <TextInput required label={ProductConfigs.properties.name.label} />
              </Grid.Col>
              <Grid.Col span={6}>
                <TextInput required label={ProductConfigs.properties.code.label} />
              </Grid.Col>
              <Grid.Col span={6}>
                <TextInput required label={ProductConfigs.properties.slug.label} />
              </Grid.Col>
              <Grid.Col>
                <Textarea label={ProductConfigs.properties.shortDescription.label} />
              </Grid.Col>
              <Grid.Col>
                <Textarea label={ProductConfigs.properties.description.label} />
              </Grid.Col>
              <Grid.Col>
                <Title order={4}>Hình sản phẩm</Title>
                <Text size="sm">Thêm danh sách hình giới thiệu sản phẩm và chọn hình đại diện</Text>
              </Grid.Col>
              <Grid.Col>
                {/* <ProductImagesDropzone
                  imageFiles={imageFiles}
                  setImageFiles={setImageFiles}
                  thumbnailName={thumbnailName}
                  setThumbnailName={setThumbnailName}
                /> */}
              </Grid.Col>
              <Grid.Col>
                <Title order={4}>Thông số sản phẩm</Title>
                <Text size="sm">Thêm các thông số của sản phẩm</Text>
              </Grid.Col>
              <Grid.Col>
                {/* <ProductSpecifications
                  specifications={form.values.specifications}
                  setSpecifications={(specifications) => form.setFieldValue("specifications", specifications)}
                  specificationSelectList={specificationSelectList}
                  setSpecificationSelectList={setSpecificationSelectList}
                /> */}
              </Grid.Col>
              <Grid.Col>
                <Title order={4}>Thuộc tính sản phẩm</Title>
                <Text size="sm">Thêm mới thuộc tính giúp sản phẩm có nhiều lựa chọn, như kích cỡ hay màu sắc</Text>
              </Grid.Col>
              <Grid.Col>
                {/* <ProductProperties
                  productProperties={form.values.properties}
                  setProductProperties={(productProperties) => form.setFieldValue("properties", productProperties)}
                  productPropertySelectList={productPropertySelectList}
                  setProductPropertySelectList={setProductPropertySelectList}
                /> */}
              </Grid.Col>
              <Grid.Col>
                <Title order={4}>Phiên bản sản phẩm</Title>
                <Text size="sm">Phiên bản mặc định của sản phẩm hoặc phiên bản dựa vào thuộc tính sản phẩm</Text>
              </Grid.Col>
              <Grid.Col>
                {/* <ProductVariants
                  variants={form.values.variants}
                  setVariants={(variants) => form.setFieldValue("variants", variants)}
                  productProperties={form.values.properties}
                  setProductProperties={(productProperties) => form.setFieldValue("properties", productProperties)}
                  selectedVariantIndexes={selectedVariantIndexes}
                  setSelectedVariantIndexes={setSelectedVariantIndexes}
                /> */}
              </Grid.Col>
              <Grid.Col>
                <Title order={4}>Thông tin bổ sung</Title>
                <Text size="sm">Một số thông tin thêm</Text>
              </Grid.Col>
              <Grid.Col span={6}>
                <Select required label={ProductConfigs.properties.status.label} placeholder="--" />
              </Grid.Col>
              <Grid.Col span={6}>
                <Select label={ProductConfigs.properties.categoryId.label} placeholder="--" clearable searchable />
              </Grid.Col>
              <Grid.Col span={6}>
                <Select label={ProductConfigs.properties.brandId.label} placeholder="--" clearable searchable />
              </Grid.Col>
              <Grid.Col span={6}>
                <Select label={ProductConfigs.properties.supplierId.label} placeholder="--" clearable searchable />
              </Grid.Col>
              <Grid.Col span={6}>
                <Select label={ProductConfigs.properties.unitId.label} placeholder="--" clearable />
              </Grid.Col>
              <Grid.Col>
                <MultiSelect
                  label={ProductConfigs.properties.tags.label}
                  placeholder="--"
                  clearable
                  searchable
                  creatable
                  getCreateLabel={(tagName) => `+ Tạo tag ${tagName}`}
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <NumberInput
                  precision={2}
                  min={0}
                  label={ProductConfigs.properties.weight.label}
                  description="Tính theo gam"
                />
              </Grid.Col>
              <Grid.Col span={6} p={0}></Grid.Col>
              <Grid.Col span={6}>
                <Select label={ProductConfigs.properties.guaranteeId.label} placeholder="--" clearable />
              </Grid.Col>
            </Grid>
            <Divider mt="xs" />
            <Group justify="space-between" p="sm">
              <Button variant="default">Mặc định</Button>
              <Button type="submit">Thêm</Button>
            </Group>
          </Stack>
        </Paper>
      </form>
    </Stack>
  );
}

export default ProductUpdate;
