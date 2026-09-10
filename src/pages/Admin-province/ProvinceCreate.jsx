import {
  Button,
  Divider,
  Grid,
  Group,
  Paper,
  Stack,
  TextInput,
} from "@mantine/core";
import CreateUpdateTitle from "~/components/CreateUpdateTitle";
import DefaultPropertyPanel from "~/components/DefaultPropertyPanel";
import ProvinceConfigs from "~/pages/Admin-province/ProvinceConfigs";
import useProvinceCreateViewModel from "~/pages/Admin-province/ProvinceCreate.vm";

function ProvinceCreate() {
  const { form, handleFormSubmit } = useProvinceCreateViewModel();
  return (
    <Stack maw={800}>
      <CreateUpdateTitle
        managerPath={ProvinceConfigs.managerPath}
        title={ProvinceConfigs.createTitle}
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
                  label={ProvinceConfigs.properties.name.label}
                  {...form.getInputProps("name")}
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <TextInput
                  key={form.key("code")}
                  required
                  label={ProvinceConfigs.properties.code.label}
                  {...form.getInputProps("code")}
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

export default ProvinceCreate;
