import { Button, Divider, Grid, Group, Paper, Select, Stack, TextInput } from "@mantine/core";
import CreateUpdateTitle from "~/components/CreateUpdateTitle";
import OfficeConfigs from "~/pages/Admin-office/OfficeConfigs";
import DefaultPropertyPanel from "~/components/DefaultPropertyPanel";

function OfficeCreate() {
  return (
    <Stack maw={800}>
      <CreateUpdateTitle managerPath={OfficeConfigs.managerPath} title={OfficeConfigs.createTitle} />

      <DefaultPropertyPanel />

      <form>
        <Paper shadow="xs">
          <Stack spacing={0}>
            <Grid p="sm">
              <Grid.Col xs={6}>
                <TextInput required label={OfficeConfigs.properties.name.label} />
              </Grid.Col>
              <Grid.Col>
                <TextInput required label={OfficeConfigs.properties["address.line"].label} />
              </Grid.Col>
              <Grid.Col xs={6}>
                <Select
                  required
                  label={OfficeConfigs.properties["address.provinceId"].label}
                  placeholder="--"
                  searchable
                />
              </Grid.Col>
              <Grid.Col xs={6}>
                <Select
                  required
                  label={OfficeConfigs.properties["address.districtId"].label}
                  placeholder="--"
                  searchable
                />
              </Grid.Col>
              <Grid.Col xs={6}>
                <Select required label={OfficeConfigs.properties.status.label} placeholder="--" />
              </Grid.Col>
            </Grid>

            <Divider mt="xs" />

            <Group position="apart" p="sm">
              <Button variant="default">Mặc định</Button>
              <Button type="submit">Thêm</Button>
            </Group>
          </Stack>
        </Paper>
      </form>
    </Stack>
  );
}

export default OfficeCreate;
