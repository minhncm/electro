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
import SpecificationConfigs from "~/pages/Admin-specification/SpecificationConfigs";
import useSpecificationUpdateViewModel from "./SpecificationUpdate.vm";

function SpecificationUpdate() {
  const { id } = useParams();
  const { form, specification, statusSelectList, handleFormSubmit } =
    useSpecificationUpdateViewModel(id);

  if (!specification) return null;

  return (
    <Stack maw={800}>
      <CreateUpdateTitle
        managerPath={SpecificationConfigs.managerPath}
        title={SpecificationConfigs.updateTitle}
      />

      <DefaultPropertyPanel
        id={specification.id}
        createdAt={specification.createdAt}
        updatedAt={specification.updatedAt}
      />

      <form onSubmit={handleFormSubmit}>
        <Paper shadow="xs">
          <Stack gap={0}>
            <Grid p="sm">
              <Grid.Col span={6}>
                <TextInput
                  key={form.key("name")}
                  required
                  label={SpecificationConfigs.properties.name.label}
                  {...form.getInputProps("name")}
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <TextInput
                  key={form.key("code")}
                  required
                  label={SpecificationConfigs.properties.code.label}
                  {...form.getInputProps("code")}
                />
              </Grid.Col>
              <Grid.Col>
                <Textarea
                  key={form.key("description")}
                  label={SpecificationConfigs.properties.description.label}
                  {...form.getInputProps("description")}
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <Select
                  key={form.key("status")}
                  required
                  label={SpecificationConfigs.properties.status.label}
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

export default SpecificationUpdate;
