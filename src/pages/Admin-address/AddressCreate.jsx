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
import CreateUpdateTitle from "~/components/CreateUpdateTitle";
import DefaultPropertyPanel from "~/components/DefaultPropertyPanel";
import AddressConfigs from "~/pages/Admin-address/AddressConfigs";
import useAddressCreateViewModel from "./AddressCreate.vm";

function AddressCreate() {
  const { form, handleFormSubmit, provinceSelectList, districtSelectList } =
    useAddressCreateViewModel();

  return (
    <Stack maw={800}>
      <CreateUpdateTitle
        managerPath={AddressConfigs.managerPath}
        title={AddressConfigs.createTitle}
      />

      <DefaultPropertyPanel />

      <form onSubmit={handleFormSubmit}>
        <Paper shadow="xs">
          <Stack gap={0}>
            <Grid p="sm">
              <Grid.Col>
                <TextInput
                  label={AddressConfigs.properties.line.label}
                  key={form.key("line")}
                  {...form.getInputProps("line")}
                ></TextInput>
              </Grid.Col>
              <Grid.Col span={6}>
                <Select
                  label={AddressConfigs.properties.provinceId.label}
                  placeholder="--"
                  clearable
                  searchable
                  data={provinceSelectList}
                  key={form.key("provinceId")}
                  {...form.getInputProps("provinceId")}
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <Select
                  label={AddressConfigs.properties.districtId.label}
                  placeholder="--"
                  clearable
                  searchable
                  data={districtSelectList}
                  key={form.key("districtId")}
                  {...form.getInputProps("districtId")}
                />
              </Grid.Col>
            </Grid>

            <Divider mt="xs" />

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

export default AddressCreate;
