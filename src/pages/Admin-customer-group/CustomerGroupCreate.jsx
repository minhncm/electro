import { Button, ColorInput, Divider, Grid, Group, Paper, Select, Stack, TextInput } from "@mantine/core";
import CreateUpdateTitle from "~/components/CreateUpdateTitle";
import DefaultPropertyPanel from "~/components/DefaultPropertyPanel";
import CustomerGroupConfigs from "~/pages/Admin-customer-group/CustomerGroupConfigs";

function CustomerGroupCreate() {
  return (
    <Stack maw={800}>
      <CreateUpdateTitle managerPath={CustomerGroupConfigs.managerPath} title={CustomerGroupConfigs.createTitle} />

      <DefaultPropertyPanel />

      <form>
        <Paper shadow="xs">
          <Stack gap={0}>
            <Grid p="sm">
              <Grid.Col xs={6}>
                <TextInput required label={CustomerGroupConfigs.properties.code.label} />
              </Grid.Col>
              <Grid.Col xs={6}>
                <TextInput required label={CustomerGroupConfigs.properties.name.label} />
              </Grid.Col>
              <Grid.Col>
                <TextInput required label={CustomerGroupConfigs.properties.description.label} />
              </Grid.Col>
              <Grid.Col xs={6}>
                <ColorInput required label={CustomerGroupConfigs.properties.color.label} placeholder="Chọn màu" />
              </Grid.Col>
              <Grid.Col xs={6}>
                <Select required label={CustomerGroupConfigs.properties.status.label} placeholder="--" />
              </Grid.Col>
            </Grid>

            <Divider />

            <Group justify="space-between" p="sm">
              <Button variant="default">Mặc định</Button>
              <Button type="submit">Thêm</Button>
            </Group>
          </Stack>
        </Paper>
      </form>
    </Stack>
  );
}

export default CustomerGroupCreate;
