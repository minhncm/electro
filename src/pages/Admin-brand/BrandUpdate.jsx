import { Button, Divider, Grid, Group, Paper, Select, Stack, Textarea, TextInput } from "@mantine/core";
import CreateUpdateTitle from "~/components/CreateUpdateTitle";
import DefaultPropertyPanel from "~/components/DefaultPropertyPanel";
import BrandConfigs from "~/pages/Admin-brand/BrandConfigs";

function BrandUpdate() {
  return (
    <Stack maw={800}>
      <CreateUpdateTitle managerPath={BrandConfigs.managerPath} title={BrandConfigs.updateTitle} />
      <DefaultPropertyPanel />
      <form>
        <Paper shadow="xs">
          <Stack gap={0}>
            <Grid p="sm">
              <Grid.Col span={6}>
                <TextInput required label={BrandConfigs.properties.name.label} />
              </Grid.Col>
              <Grid.Col span={6}>
                <TextInput required label={BrandConfigs.properties.code.label} />
              </Grid.Col>
              <Grid.Col>
                <Textarea label={BrandConfigs.properties.description.label} />
              </Grid.Col>
              <Grid.Col span={6}>
                <Select required label={BrandConfigs.properties.status.label} placeholder="--" />
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

export default BrandUpdate;
