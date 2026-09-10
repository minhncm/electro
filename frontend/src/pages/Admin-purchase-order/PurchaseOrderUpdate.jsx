import { Button, Divider, Grid, Group, Paper, Select, Stack, Text, Textarea, TextInput } from "@mantine/core";
import CreateUpdateTitle from "~/components/CreateUpdateTitle";
import DefaultPropertyPanel from "~/components/DefaultPropertyPanel";
import PurchaseOrderConfigs from "~/pages/Admin-purchase-order/PurchaseOrderConfigs";

function PurchaseOrderUpdate() {
  return (
    <Stack pb={50}>
      <CreateUpdateTitle managerPath={PurchaseOrderConfigs.managerPath} title={PurchaseOrderConfigs.updateTitle} />
      <DefaultPropertyPanel />

      <Grid>
        <Grid.Col span={8}>
          <Paper shadow="xs">
            <Stack gap="xs" p="sm">
              {/* <VariantFinder
                selectedVariants={variants}
                onClickItem={handleClickVariantResultItem}
                errorSearchInput={form.errors.purchaseOrderVariants}
              /> */}
              {/* {variants.length > 0 && (
                <VariantTable
                  type={EntityType.PURCHASE_ORDER}
                  variants={variants}
                  variantRequests={form.values.purchaseOrderVariants}
                  handleQuantityInput={handleQuantityInput}
                  handleDeleteVariantButton={handleDeleteVariantButton}
                />
              )} */}
            </Stack>

            <Divider mt={5} />

            <Text p="sm" size="sm" fw={500} ta="right">
              <span>Tổng thành tiền: </span>
              <Text size="md" c="blue" component="span">
                {/* {MiscUtils.toVND(form.values.totalAmount) + " ₫"} */}
              </Text>
            </Text>
          </Paper>
        </Grid.Col>

        <Grid.Col span={4}>
          <form>
            <Paper shadow="xs">
              <Stack spacing={0}>
                <Grid p="sm">
                  <Grid.Col>
                    <TextInput required label={PurchaseOrderConfigs.properties.code.label} />
                  </Grid.Col>
                  <Grid.Col>
                    <Select required label="Nhà cung cấp" placeholder="--" searchable />
                  </Grid.Col>
                  <Grid.Col>
                    <Select required label="Điểm nhập hàng" placeholder="--" searchable />
                  </Grid.Col>
                  <Grid.Col>
                    <Textarea label={PurchaseOrderConfigs.properties.note.label} />
                  </Grid.Col>
                  <Grid.Col>
                    <Select required label={PurchaseOrderConfigs.properties.status.label} placeholder="--" />
                  </Grid.Col>
                </Grid>

                <Divider mt="xs" />

                <Group position="apart" p="sm">
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

export default PurchaseOrderUpdate;
