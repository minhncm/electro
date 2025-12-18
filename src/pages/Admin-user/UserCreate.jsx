import { Button, Divider, Grid, Group, MultiSelect, Paper, Select, Stack, TextInput } from "@mantine/core";
import CreateUpdateTitle from "~/components/CreateUpdateTitle";
import DefaultPropertyPanel from "~/components/DefaultPropertyPanel";
import UserConfigs from "~/pages/Admin-user/UserConfigs";

function UserCreate() {
  return (
    <Stack maw={800}>
      <CreateUpdateTitle managerPath={UserConfigs.managerPath} title={UserConfigs.createTitle} />

      <DefaultPropertyPanel />

      <form>
        <Paper shadow="xs">
          <Stack gap={0}>
            <Grid p="sm">
              <Grid.Col span={6}>
                <TextInput required label={UserConfigs.properties.username.label} />
              </Grid.Col>
              <Grid.Col span={6}>
                <TextInput required label={UserConfigs.properties.password.label} />
              </Grid.Col>
              <Grid.Col span={6}>
                <TextInput required label={UserConfigs.properties.fullname.label} />
              </Grid.Col>
              <Grid.Col span={6}>
                <TextInput required label={UserConfigs.properties.email.label} />
              </Grid.Col>
              <Grid.Col span={6}>
                <TextInput required label={UserConfigs.properties.phone.label} />
              </Grid.Col>
              <Grid.Col span={6}>
                <Select required label={UserConfigs.properties.gender.label} placeholder="--" />
              </Grid.Col>
              <Grid.Col span={6}>
                <TextInput required label={UserConfigs.properties["address.line"].label} />
              </Grid.Col>
              <Grid.Col span={6}>
                <Select
                  required
                  label={UserConfigs.properties["address.provinceId"].label}
                  placeholder="--"
                  searchable
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <Select
                  required
                  label={UserConfigs.properties["address.districtId"].label}
                  placeholder="--"
                  searchable
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <TextInput required label={UserConfigs.properties.avatar.label} />
              </Grid.Col>
              <Grid.Col span={6}>
                <Select required label={UserConfigs.properties.status.label} placeholder="--" searchable />
              </Grid.Col>
              <Grid.Col span={6}>
                <MultiSelect required label={UserConfigs.properties.roles.label} placeholder="--" searchable />
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

export default UserCreate;
