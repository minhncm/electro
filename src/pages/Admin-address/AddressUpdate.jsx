import { Button, Divider, Grid, Group, Paper, Select, Stack, TextInput } from "@mantine/core";
import CreateUpdateTitle from "~/components/CreateUpdateTitle";
import DefaultPropertyPanel from "~/components/DefaultPropertyPanel";
import AddressConfigs from "~/pages/Admin-address/AddressConfigs";

function AddressUpdate() {
  return (
    <Stack maw={800}>
      <CreateUpdateTitle managerPath={AddressConfigs.managerPath} title={AddressConfigs.updateTitle} />

      <DefaultPropertyPanel />

      <form>
        <Paper shadow="xs">
          <Stack gap={0}>
            <Grid p="sm">
              <Grid.Col>
                <TextInput label={AddressConfigs.properties.line.label} />
              </Grid.Col>
              <Grid.Col span={6}>
                <Select label={AddressConfigs.properties.provinceId.label} placeholder="--" clearable searchable />
              </Grid.Col>
              <Grid.Col span={6}>
                <Select label={AddressConfigs.properties.districtId.label} placeholder="--" clearable searchable />
              </Grid.Col>
            </Grid>

            <Divider mt="xs" />

            <Group justify="space-between" p="sm">
              <Button variant="default">Mặc định</Button>
              <Button type="submit">Cập nhật</Button>
            </Group>
          </Stack>
        </Paper>
      </form>
    </Stack>
  );
}

export default AddressUpdate;
