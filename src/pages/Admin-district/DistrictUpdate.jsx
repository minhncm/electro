import { Button, Divider, Grid, Group, Paper, Select, Stack } from "@mantine/core";
import CreateUpdateTitle from "~/components/CreateUpdateTitle";
import DefaultPropertyPanel from "~/components/DefaultPropertyPanel";
import DistrictConfigs from "~/pages/Admin-district/DistrictConfigs";

function DistrictUpdate() {
  return (
    <Stack maw={800}>
      <CreateUpdateTitle managerPath={DistrictConfigs.managerPath} title={DistrictConfigs.updateTitle} />

      <DefaultPropertyPanel />

      <form>
        <Paper shadow="xs">
          <Stack gap={0}>
            <Grid p="sm">
              <Grid.Col span={6}>
                <Select required label={DistrictConfigs.properties.name.label} placeholder="--" clearable searchable />
              </Grid.Col>
              <Grid.Col span={6}>
                <Select required label={DistrictConfigs.properties.code.label} placeholder="--" clearable searchable />
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

export default DistrictUpdate;
