import { Button, Divider, Grid, Group, Paper, Select, Stack, Textarea, TextInput } from "@mantine/core";
import CreateUpdateTitle from "~/components/CreateUpdateTitle";
import DefaultPropertyPanel from "~/components/DefaultPropertyPanel";
import CategoryConfigs from "~/pages/Admin-category/CategoryConfigs";

function CategoryUpdate() {
  return (
    <Stack maw={800}>
      <CreateUpdateTitle managerPath={CategoryConfigs.managerPath} title={CategoryConfigs.updateTitle} />
      <DefaultPropertyPanel />
      <form>
        <Paper shadow="xs">
          <Stack gap={0}>
            <Grid p="sm">
              <Grid.Col span={6}>
                <TextInput required label={CategoryConfigs.properties.name.label} />
              </Grid.Col>
              <Grid.Col span={6}>
                <TextInput required label={CategoryConfigs.properties.slug.label} />
              </Grid.Col>
              <Grid.Col>
                <Textarea label={CategoryConfigs.properties.description.label} />
              </Grid.Col>
              <Grid.Col>
                <TextInput label={CategoryConfigs.properties.thumbnail.label} />
              </Grid.Col>
              <Grid.Col span={6}>
                <Select
                  label={CategoryConfigs.properties.parentCategoryId.label}
                  placeholder="--"
                  clearable
                  searchable
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <Select required label={CategoryConfigs.properties.status.label} placeholder="--" />
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

export default CategoryUpdate;
