import {
  Button,
  Divider,
  Grid,
  Group,
  Paper,
  Select,
  Stack,
  Textarea,
  TextInput,
} from "@mantine/core";
import { useParams } from "react-router-dom";
import CreateUpdateTitle from "~/components/CreateUpdateTitle";
import DefaultPropertyPanel from "~/components/DefaultPropertyPanel";
import CategoryConfigs from "~/pages/Admin-category/CategoryConfigs";
import useCategoryUpdateViewModel from "./CategoryUpdate.vm";

function CategoryUpdate() {
  const { id } = useParams();
  const {
    form,
    category,
    categorySelectList,
    statusSelectList,
    handleFormSubmit,
  } = useCategoryUpdateViewModel(id);

  if (!category) return null;

  return (
    <Stack maw={800}>
      <CreateUpdateTitle
        managerPath={CategoryConfigs.managerPath}
        title={CategoryConfigs.updateTitle}
      />
      <DefaultPropertyPanel
        id={category.id}
        createdAt={category.createdAt}
        updatedAt={category.updatedAt}
      />

      <form onSubmit={handleFormSubmit}>
        <Paper shadow="xs">
          <Stack gap={0}>
            <Grid p="sm">
              <Grid.Col span={6}>
                <TextInput
                  key={form.key("name")}
                  required
                  label={CategoryConfigs.properties.name.label}
                  {...form.getInputProps("name")}
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <TextInput
                  key={form.key("slug")}
                  required
                  label={CategoryConfigs.properties.slug.label}
                  {...form.getInputProps("slug")}
                />
              </Grid.Col>
              <Grid.Col>
                <Textarea
                  key={form.key("description")}
                  label={CategoryConfigs.properties.description.label}
                  {...form.getInputProps("description")}
                />
              </Grid.Col>
              <Grid.Col>
                <TextInput
                  key={form.key("thumbnail")}
                  label={CategoryConfigs.properties.thumbnail.label}
                  {...form.getInputProps("thumbnail")}
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <Select
                  key={form.key("parentCategoryId")}
                  label={CategoryConfigs.properties.parentCategoryId.label}
                  placeholder="--"
                  clearable
                  searchable
                  data={categorySelectList}
                  {...form.getInputProps("parentCategoryId")}
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <Select
                  key={form.key("status")}
                  required
                  label={CategoryConfigs.properties.status.label}
                  placeholder="--"
                  data={statusSelectList}
                  {...form.getInputProps("status")}
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

export default CategoryUpdate;
