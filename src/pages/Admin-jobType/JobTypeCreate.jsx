import { Button, Divider, Grid, Group, Paper, Select, Stack, TextInput } from "@mantine/core";
import CreateUpdateTitle from "~/components/CreateUpdateTitle";
import DefaultPropertyPanel from "~/components/DefaultPropertyPanel";
import JobTypeConfigs from "~/pages/Admin-jobType/JobTypeConfigs";

function JobTypeCreate() {
  return (
    <Stack maw={800}>
      <CreateUpdateTitle managerPath={JobTypeConfigs.managerPath} title={JobTypeConfigs.createTitle} />

      <DefaultPropertyPanel />

      <form>
        <Paper shadow="xs">
          <Stack gao={0}>
            <Grid p="sm">
              <Grid.Col span={6}>
                <TextInput required label={JobTypeConfigs.properties.name.label} />
              </Grid.Col>
              <Grid.Col span={6}>
                <Select required label={JobTypeConfigs.properties.status.label} placeholder="--" />
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

export default JobTypeCreate;
