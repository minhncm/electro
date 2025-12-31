import { Button, Divider, Grid, Group, Paper, Select, Stack, Text, Textarea, TextInput } from "@mantine/core";
import { Loader } from "tabler-icons-react";
import CreateUpdateTitle from "~/components/CreateUpdateTitle";
import DefaultPropertyPanel from "~/components/DefaultPropertyPanel";
import DocketConfigs from "~/pages/Admin-docket/DocketConfigs";

const isFetchingPurchaseOrderListResponse = false;
const isFetchingOrderListResponse = false;

function DocketCreate() {
  return (
    <Stack pb={50}>
      <CreateUpdateTitle managerPath={DocketConfigs.managerPath} title={DocketConfigs.createTitle} />
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
                    <Select required label={DocketConfigs.properties.type.label} placeholder="--" />
                  </Grid.Col>
                  <Grid.Col>
                    <TextInput required label={DocketConfigs.properties.code.label} />
                  </Grid.Col>
                  <Grid.Col>
                    <Select required label="Lý do phiếu NXK" placeholder="--" />
                  </Grid.Col>
                  <Grid.Col>
                    <Select required label="Nhà kho" placeholder="--" />
                  </Grid.Col>
                  <Grid.Col>
                    <Select
                      rightSection={isFetchingPurchaseOrderListResponse ? <Loader size={16} /> : null}
                      label="Đơn mua hàng"
                      placeholder="--"
                      searchable
                      clearable
                    />
                  </Grid.Col>
                  <Grid.Col>
                    <Select
                      rightSection={isFetchingOrderListResponse ? <Loader size={16} /> : null}
                      label="Đơn hàng"
                      placeholder="--"
                      searchable
                      clearable
                    />
                  </Grid.Col>
                  <Grid.Col>
                    <Textarea label={DocketConfigs.properties.note.label} />
                  </Grid.Col>
                  <Grid.Col>
                    <Select required label={DocketConfigs.properties.status.label} placeholder="--" />
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

export default DocketCreate;
