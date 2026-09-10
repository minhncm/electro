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
import DistrictConfigs from "~/pages/Admin-district/DistrictConfigs";
import useDistrictCreateViewModel from "./DistrictCreate.vm";
function DistrictCreate() {
  const { provinceSelectList, form, handleFormSubmit } =
    useDistrictCreateViewModel();
  return (
    <Stack maw={800}>
      <CreateUpdateTitle
        managerPath={DistrictConfigs.managerPath}
        title={DistrictConfigs.createTitle}
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
                  label={DistrictConfigs.properties.name.label}
                  {...form.getInputProps("name")}
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <TextInput
                  key={form.key("code")}
                  required
                  label={DistrictConfigs.properties.code.label}
                  {...form.getInputProps("code")}
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <Select
                  key={form.key("provinceId")}
                  required
                  label={DistrictConfigs.properties.provinceId.label}
                  placeholder="--"
                  searchable
                  data={provinceSelectList}
                  {...form.getInputProps("provinceId")}
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

export default DistrictCreate;
