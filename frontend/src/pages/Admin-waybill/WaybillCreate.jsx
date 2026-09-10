import {
  Button,
  Divider,
  Grid,
  Group,
  NumberInput,
  Paper,
  Select,
  Stack,
  Textarea,
} from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import { Loader } from "tabler-icons-react";
import CreateUpdateTitle from "~/components/CreateUpdateTitle";
import DefaultPropertyPanel from "~/components/DefaultPropertyPanel";
import WaybillConfigs from "~/pages/Admin-waybill/WaybillConfigs";
import DateUtils from "~/utils/DateUtils";
import useWaybillCreateViewModel from "./WaybillCreate.vm";

function WaybillCreate() {
  const {
    form,
    ghnRequiredNoteSelectList,
    orderSelectList,
    isFetchingOrderListResponse,
    handleFormSubmit,
  } = useWaybillCreateViewModel();

  return (
    <Stack maw={800}>
      <CreateUpdateTitle
        managerPath={WaybillConfigs.managerPath}
        title={WaybillConfigs.createTitle}
      />

      <DefaultPropertyPanel />

      <form onSubmit={handleFormSubmit}>
        <Paper shadow="xs">
          <Stack gao={0}>
            <Grid p="sm">
              <Grid.Col>
                <Select
                  required
                  rightSection={
                    isFetchingOrderListResponse ? <Loader size={16} /> : null
                  }
                  label="Đơn hàng"
                  placeholder="Nhập mã đơn hàng và chọn đơn hàng"
                  searchable
                  clearable
                  data={orderSelectList}
                  {...form.getInputProps("orderId")}
                />
              </Grid.Col>
              <Grid.Col>
                <DatePickerInput
                  required
                  locale="vi"
                  label="Ngày gửi hàng"
                  valueFormat="DD/MM/YYYY"
                  minDate={DateUtils.today()}
                  {...form.getInputProps("shippingDate")}
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <NumberInput
                  required
                  min={1}
                  max={30000}
                  label="Khối lượng kiện hàng"
                  description="Tính theo gram. Tối đa 30.000 gram."
                  {...form.getInputProps("weight")}
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <NumberInput
                  required
                  min={1}
                  max={150}
                  label="Chiều dài kiện hàng"
                  description="Tính theo cm. Tối đa 150 cm."
                  {...form.getInputProps("length")}
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <NumberInput
                  required
                  min={1}
                  max={150}
                  label="Chiều rộng kiện hàng"
                  description="Tính theo cm. Tối đa 150 cm."
                  {...form.getInputProps("width")}
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <NumberInput
                  required
                  min={1}
                  max={150}
                  label="Chiều cao kiện hàng"
                  description="Tính theo cm. Tối đa 150 cm."
                  {...form.getInputProps("height")}
                />
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
              <Button type="submit">Thêm</Button>
            </Group>
          </Stack>
        </Paper>
      </form>
    </Stack>
  );
}

export default WaybillCreate;
