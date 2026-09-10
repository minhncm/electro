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
import PropertyConfigs from "~/pages/Admin-property/PropertyConfigs";
import usePropertyUpdateViewModel from "./PropertyUpdate.vm";

function PropertyUpdate() {
  const { id } = useParams();
  const { form, property, statusSelectList, handleFormSubmit } =
    usePropertyUpdateViewModel(id);

  if (!property) return null;

  return (
    <Stack maw={800}>
      <CreateUpdateTitle
        managerPath={PropertyConfigs.managerPath}
        title={PropertyConfigs.updateTitle}
      />

      <DefaultPropertyPanel
        id={property.id}
        createdAt={property.createdAt}
        updatedAt={property.updatedAt}
      />

      <form onSubmit={handleFormSubmit}>
        <Paper shadow="xs">
          <Stack gap={0}>
            <Grid p="sm">
              <Grid.Col span={6}>
                <TextInput
                  key={form.key("name")}
                  required
                  label={PropertyConfigs.properties.name.label}
                  {...form.getInputProps("name")}
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <TextInput
                  key={form.key("code")}
                  required
                  label={PropertyConfigs.properties.code.label}
                  {...form.getInputProps("code")}
                />
              </Grid.Col>
              <Grid.Col>
                <Textarea
                  key={form.key("description")}
                  label={PropertyConfigs.properties.description.label}
                  {...form.getInputProps("description")}
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <Select
                  key={form.key("status")}
                  required
                  label={PropertyConfigs.properties.status.label}
                  {...form.getInputProps("status")}
                  data={statusSelectList}
                  placeholder="--"
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

export default PropertyUpdate;
