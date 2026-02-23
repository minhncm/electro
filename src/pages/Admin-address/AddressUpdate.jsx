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
import { useParams } from "react-router-dom";
import CreateUpdateTitle from "~/components/CreateUpdateTitle";
import DefaultPropertyPanel from "~/components/DefaultPropertyPanel";
import AddressConfigs from "~/pages/Admin-address/AddressConfigs";
import useAddressUpdateViewModel from "./AddressUpdate.vm";

function AddressUpdate() {
  const { id } = useParams();

  const {
    address,
    form,
    provinceSelectList,
    districtSelectList,
    handleFormSubmit,
  } = useAddressUpdateViewModel(Number(id));

  if (!address) return null;

  return (
    <Stack maw={800}>
      <CreateUpdateTitle
        managerPath={AddressConfigs.managerPath}
        title={AddressConfigs.updateTitle}
      />

      <DefaultPropertyPanel
        id={address.id}
        createdAt={address.createdAt}
        updatedAt={address.updatedAt}
        createdBy="1"
        updatedBy="1"
      />

      <form onSubmit={handleFormSubmit}>
        <Paper shadow="xs">
          <Stack gap={0}>
            <Grid p="sm">
              <Grid.Col>
                <TextInput
                  required
                  label={AddressConfigs.properties.line.label}
                  key={form.key("line")}
                  {...form.getInputProps("line")}
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <Select
                  required
                  label={AddressConfigs.properties.provinceId.label}
                  key={form.key("provinceId")}
                  {...form.getInputProps("provinceId")}
                  data={provinceSelectList}
                  placeholder="--"
                  clearable
                  searchable
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <Select
                  required
                  label={AddressConfigs.properties.districtId.label}
                  key={form.key("districtId")}
                  {...form.getInputProps("districtId")}
                  data={districtSelectList}
                  placeholder="--"
                  clearable
                  searchable
                />
              </Grid.Col>
            </Grid>

            <Divider mt="xs" />

            <Group justify="space-between" p="sm">
              <Button variant="default" onClick={form.reset}>
                Mặc định
              </Button>
              <Button type="submit">Cập nhật</Button>
            </Group>
          </Stack>
        </Paper>
      </form>
    </Stack>
  );
}

export default AddressUpdate;
