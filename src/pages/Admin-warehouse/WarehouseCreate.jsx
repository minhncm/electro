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
import WarehouseConfigs from "~/pages/Admin-warehouse/WarehouseConfigs";
import useWarehouseCreateViewModel from "./WarehouseCreate.vm";

function WarehouseCreate() {
  const {
    form,
    provinceSelectList,
    districtSelectList,
    statusSelectList,
    handleFormSubmit,
  } = useWarehouseCreateViewModel();
  return (
    <Stack maw={800}>
      <CreateUpdateTitle
        managerPath={WarehouseConfigs.managerPath}
        title={WarehouseConfigs.createTitle}
      />

      <DefaultPropertyPanel />

      <form onSubmit={handleFormSubmit}>
        <Paper shadow="xs">
          <Stack gap={0}>
            <Grid p="sm">
              <Grid.Col span={6}>
                <TextInput
                  key={form.key("code")}
                  required
                  label={WarehouseConfigs.properties.code.label}
                  {...form.getInputProps("code")}
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <TextInput
                  key={form.key("name")}
                  required
                  label={WarehouseConfigs.properties.name.label}
                  {...form.getInputProps("name")}
                />
              </Grid.Col>
              <Grid.Col>
                <TextInput
                  key={form.key("address.line")}
                  label={WarehouseConfigs.properties["address.line"].label}
                  {...form.getInputProps("address.line")}
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <Select
                  key={form.key("address.provinceId")}
                  label={
                    WarehouseConfigs.properties["address.provinceId"].label
                  }
                  placeholder="--"
                  clearable
                  searchable
                  {...form.getInputProps("address.provinceId")}
                  data={provinceSelectList}
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <Select
                  key={form.key("address.districtId")}
                  label={
                    WarehouseConfigs.properties["address.districtId"].label
                  }
                  placeholder="--"
                  clearable
                  searchable
                  {...form.getInputProps("address.districtId")}
                  data={districtSelectList}
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <Select
                  key={form.key("status")}
                  required
                  label={WarehouseConfigs.properties.status.label}
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

export default WarehouseCreate;
