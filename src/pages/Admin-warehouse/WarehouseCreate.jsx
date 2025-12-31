import { Button, Divider, Grid, Group, Paper, Select, Stack, TextInput } from "@mantine/core";
import CreateUpdateTitle from "~/components/CreateUpdateTitle";
import DefaultPropertyPanel from "~/components/DefaultPropertyPanel";
import WarehouseConfigs from "~/pages/Admin-warehouse/WarehouseConfigs";

function WarehouseCreate() {
  return (
    <Stack maw={800}>
      <CreateUpdateTitle managerPath={WarehouseConfigs.managerPath} title={WarehouseConfigs.createTitle} />
      <DefaultPropertyPanel />
      <form>
        <Paper shadow="xs">
          <Stack gap={0}>
            <Grid p="sm">
              <Grid.Col span={6}>
                <TextInput required label={WarehouseConfigs.properties.code.label} />
              </Grid.Col>
              <Grid.Col span={6}>
                <TextInput required label={WarehouseConfigs.properties.name.label} />
              </Grid.Col>
              <Grid.Col>
                <TextInput label={WarehouseConfigs.properties["address.line"].label} />
              </Grid.Col>
              <Grid.Col span={6}>
                <Select
                  label={WarehouseConfigs.properties["address.provinceId"].label}
                  placeholder="--"
                  clearable
                  searchable
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <Select
                  label={WarehouseConfigs.properties["address.districtId"].label}
                  placeholder="--"
                  clearable
                  searchable
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <Select required label={WarehouseConfigs.properties.status.label} placeholder="--" />
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

export default WarehouseCreate;
