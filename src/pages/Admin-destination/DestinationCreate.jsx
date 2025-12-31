import { Button, Divider, Grid, Group, Paper, Select, Stack, TextInput } from "@mantine/core";
import CreateUpdateTitle from "~/components/CreateUpdateTitle";
import DefaultPropertyPanel from "~/components/DefaultPropertyPanel";
import DestinationConfigs from "~/pages/Admin-destination/DestinationConfigs";

function DestinationCreate() {
  return (
    <Stack maw={800}>
      <CreateUpdateTitle managerPath={DestinationConfigs.managerPath} title={DestinationConfigs.createTitle} />
      <DefaultPropertyPanel />
      <form>
        <Paper shadow="xs">
          <Stack gap={0}>
            <Grid p="sm">
              <Grid.Col span={6}>
                <TextInput label={DestinationConfigs.properties.contactFullname.label} />
              </Grid.Col>
              <Grid.Col span={6}>
                <TextInput label={DestinationConfigs.properties.contactEmail.label} />
              </Grid.Col>
              <Grid.Col span={6}>
                <TextInput label={DestinationConfigs.properties.contactPhone.label} />
              </Grid.Col>
              <Grid.Col>
                <TextInput required label={DestinationConfigs.properties["address.line"].label} />
              </Grid.Col>
              <Grid.Col span={6}>
                <Select
                  required
                  label={DestinationConfigs.properties["address.provinceId"].label}
                  placeholder="--"
                  searchable
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <Select
                  required
                  label={DestinationConfigs.properties["address.districtId"].label}
                  placeholder="--"
                  searchable
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <Select required label={DestinationConfigs.properties.status.label} placeholder="--" />
              </Grid.Col>
            </Grid>

            <Divider mt="xs" />
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

export default DestinationCreate;
