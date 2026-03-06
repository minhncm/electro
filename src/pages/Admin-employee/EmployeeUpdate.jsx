import {
  Button,
  Divider,
  Grid,
  Group,
  MultiSelect,
  Paper,
  PasswordInput,
  Select,
  Stack,
  TextInput,
} from "@mantine/core";
import CreateUpdateTitle from "~/components/CreateUpdateTitle";
import EmployeeConfigs from "./EmployeeConfigs";
import DefaultPropertyPanel from "~/components/DefaultPropertyPanel";
import { useParams } from "react-router-dom";
import useEmployeeUpdateViewModel from "./EmployeeUpdate.vm";

function EmployeeUpdate() {
  const { id } = useParams();
  const {
    form,
    employee,
    provinceSelectList,
    districtSelectList,
    officeSelectList,
    departmentSelectList,
    jobTypeSelectList,
    jobLevelSelectList,
    jobTitleSelectList,
    genderSelectList,
    statusSelectList,
    roleSelectList,
    handleFormSubmit,
  } = useEmployeeUpdateViewModel(id);

  
  return (
    <Stack maw={800}>
      <CreateUpdateTitle
        managerPath={EmployeeConfigs.managerPath}
        title={EmployeeConfigs.updateTitle}
      />

      <DefaultPropertyPanel
        id={employee.id}
        createdAt={employee.createdAt}
        updatedAt={employee.updatedAt}
      />

      <form onSubmit={handleFormSubmit}>
        <Paper shadow="xs">
          <Stack gap={0}>
            <Grid p="sm">
              <Grid.Col span={6}>
                <TextInput
                  key={form.key("user.username")}
                  {...form.getInputProps("user.username")}
                  required
                  label={EmployeeConfigs.properties["user.username"].label}
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <PasswordInput
                  key={form.key("user.password")}
                  {...form.getInputProps("user.password")}
                  required
                  label={EmployeeConfigs.properties["user.password"].label}
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <TextInput
                  key={form.key("user.fullname")}
                  {...form.getInputProps("user.fullname")}
                  required
                  label={EmployeeConfigs.properties["user.fullname"].label}
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <TextInput
                  key={form.key("user.email")}
                  {...form.getInputProps("user.email")}
                  required
                  label={EmployeeConfigs.properties["user.email"].label}
                  type="email"
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <TextInput
                  key={form.key("user.phone")}
                  {...form.getInputProps("user.phone")}
                  required
                  label={EmployeeConfigs.properties["user.phone"].label}
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <Select
                  key={form.key("user.gender")}
                  {...form.getInputProps("user.gender")}
                  required
                  label={EmployeeConfigs.properties["user.gender"].label}
                  placeholder="--"
                  data={genderSelectList}
                />
              </Grid.Col>
              <Grid.Col>
                <TextInput
                  key={form.key("user.address.line")}
                  {...form.getInputProps("user.address.line")}
                  required
                  label={EmployeeConfigs.properties["user.address.line"].label}
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <Select
                  key={form.key("user.address.provinceId")}
                  {...form.getInputProps("user.address.provinceId")}
                  required
                  label={
                    EmployeeConfigs.properties["user.address.provinceId"].label
                  }
                  placeholder="--"
                  searchable
                  data={provinceSelectList}
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <Select
                  key={form.key("user.address.districtId")}
                  {...form.getInputProps("user.address.districtId")}
                  required
                  label={
                    EmployeeConfigs.properties["user.address.districtId"].label
                  }
                  placeholder="--"
                  searchable
                  data={districtSelectList}
                />
              </Grid.Col>
              <Grid.Col>
                <TextInput
                  key={form.key("user.avatar")}
                  {...form.getInputProps("user.avatar")}
                  label={EmployeeConfigs.properties["user.avatar"].label}
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <Select
                  key={form.key("user.status")}
                  {...form.getInputProps("user.status")}
                  required
                  label={EmployeeConfigs.properties["user.status"].label}
                  placeholder="--"
                  data={statusSelectList}
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <MultiSelect
                  disabled
                  key={form.key("user.roles")}
                  {...form.getInputProps("user.roles")}
                  required
                  label={EmployeeConfigs.properties["user.roles"].label}
                  placeholder="--"
                  data={roleSelectList}
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <Select
                  key={form.key("officeId")}
                  {...form.getInputProps("officeId")}
                  required
                  label={EmployeeConfigs.properties.officeId.label}
                  placeholder="--"
                  data={officeSelectList}
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <Select
                  key={form.key("departmentId")}
                  {...form.getInputProps("departmentId")}
                  required
                  label={EmployeeConfigs.properties.departmentId.label}
                  placeholder="--"
                  data={departmentSelectList}
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <Select
                  key={form.key("jobTypeId")}
                  {...form.getInputProps("jobTypeId")}
                  required
                  label={EmployeeConfigs.properties.jobTypeId.label}
                  placeholder="--"
                  data={jobTypeSelectList}
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <Select
                  key={form.key("jobLevelId")}
                  {...form.getInputProps("jobLevelId")}
                  required
                  label={EmployeeConfigs.properties.jobLevelId.label}
                  placeholder="--"
                  data={jobLevelSelectList}
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <Select
                  key={form.key("jobTitleId")}
                  {...form.getInputProps("jobTitleId")}
                  required
                  label={EmployeeConfigs.properties.jobTitleId.label}
                  placeholder="--"
                  data={jobTitleSelectList}
                />
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

export default EmployeeUpdate;
