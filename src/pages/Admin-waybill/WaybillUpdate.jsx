import {
  Button,
  Divider,
  Grid,
  Group,
  Paper,
  Select,
  Stack,
  Text,
  Textarea,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { useParams } from "react-router-dom";
import CreateUpdateTitle from "~/components/CreateUpdateTitle";
import DefaultPropertyPanel from "~/components/DefaultPropertyPanel";
import WaybillStatusBadge from "~/components/WaybillStatusBadge";
import WaybillConfigs from "~/pages/Admin-waybill/WaybillConfigs";
import DateUtils from "~/utils/DateUtils";
import MiscUtils from "~/utils/MiscUtils";
import useWaybillUpdateViewModel from "./WaybillUpdate.vm";

function WaybillUpdate() {
  const theme = useMantineTheme();
  const { id } = useParams();
  const { form, waybill, ghnRequiredNoteSelectList, handleFormSubmit } =
    useWaybillUpdateViewModel(id);

  if (!waybill) return null;
  return (
    <Stack maw={800}>
      <CreateUpdateTitle
        managerPath={WaybillConfigs.managerPath}
        title={WaybillConfigs.updateTitle}
      />

      <DefaultPropertyPanel
        id={waybill.id}
        createdAt={waybill.createdAt}
        updatedAt={waybill.updatedAt}
      />

      <form onSubmit={handleFormSubmit}>
        <Paper shadow="xs">
          <Stack gao={0}>
            <Grid p="sm">
              <Grid.Col>
                <Title order={4}>Thông tin vận đơn</Title>
                <Text size="sm">Một số thông tin chung</Text>
              </Grid.Col>
              <Grid.Col span={6}>
                <Stack gap={4}>
                  <Text size="sm" fw={500}>
                    Mã vận đơn
                  </Text>
                  <Text sx={{ fontFamily: theme.fontFamilyMonospace }}>
                    {waybill.code}
                  </Text>
                </Stack>
              </Grid.Col>
              <Grid.Col span={6}>
                <Stack gap={4}>
                  <Text size="sm" fw={500}>
                    Mã đơn hàng
                  </Text>
                  <Text sx={{ fontFamily: theme.fontFamilyMonospace }}>
                    {waybill.order.code}
                  </Text>
                </Stack>
              </Grid.Col>
              <Grid.Col span={6}>
                <Stack gap={4}>
                  <Text size="sm" fw={500}>
                    Ngày gửi hàng
                  </Text>
                  <Text>
                    {DateUtils.formatterDate(
                      waybill.shippingDate,
                      "DD/MM/YYYY",
                    )}
                  </Text>
                </Stack>
              </Grid.Col>
              <Grid.Col span={6}>
                <Stack gap={4}>
                  <Text size="sm" fw={500}>
                    Thời gian giao dự kiến
                  </Text>
                  <Text>
                    {DateUtils.formatterDate(
                      waybill.expectedDeliveryTime,
                      "DD/MM/YYYY",
                    )}
                  </Text>
                </Stack>
              </Grid.Col>
              <Grid.Col span={6}>
                <Stack gap={4}>
                  <Text size="sm" fw={500}>
                    Trạng thái
                  </Text>
                  <Text>
                    <WaybillStatusBadge status={waybill.status} />
                  </Text>
                </Stack>
              </Grid.Col>
              <Grid.Col span={6}>
                <Stack gap={4}>
                  <Text size="sm" fw={500}>
                    Người trả phí dịch vụ GHN
                  </Text>
                  <Text>
                    {
                      WaybillConfigs.ghnPaymentTypeIdMap[
                        waybill.ghnPaymentTypeId
                      ]
                    }
                  </Text>
                </Stack>
              </Grid.Col>
              <Grid.Col span={6}>
                <Stack gap={4}>
                  <Text size="sm" fw={500}>
                    Tiền thu hộ
                  </Text>
                  <Text>{MiscUtils.formatterPrice(waybill.codAmount)} ₫</Text>
                </Stack>
              </Grid.Col>
              <Grid.Col span={6}>
                <Stack gap={4}>
                  <Text size="sm" fw={500}>
                    Phí vận chuyển
                  </Text>
                  <Text>{MiscUtils.formatterPrice(waybill.shippingFee)} ₫</Text>
                </Stack>
              </Grid.Col>
              <Grid.Col span={6}>
                <Stack gap={4}>
                  <Text size="sm" fw={500}>
                    Khối lượng kiện hàng
                  </Text>
                  <Text>{MiscUtils.formatterPrice(waybill.weight)} gram</Text>
                </Stack>
              </Grid.Col>
              <Grid.Col span={6}>
                <Stack gap={4}>
                  <Text size="sm" fw={500}>
                    Chiều dài kiện hàng
                  </Text>
                  <Text>{MiscUtils.formatterPrice(waybill.length)} cm</Text>
                </Stack>
              </Grid.Col>
              <Grid.Col span={6}>
                <Stack gap={4}>
                  <Text size="sm" fw={500}>
                    Chiều rộng kiện hàng
                  </Text>
                  <Text>{MiscUtils.formatterPrice(waybill.width)} cm</Text>
                </Stack>
              </Grid.Col>
              <Grid.Col span={6}>
                <Stack gap={4}>
                  <Text size="sm" fw={500}>
                    Chiều cao kiện hàng
                  </Text>
                  <Text>{MiscUtils.formatterPrice(waybill.height)} cm</Text>
                </Stack>
              </Grid.Col>
              <Grid.Col>
                <Title order={4}>Thay đổi thông tin vận đơn</Title>
                <Text size="sm">Thay đổi một số thông tin cho phép</Text>
              </Grid.Col>
              <Grid.Col>
                <Textarea
                  label="Ghi chú vận đơn"
                  {...form.getInputProps("note")}
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <Select
                  required
                  label="Ghi chú cho dịch vụ GHN"
                  placeholder="--"
                  data={ghnRequiredNoteSelectList}
                  {...form.getInputProps("ghnRequiredNote")}
                />
              </Grid.Col>
            </Grid>

            <Divider mt="xs" />

            <Group justify="space-between" p="sm">
              <Button variant="default" onClick={form.reset}>
                Mặc định
              </Button>
              <Button type="submit">Chỉnh sửa</Button>
            </Group>
          </Stack>
        </Paper>
      </form>
    </Stack>
  );
}

export default WaybillUpdate;
