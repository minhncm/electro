import { Button, Divider, Grid, Group, Paper, Select, Stack, TextInput } from "@mantine/core";
import CreateUpdateTitle from "~/components/CreateUpdateTitle";
import RoleConfigs from "./RoleConfigs";
import DefaultPropertyPanel from "~/components/DefaultPropertyPanel";

function RoleCreate() {
  return (
    <Stack maw={800}>
      <CreateUpdateTitle managerPath={RoleConfigs.managerPath} title={RoleConfigs.createTitle} />

      <DefaultPropertyPanel />

      <form>
        <Paper shadow="xs">
          <Stack gap={0}>
            <Grid p="sm">
              <Grid.Col span={6}>
                <TextInput required label={RoleConfigs.properties.code.label} />
              </Grid.Col>
              <Grid.Col span={6}>
                <TextInput required label={RoleConfigs.properties.name.label} />
              </Grid.Col>
              <Grid.Col span={6}>
                <Select required label={RoleConfigs.properties.status.label} placeholder="--" />
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

export default RoleCreate;
