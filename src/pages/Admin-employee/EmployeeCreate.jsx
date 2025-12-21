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

function EmployeeCreate() {
  return (
    <Stack maw={800}>
      <CreateUpdateTitle managerPath={EmployeeConfigs.managerPath} title={EmployeeConfigs.createTitle} />

      <DefaultPropertyPanel />

      <form>
        <Paper shadow="xs">
          <Stack spacing={0}>
            <Grid p="sm">
              <Grid.Col span={6}>
                <TextInput required label={EmployeeConfigs.properties["user.username"].label} />
              </Grid.Col>
              <Grid.Col span={6}>
                <PasswordInput required label={EmployeeConfigs.properties["user.password"].label} />
              </Grid.Col>
              <Grid.Col span={6}>
                <TextInput required label={EmployeeConfigs.properties["user.fullname"].label} />
              </Grid.Col>
              <Grid.Col span={6}>
                <TextInput required label={EmployeeConfigs.properties["user.email"].label} type="email" />
              </Grid.Col>
              <Grid.Col span={6}>
                <TextInput required label={EmployeeConfigs.properties["user.phone"].label} />
              </Grid.Col>
              <Grid.Col span={6}>
                <Select required label={EmployeeConfigs.properties["user.gender"].label} placeholder="--" />
              </Grid.Col>
              <Grid.Col>
                <TextInput required label={EmployeeConfigs.properties["user.address.line"].label} />
              </Grid.Col>
              <Grid.Col span={6}>
                <Select
                  required
                  label={EmployeeConfigs.properties["user.address.provinceId"].label}
                  placeholder="--"
                  searchable
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <Select
                  required
                  label={EmployeeConfigs.properties["user.address.districtId"].label}
                  placeholder="--"
                  searchable
                />
              </Grid.Col>
              <Grid.Col>
                <TextInput label={EmployeeConfigs.properties["user.avatar"].label} />
              </Grid.Col>
              <Grid.Col span={6}>
                <Select required label={EmployeeConfigs.properties["user.status"].label} placeholder="--" />
              </Grid.Col>
              <Grid.Col span={6}>
                <MultiSelect
                  disabled
                  required
                  label={EmployeeConfigs.properties["user.roles"].label}
                  placeholder="--"
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <Select required label={EmployeeConfigs.properties.officeId.label} placeholder="--" />
              </Grid.Col>
              <Grid.Col span={6}>
                <Select required label={EmployeeConfigs.properties.departmentId.label} placeholder="--" />
              </Grid.Col>
              <Grid.Col span={6}>
                <Select required label={EmployeeConfigs.properties.jobTypeId.label} placeholder="--" />
              </Grid.Col>
              <Grid.Col span={6}>
                <Select required label={EmployeeConfigs.properties.jobLevelId.label} placeholder="--" />
              </Grid.Col>
              <Grid.Col span={6}>
                <Select required label={EmployeeConfigs.properties.jobTitleId.label} placeholder="--" />
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

export default EmployeeCreate;
