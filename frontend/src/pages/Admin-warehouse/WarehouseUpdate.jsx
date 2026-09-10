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
import WarehouseConfigs from "~/pages/Admin-warehouse/WarehouseConfigs";
import useWarehouseUpdateViewModel from "./WarehouseUpdate.vm";

function WarehouseUpdate() {
  const { id } = useParams();
  const {
    form,
    warehouse,
    provinceSelectList,
    districtSelectList,
    statusSelectList,
    handleFormSubmit,
  } = useWarehouseUpdateViewModel(id);

  if (!warehouse) return null;

  return (
    <Stack maw={800}>
      <CreateUpdateTitle
        managerPath={WarehouseConfigs.managerPath}
        title={WarehouseConfigs.createTitle}
      />

      <DefaultPropertyPanel
        id={warehouse.id}
        createdAt={warehouse.createdAt}
        updatedAt={warehouse.updatedAt}
      />

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
              <Button type="submit">Cập nhật</Button>
            </Group>
          </Stack>
        </Paper>
      </form>
    </Stack>
  );
}

export default WarehouseUpdate;
