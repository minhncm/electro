import { Button, ColorInput, Divider, Grid, Group, Paper, Select, Stack, TextInput } from "@mantine/core";
import CreateUpdateTitle from "~/components/CreateUpdateTitle";
import DefaultPropertyPanel from "~/components/DefaultPropertyPanel";
import OrderResourceConfigs from "~/pages/Admin-order-resourse/OrderResourceConfigs";

function OrderResourceCreate() {
  return (
    <Stack maw={800}>
      <CreateUpdateTitle managerPath={OrderResourceConfigs.managerPath} title={OrderResourceConfigs.createTitle} />
      <DefaultPropertyPanel />
      <form>
        <Paper shadow="xs">
          <Stack gap={0}>
            <Grid p="sm">
              <Grid.Col span={6}>
                <TextInput required label={OrderResourceConfigs.properties.code.label} />
              </Grid.Col>
              <Grid.Col span={6}>
                <TextInput required label={OrderResourceConfigs.properties.name.label} />
              </Grid.Col>
              <Grid.Col span={6}>
                <ColorInput required label={OrderResourceConfigs.properties.color.label} placeholder="Chọn màu" />
              </Grid.Col>
              <Grid.Col span={6}>
                <Select label={OrderResourceConfigs.properties.customerResourceId.label} placeholder="--" clearable />
              </Grid.Col>
              <Grid.Col span={6}>
                <Select required label={OrderResourceConfigs.properties.status.label} placeholder="--" />
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

export default OrderResourceCreate;
