import { Button, Divider, Grid, Group, NumberInput, Paper, Select, Stack, Tabs, TextInput } from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import CreateUpdateTitle from "~/components/CreateUpdateTitle";
import DefaultPropertyPanel from "~/components/DefaultPropertyPanel";
import DateUtils from "~/utils/DateUtils";
import PromotionConfigs from "./PromotionConfigs";

function PromotionUpdate() {
  return (
    <Stack pb={50}>
      <CreateUpdateTitle managerPath={PromotionConfigs.managerPath} title={PromotionConfigs.updateTitle} />
      <DefaultPropertyPanel />

      <Grid>
        <Grid.Col span={8}>
          <Paper shadow="xs" p="sm">
            <Tabs defaultValue={PromotionConfigs.addProductMode.CATEGORY} variant="pills">
              <Tabs.List>
                <Tabs.Tab value={PromotionConfigs.addProductMode.CATEGORY} label="Danh mục">
                  tab 1
                  {/* <EntityFinder
                  selections={categories}
                  onClickItem={handleAddCategoryFinder}
                  onDeleteItem={handleDeleteCategoryFinder}
                  options={{
                    resourceUrl: CategoryConfigs.resourceUrl,
                    resourceKey: CategoryConfigs.resourceKey,
                    resultListSize: 5,
                    resultFragment: (categoryResponse) => <Text size="sm">{categoryResponse.name}</Text>,
                    inputLabel: "Thêm danh mục sản phẩm",
                    inputPlaceholder: "Nhập tên danh mục sản phẩm",
                    selectedFragment: (categoryResponse) => <Text size="sm">{categoryResponse.name}</Text>,
                    deleteButtonTitle: "Xóa danh mục sản phẩm này",
                  }}
                  errorSearchInput={form.errors.categoryIds}
                /> */}
                </Tabs.Tab>
                <Tabs.Tab value={PromotionConfigs.addProductMode.PRODUCT} label="Sản phẩm">
                  tab 2
                  {/* <EntityFinder
                  selections={products}
                  onClickItem={handleAddProductFinder}
                  onDeleteItem={handleDeleteProductFinder}
                  options={{
                    resourceUrl: ProductConfigs.resourceUrl,
                    resourceKey: ProductConfigs.resourceKey,
                    resultListSize: 5,
                    resultFragment: (productResponse) => (
                      <Stack gap={2}>
                        <Text size="sm">{productResponse.name}</Text>
                        <Group gap="xs">
                          <Text size="xs" color="dimmed">
                            Mã: {productResponse.code}
                          </Text>
                          <Text size="xs" color="dimmed">
                            Danh mục: {productResponse.category?.name}
                          </Text>
                        </Group>
                      </Stack>
                    ),
                    inputLabel: "Thêm sản phẩm",
                    inputPlaceholder: "Nhập tên sản phẩm",
                    selectedFragment: (productResponse) => (
                      <Stack gap={2}>
                        <Text size="sm">{productResponse.name}</Text>
                        <Group gap="xs">
                          <Text size="xs" color="dimmed">
                            Mã: {productResponse.code}
                          </Text>
                          <Text size="xs" color="dimmed">
                            Danh mục: {productResponse.category?.name}
                          </Text>
                        </Group>
                      </Stack>
                    ),
                    deleteButtonTitle: "Xóa sản phẩm này",
                  }}
                  errorSearchInput={form.errors.productIds}
                /> */}
                </Tabs.Tab>
              </Tabs.List>
              <Tabs.Panel value={PromotionConfigs.addProductMode.CATEGORY}></Tabs.Panel>
              <Tabs.Panel value={PromotionConfigs.addProductMode.PRODUCT}></Tabs.Panel>
            </Tabs>
          </Paper>
        </Grid.Col>

        <Grid.Col span={4}>
          <form>
            <Paper shadow="xs">
              <Stack gap={0}>
                <Grid p="sm">
                  <Grid.Col>
                    <TextInput required label={PromotionConfigs.properties.name.label} />
                  </Grid.Col>
                  <Grid.Col>
                    <DatePickerInput
                      type="default"
                      required
                      locale="vi"
                      clearable={false}
                      minDate={DateUtils.today()}
                      allowSingleDateInRange={false}
                      label="Khoảng thời gian"
                      placeholder="Chọn thời gian diễn ra khuyến mãi"
                    />
                  </Grid.Col>
                  <Grid.Col>
                    <NumberInput required label={PromotionConfigs.properties.percent.label} min={1} max={100} />
                  </Grid.Col>
                  <Grid.Col>
                    <Select required label={PromotionConfigs.properties.status.label} placeholder="--" />
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
        </Grid.Col>
      </Grid>
    </Stack>
  );
}

export default PromotionUpdate;
