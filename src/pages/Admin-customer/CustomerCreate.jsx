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
import CustomerConfigs from "./CustomerConfigs";
import useCustomerCreateViewModel from "./CustomerCreate.vm";

function CustomerCreate() {
  const {
    form,
    districtSelectList,
    provinceSelectList,
    genderSelectList,
    roleSelectList,
    statusSelectList,
    customerGroupSelectList,
    customerResourceSelectList,
    customerStatusSelectList,
    handleFormSubmit,
  } = useCustomerCreateViewModel();

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
                  required
                  label={CustomerConfigs.properties["user.username"].label}
                  key={form.key("user.username")}
                  {...form.getInputProps("user.username")}
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <TextInput
                  required
                  label={CustomerConfigs.properties["user.password"].label}
                  key={form.key("user.password")}
                  {...form.getInputProps("user.password")}
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <TextInput
                  required
                  label={CustomerConfigs.properties["user.fullname"].label}
                  key={form.key("user.fullname")}
                  {...form.getInputProps("user.fullname")}
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <TextInput
                  required
                  label={CustomerConfigs.properties["user.email"].label}
                  key={form.key("user.email")}
                  {...form.getInputProps("user.email")}
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <TextInput
                  required
                  label={CustomerConfigs.properties["user.phone"].label}
                  key={form.key("user.phone")}
                  {...form.getInputProps("user.phone")}
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <Select
                  required
                  label={CustomerConfigs.properties["user.gender"].label}
                  key={form.key("user.gender")}
                  {...form.getInputProps("user.gender")}
                  placeholder="--"
                  data={genderSelectList}
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <TextInput
                  required
                  label={CustomerConfigs.properties["user.address.line"].label}
                  key={form.key("user.address.line")}
                  {...form.getInputProps("user.address.line")}
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <Select
                  required
                  label={
                    CustomerConfigs.properties["user.address.provinceId"].label
                  }
                  placeholder="--"
                  searchable
                  key={form.key("user.address.provinceId")}
                  {...form.getInputProps("user.address.provinceId")}
                  data={provinceSelectList}
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <Select
                  required
                  label={
                    CustomerConfigs.properties["user.address.districtId"].label
                  }
                  placeholder="--"
                  searchable
                  key={form.key("user.address.districtId")}
                  {...form.getInputProps("user.address.districtId")}
                  data={districtSelectList}
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <TextInput
                  required
                  label={CustomerConfigs.properties["user.avatar"].label}
                  key={form.key("user.avatar")}
                  {...form.getInputProps("user.avatar")}
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <Select
                  required
                  label={CustomerConfigs.properties["user.status"].label}
                  placeholder="--"
                  searchable
                  key={form.key("user.status")}
                  {...form.getInputProps("user.status")}
                  data={statusSelectList}
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <MultiSelect
                  disabled
                  required
                  label={CustomerConfigs.properties["user.roles"].label}
                  placeholder="--"
                  searchable
                  key={form.key("user.roles")}
                  {...form.getInputProps("user.roles")}
                  data={roleSelectList}
                />
              </Grid.Col>
              <Grid.Col xs={6}>
                <Select
                  required
                  label={CustomerConfigs.properties.customerGroupId.label}
                  placeholder="--"
                  data={customerGroupSelectList}
                  {...form.getInputProps("customerGroupId")}
                />
              </Grid.Col>
              <Grid.Col xs={6}>
                <Select
                  required
                  label={CustomerConfigs.properties.customerStatusId.label}
                  placeholder="--"
                  data={customerStatusSelectList}
                  {...form.getInputProps("customerStatusId")}
                />
              </Grid.Col>
              <Grid.Col xs={6}>
                <Select
                  required
                  label={CustomerConfigs.properties.customerResourceId.label}
                  placeholder="--"
                  data={customerResourceSelectList}
                  {...form.getInputProps("customerResourceId")}
                />
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

export default CustomerCreate;
