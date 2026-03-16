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
import { useParams } from "react-router-dom";
import CreateUpdateTitle from "~/components/CreateUpdateTitle";
import DefaultPropertyPanel from "~/components/DefaultPropertyPanel";
import TagConfigs from "~/pages/Admin-tag/TagConfigs";
import useTagUpdateViewModel from "./TagUpdate.vm";

function TagUpdate() {
  const { id } = useParams();
  const { form, tag, statusSelectList, handleFormSubmit } =
    useTagUpdateViewModel(id);

  if (!tag) return null;

  return (
    <Stack maw={800}>
      <CreateUpdateTitle
        managerPath={TagConfigs.managerPath}
        title={TagConfigs.updateTitle}
      />
      <DefaultPropertyPanel
        id={tag.id}
        createdAt={tag.createdAt}
        updatedAt={tag.updatedAt}
      />
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
              <Button type="submit">Cập nhật</Button>
            </Group>
          </Stack>
        </Paper>
      </form>
    </Stack>
  );
}

export default TagUpdate;
