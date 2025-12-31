import { Button, Divider, Grid, Group, Paper, Select, Stack, Textarea, TextInput } from "@mantine/core";
import CreateUpdateTitle from "~/components/CreateUpdateTitle";
import DefaultPropertyPanel from "~/components/DefaultPropertyPanel";
import PropertyConfigs from "~/pages/Admin-property/PropertyConfigs";

function PropertyUpdate() {
  return (
    <Stack maw={800}>
      <CreateUpdateTitle managerPath={PropertyConfigs.managerPath} title={PropertyConfigs.updateTitle} />
      <DefaultPropertyPanel />
      <form>
        <Paper shadow="xs">
          <Stack gap={0}>
            <Grid p="sm">
              <Grid.Col span={6}>
                <TextInput required label={PropertyConfigs.properties.name.label} />
              </Grid.Col>
              <Grid.Col span={6}>
                <TextInput required label={PropertyConfigs.properties.code.label} />
              </Grid.Col>
              <Grid.Col>
                <Textarea label={PropertyConfigs.properties.description.label} />
              </Grid.Col>
              <Grid.Col span={6}>
                <Select required label={PropertyConfigs.properties.status.label} placeholder="--" />
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

export default PropertyUpdate;
