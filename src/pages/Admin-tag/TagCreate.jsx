import { Button, Divider, Grid, Group, Paper, Select, Stack, TextInput } from "@mantine/core";
import CreateUpdateTitle from "~/components/CreateUpdateTitle";
import DefaultPropertyPanel from "~/components/DefaultPropertyPanel";
import TagConfigs from "~/pages/Admin-tag/TagConfigs";

function TagCreate() {
  return (
    <Stack maw={800}>
      <CreateUpdateTitle managerPath={TagConfigs.managerPath} title={TagConfigs.createTitle} />
      <DefaultPropertyPanel />
      <form>
        <Paper shadow="xs">
          <Stack gap={0}>
            <Grid p="sm">
              <Grid.Col span={6}>
                <TextInput required label={TagConfigs.properties.name.label} />
              </Grid.Col>
              <Grid.Col span={6}>
                <TextInput required label={TagConfigs.properties.slug.label} />
              </Grid.Col>
              <Grid.Col span={6}>
                <Select required label={TagConfigs.properties.status.label} placeholder="--" />
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

export default TagCreate;
