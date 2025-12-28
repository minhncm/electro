import { Button, ColorInput, Divider, Grid, Group, Paper, Select, Stack, TextInput } from "@mantine/core";
import CreateUpdateTitle from "~/components/CreateUpdateTitle";
import DefaultPropertyPanel from "~/components/DefaultPropertyPanel";
import CustomerStatusConfigs from "~/pages/Admin-customer-status/CustomerStatusConfigs";

function CustomerStatusCreate() {
  return (
    <Stack maw={800}>
      <CreateUpdateTitle managerPath={CustomerStatusConfigs.managerPath} title={CustomerStatusConfigs.createTitle} />

      <DefaultPropertyPanel />

      <form>
        <Paper shadow="xs">
          <Stack gap={0}>
            <Grid p="sm">
              <Grid.Col span={6}>
                <TextInput required label={CustomerStatusConfigs.properties.code.label} />
              </Grid.Col>
              <Grid.Col span={6}>
                <TextInput required label={CustomerStatusConfigs.properties.name.label} />
              </Grid.Col>
              <Grid.Col>
                <TextInput required label={CustomerStatusConfigs.properties.description.label} />
              </Grid.Col>
              <Grid.Col span={6}>
                <ColorInput required label={CustomerStatusConfigs.properties.color.label} placeholder="Chọn màu" />
              </Grid.Col>
              <Grid.Col span={6}>
                <Select required label={CustomerStatusConfigs.properties.status.label} placeholder="--" />
              </Grid.Col>
            </Grid>

            <Divider />

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

export default CustomerStatusCreate;
