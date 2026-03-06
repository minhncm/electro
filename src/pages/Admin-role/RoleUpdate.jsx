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
import RoleConfigs from "./RoleConfigs";
import DefaultPropertyPanel from "~/components/DefaultPropertyPanel";
import { useParams } from "react-router-dom";
import useRoleUpdateViewModel from "./RoleUpdate.vm";

function RoleUpdate() {
  const { id } = useParams();
  const { form, role, statusSelectList, handleFormSubmit } =
    useRoleUpdateViewModel(id);

  if (!role) return null;

  return (
    <Stack maw={800}>
      <CreateUpdateTitle
        managerPath={RoleConfigs.managerPath}
        title={RoleConfigs.updateTitle}
      />

      <DefaultPropertyPanel
        id={role.id}
        createdAt={role.createdAt}
        updatedAt={role.updatedAt}
      />

      <form onSubmit={handleFormSubmit}>
        <Paper shadow="xs">
          <Stack gap={0}>
            <Grid p="sm">
              <Grid.Col span={6}>
                <TextInput
                  key={form.key("code")}
                  required
                  label={RoleConfigs.properties.code.label}
                  {...form.getInputProps("code")}
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <TextInput
                  key={form.key("name")}
                  required
                  label={RoleConfigs.properties.name.label}
                  {...form.getInputProps("name")}
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <Select
                  key={form.key("status")}
                  required
                  label={RoleConfigs.properties.status.label}
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

export default RoleUpdate;
