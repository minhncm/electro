import {
  Button,
  Divider,
  Grid,
  Group,
  MultiSelect,
  Paper,
  Select,
  Stack,
  TextInput,
} from "@mantine/core";
import CreateUpdateTitle from "~/components/CreateUpdateTitle";
import DefaultPropertyPanel from "~/components/DefaultPropertyPanel";
import UserConfigs from "~/pages/Admin-user/UserConfigs";
import useUserCreateViewModel from "./UserCreate.vm";

function UserCreate() {
  const {
    form,
    provinceSelectList,
    districtSelectList,
    roleSelectList,
    genderSelectList,
    statusSelectList,
    handleFormSubmit,
  } = useUserCreateViewModel();
  return (
    <Stack maw={800}>
      <CreateUpdateTitle
        managerPath={UserConfigs.managerPath}
        title={UserConfigs.createTitle}
      />

      <DefaultPropertyPanel />

      <form onSubmit={handleFormSubmit}>
        <Paper shadow="xs">
          <Stack gap={0}>
            <Grid p="sm">
              <Grid.Col span={6}>
                <TextInput
                  key={form.key("username")}
                  required
                  label={UserConfigs.properties.username.label}
                  {...form.getInputProps("username")}
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <TextInput
                  key={form.key("password")}
                  required
                  label={UserConfigs.properties.password.label}
                  {...form.getInputProps("password")}
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <TextInput
                  key={form.key("fullname")}
                  required
                  label={UserConfigs.properties.fullname.label}
                  {...form.getInputProps("fullname")}
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <TextInput
                  key={form.key("email")}
                  required
                  label={UserConfigs.properties.email.label}
                  {...form.getInputProps("email")}
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <TextInput
                  key={form.key("phone")}
                  required
                  label={UserConfigs.properties.phone.label}
                  {...form.getInputProps("phone")}
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <Select
                  key={form.key("gender")}
                  required
                  label={UserConfigs.properties.gender.label}
                  {...form.getInputProps("gender")}
                  data={genderSelectList}
                  placeholder="--"
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <TextInput
                  key={form.key("address.line")}
                  required
                  label={UserConfigs.properties["address.line"].label}
                  {...form.getInputProps("address.line")}
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <Select
                  key={form.key("address.provinceId")}
                  required
                  label={UserConfigs.properties["address.provinceId"].label}
                  {...form.getInputProps("address.provinceId")}
                  data={provinceSelectList}
                  placeholder="--"
                  searchable
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <Select
                  key={form.key("address.districtId")}
                  required
                  label={UserConfigs.properties["address.districtId"].label}
                  {...form.getInputProps("address.districtId")}
                  data={districtSelectList}
                  placeholder="--"
                  searchable
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <TextInput
                  key={form.key("avatar")}
                  required
                  label={UserConfigs.properties.avatar.label}
                  {...form.getInputProps("avatar")}
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <Select
                  key={form.key("status")}
                  required
                  label={UserConfigs.properties.status.label}
                  {...form.getInputProps("status")}
                  data={statusSelectList}
                  placeholder="--"
                  searchable
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <MultiSelect
                  key={form.key("roles")}
                  required
                  label={UserConfigs.properties.roles.label}
                  {...form.getInputProps("roles")}
                  data={roleSelectList}
                  placeholder="--"
                  searchable
                />
              </Grid.Col>
            </Grid>

            <Divider />

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

export default UserCreate;
