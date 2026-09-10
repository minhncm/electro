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
import OfficeConfigs from "~/pages/Admin-office/OfficeConfigs";
import DefaultPropertyPanel from "~/components/DefaultPropertyPanel";
import useOfficeCreateViewModel from "./OfficeCreate.vm";

function OfficeCreate() {
  const {
    form,
    provinceSelectList,
    districtSelectList,
    statusSelectList,
    handleFormSubmit,
  } = useOfficeCreateViewModel();
  
  return (
    <Stack maw={800}>
      <CreateUpdateTitle
        managerPath={OfficeConfigs.managerPath}
        title={OfficeConfigs.createTitle}
      />

      <DefaultPropertyPanel />

      <form onSubmit={handleFormSubmit}>
        <Paper shadow="xs">
          <Stack gao={0}>
            <Grid p="sm">
              <Grid.Col span={6}>
                <TextInput
                  key={form.key("name")}
                  required
                  label={OfficeConfigs.properties.name.label}
                  {...form.getInputProps("name")}
                />
              </Grid.Col>
              <Grid.Col>
                <TextInput
                  key={form.key("address.line")}
                  required
                  label={OfficeConfigs.properties["address.line"].label}
                  {...form.getInputProps("address.line")}
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <Select
                  key={form.key("address.provinceId")}
                  required
                  label={OfficeConfigs.properties["address.provinceId"].label}
                  placeholder="--"
                  searchable
                  {...form.getInputProps("address.provinceId")}
                  data={provinceSelectList}
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <Select
                  key={form.key("address.districtId")}
                  required
                  label={OfficeConfigs.properties["address.districtId"].label}
                  placeholder="--"
                  searchable
                  {...form.getInputProps("address.districtId")}
                  data={districtSelectList}
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <Select
                  key={form.key("status")}
                  required
                  label={OfficeConfigs.properties.status.label}
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

export default OfficeCreate;
