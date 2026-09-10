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
import DepartmentConfigs from "~/pages/Admin-department/DepartmentConfigs";
import useDepartmentUpdateViewModel from "./DepartmentUpdate.vm";

function DepartmentUpdate() {
  const { id } = useParams();
  const { form, department, statusSelectList, handleFormSubmit } =
    useDepartmentUpdateViewModel(id);
  return (
    <Stack maw={800}>
      <CreateUpdateTitle
        managerPath={DepartmentConfigs.managerPath}
        title={DepartmentConfigs.updateTitle}
      />

      <DefaultPropertyPanel
        id={department.id}
        createdAt={department.createdAt}
        updatedAt={department.updatedAt}
      />

      <form onSubmit={handleFormSubmit}>
        <Paper shadow="xs">
          <Stack gap={0}>
            <Grid p="sm">
              <Grid.Col span={6}>
                <TextInput
                  key={form.key("name")}
                  required
                  label={DepartmentConfigs.properties.name.label}
                  {...form.getInputProps("name")}
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <Select
                  key={form.key("status")}
                  required
                  label={DepartmentConfigs.properties.status.label}
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

export default DepartmentUpdate;
