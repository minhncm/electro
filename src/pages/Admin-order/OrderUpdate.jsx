import {
  Button,
  Divider,
  Grid,
  Group,
  NumberInput,
  Paper,
  Select,
  Stack,
  Text,
  Textarea,
  TextInput,
} from "@mantine/core";
import { Loader } from "tabler-icons-react";
import CreateUpdateTitle from "~/components/CreateUpdateTitle";
import DefaultPropertyPanel from "~/components/DefaultPropertyPanel";
import OrderConfigs from "./OrderConfigs";

const isFetchingUserListResponse = false;

function OrderUpdate() {
  return (
    <Stack pb={50}>
      <CreateUpdateTitle managerPath={OrderConfigs.managerPath} title={OrderConfigs.updateTitle} />
      <DefaultPropertyPanel />
      <Grid>
        <Grid.Col span={8}>
          <Paper shadow="xs">
            <Stack gap="xs" p="sm">
              {/* <VariantFinder
                selectedVariants={variants}
                onClickItem={handleClickVariantResultItem}
                errorSearchInput={form.errors.countVariants}
              />
              {variants.length > 0 && (
                <VariantTable
                  type={EntityType.COUNT}
                  variants={variants}
                  variantRequests={form.values.countVariants}
                  handleActualInventoryInput={handleActualInventoryInput}
                  handleDeleteVariantButton={handleDeleteVariantButton}
                />
              )} */}
            </Stack>

            <Divider mt={5} />

            <Group position="right">
              <Grid p="sm" gutter="xs" w="45%">
                <Grid.Col span={6}>
                  <Text size="sm" fw={500}>
                    Tổng thành tiền:
                  </Text>
                </Grid.Col>
                <Grid.Col span={6}>
                  <Text size="md" c="blue" fw={500} ta="right"></Text>
                </Grid.Col>
                <Grid.Col span={6}>
                  <Text size="sm" fw={500}>
                    Thuế
                  </Text>
                </Grid.Col>
                <Grid.Col span={6}>
                  <Text size="md" c="blue" fw={500} ta="right"></Text>
                </Grid.Col>
                <Grid.Col span={6}>
                  <Text size="sm" fw={500}>
                    Phí vận chuyển:
                  </Text>
                </Grid.Col>
                <Grid.Col span={6}>
                  <NumberInput size="xs" placeholder="--" min={0} step={100} icon={"₫"} disabled />
                </Grid.Col>
                <Grid.Col span={6}>
                  <Text size="sm" fw={500}>
                    Tổng tiền trả:
                  </Text>
                </Grid.Col>
                <Grid.Col span={6}>
                  <Stack gap={2.5} ta="right">
                    <Text size="md" c="blue" fw={500}></Text>
                    <Text size="xs" c="dimmed">
                      (chưa tính phí vận chuyển)
                    </Text>
                  </Stack>
                </Grid.Col>
              </Grid>
            </Group>
          </Paper>
        </Grid.Col>

        <Grid.Col span={4}>
          <form>
            <Paper shadow="xs">
              <Stack gap={0}>
                <Grid p="sm">
                  <Grid.Col>
                    <Select
                      required
                      rightSection={isFetchingUserListResponse ? <Loader size={16} /> : null}
                      label="Người đặt hàng"
                      placeholder="--"
                      searchable
                    />
                  </Grid.Col>
                  <Grid.Col>
                    <TextInput required label={OrderConfigs.properties.code.label} />
                  </Grid.Col>
                  <Grid.Col>
                    <Select required label={OrderConfigs.properties.status.label} placeholder="--" />
                  </Grid.Col>
                  <Grid.Col>
                    <TextInput required label="Tên người nhận" />
                  </Grid.Col>
                  <Grid.Col>
                    <TextInput required label="Số điện thoại người nhận" />
                  </Grid.Col>
                  <Grid.Col>
                    <TextInput required label="Tỉnh thành người nhận" />
                  </Grid.Col>
                  <Grid.Col>
                    <TextInput required label="Quận huyện người nhận" />
                  </Grid.Col>
                  <Grid.Col>
                    <TextInput required label="Phường xã người nhận" />
                  </Grid.Col>
                  <Grid.Col>
                    <TextInput required label="Địa chỉ người nhận" />
                  </Grid.Col>
                  <Grid.Col>
                    <Select required label="Nguồn đơn hàng" placeholder="--" />
                  </Grid.Col>
                  <Grid.Col>
                    <Select
                      label="Lý do hủy đơn hàng"
                      placeholder="--"
                      clearable
                      // Chỉ bật khi trạng thái đơn hàng là "Hủy bỏ" (5)
                      // disabled={form.values.status !== "5"}
                    />
                  </Grid.Col>
                  <Grid.Col>
                    <Textarea label="Ghi chú đơn hàng" />
                  </Grid.Col>
                  <Grid.Col>
                    <Select required label="Hình thức thanh toán" placeholder="--" />
                  </Grid.Col>
                  <Grid.Col>
                    <Select required label="Trạng thái thanh toán" placeholder="--" />
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

export default OrderUpdate;
