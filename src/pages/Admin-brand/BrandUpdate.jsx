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
import BrandConfigs from "~/pages/Admin-brand/BrandConfigs";
import useBrandUpdateViewModel from "./BrandUpdate.vm";

function BrandUpdate() {
  const { id } = useParams();
  const { form, brand, statusSelectList, handleFormSubmit } =
    useBrandUpdateViewModel(id);

  if (!brand) return null;

  return (
    <Stack maw={800}>
      <CreateUpdateTitle
        managerPath={BrandConfigs.managerPath}
        title={BrandConfigs.updateTitle}
      />

      <DefaultPropertyPanel
        id={brand.id}
        createdAt={brand.createdAt}
        updatedAt={brand.createdAt}
      />

      <form onSubmit={handleFormSubmit}>
        <Paper shadow="xs">
          <Stack gap={0}>
            <Grid p="sm">
              <Grid.Col span={6}>
                <TextInput
                  key={form.key("name")}
                  required
                  label={BrandConfigs.properties.name.label}
                  {...form.getInputProps("name")}
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <TextInput
                  key={form.key("code")}
                  required
                  label={BrandConfigs.properties.code.label}
                  {...form.getInputProps("code")}
                />
              </Grid.Col>
              <Grid.Col>
                <Textarea
                  key={form.key("description")}
                  label={BrandConfigs.properties.description.label}
                  {...form.getInputProps("description")}
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <Select
                  key={form.key("status")}
                  required
                  label={BrandConfigs.properties.status.label}
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

export default BrandUpdate;
