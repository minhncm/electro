import { Button, Divider, Grid, Group, Paper, Select, Stack, TextInput } from "@mantine/core";
import CreateUpdateTitle from "~/components/CreateUpdateTitle";
import DefaultPropertyPanel from "~/components/DefaultPropertyPanel";
import UnitConfigs from "~/pages/Admin-unit/UnitConfigs";

function UnitUpdate() {
  return (
    <Stack maw={800}>
      <CreateUpdateTitle managerPath={UnitConfigs.managerPath} title={UnitConfigs.updateTitle} />
      <DefaultPropertyPanel />
      <form>
        <Paper shadow="xs">
          <Stack gap={0}>
            <Grid p="sm">
              <Grid.Col xs={6}>
                <TextInput required label={UnitConfigs.properties.name.label} />
              </Grid.Col>
              <Grid.Col xs={6}>
                <Select required label={UnitConfigs.properties.status.label} placeholder="--" />
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

export default UnitUpdate;
