import {
  Button,
  Divider,
  Grid,
  Group,
  Paper,
  Select,
  Stack,
  TextInput,
} from "@mantine/core";
import CreateUpdateTitle from "~/components/CreateUpdateTitle";
import DefaultPropertyPanel from "~/components/DefaultPropertyPanel";
import TagConfigs from "~/pages/Admin-tag/TagConfigs";
import useTagCreateViewModel from "./TagCreate.vm";

function TagCreate() {
  const { form, statusSelectList, handleFormSubmit } = useTagCreateViewModel();

  return (
    <Stack maw={800}>
      <CreateUpdateTitle
        managerPath={TagConfigs.managerPath}
        title={TagConfigs.createTitle}
      />
      <DefaultPropertyPanel />
      <form onSubmit={handleFormSubmit}>
        <Paper shadow="xs">
          <Stack gap={0}>
            <Grid p="sm">
              <Grid.Col span={6}>
                <TextInput
                  key={form.key("name")}
                  required
                  label={TagConfigs.properties.name.label}
                  {...form.getInputProps("name")}
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <TextInput
                  key={form.key("slug")}
                  required
                  label={TagConfigs.properties.slug.label}
                  {...form.getInputProps("slug")}
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <Select
                  key={form.key("status")}
                  required
                  label={TagConfigs.properties.status.label}
                  placeholder="--"
                  {...form.getInputProps("status")}
                  data={statusSelectList}
                />
              </Grid.Col>
            </Grid>

            <Divider mt="xs" />
            <Group justify="space-between" p="sm">
              <Button variant="default" onClick={form.reset}>
                Mặc định
              </Button>
              <Button type="submit">Thêm</Button>
            </Group>
          </Stack>
        </Paper>
      </form>
    </Stack>
  );
}

export default TagCreate;
