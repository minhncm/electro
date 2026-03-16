import {
  Button,
  ColorInput,
  Divider,
  Grid,
  Group,
  Paper,
  Select,
  Stack,
  TextInput,
} from "@mantine/core";
import CreateUpdateTitle from "~/components/CreateUpdateTitle";
import DefaultPropertyPanel from "~/components/DefaultPropertyPanel";
import OrderResourceConfigs from "~/pages/Admin-order-resourse/OrderResourceConfigs";
import useOrderResourceCreateViewModel from "./OrderResourceCreate.vm";

function OrderResourceCreate() {
  const {
    form,
    customerResourceSelectList,
    statusSelectList,
    handleFormSubmit,
  } = useOrderResourceCreateViewModel();

  return (
    <Stack maw={800}>
      <CreateUpdateTitle
        managerPath={OrderResourceConfigs.managerPath}
        title={OrderResourceConfigs.createTitle}
      />
      <DefaultPropertyPanel />
      <form onSubmit={handleFormSubmit}>
        <Paper shadow="xs">
          <Stack gap={0}>
            <Grid p="sm">
              <Grid.Col span={6}>
                <TextInput
                  key={form.key("code")}
                  required
                  label={OrderResourceConfigs.properties.code.label}
                  {...form.getInputProps("code")}
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <TextInput
                  key={form.key("name")}
                  {...form.getInputProps("name")}
                  required
                  label={OrderResourceConfigs.properties.name.label}
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <ColorInput
                  required
                  key={form.key("color")}
                  label={OrderResourceConfigs.properties.color.label}
                  placeholder="Chọn màu"
                  {...form.getInputProps("color")}
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <Select
                  key={form.key("customerResourceId")}
                  label={
                    OrderResourceConfigs.properties.customerResourceId.label
                  }
                  placeholder="--"
                  clearable
                  {...form.getInputProps("customerResourceId")}
                  data={customerResourceSelectList}
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <Select
                  key={form.key("status")}
                  required
                  label={OrderResourceConfigs.properties.status.label}
                  placeholder="--"
                  {...form.getInputProps("status")}
                  data={statusSelectList}
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

export default OrderResourceCreate;
