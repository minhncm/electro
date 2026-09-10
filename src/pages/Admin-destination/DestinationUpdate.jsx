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
import DestinationConfigs from "~/pages/Admin-destination/DestinationConfigs";
import useDestinationUpdateViewModel from "./DestinationUpdate.vm";

function DestinationUpdate() {
  const { id } = useParams();
  const {
    form,
    destination,
    provinceSelectList,
    districtSelectList,
    statusSelectList,
    handleFormSubmit,
  } = useDestinationUpdateViewModel(id);

  if (!destination) return null;
  
  return (
    <Stack maw={800}>
      <CreateUpdateTitle
        managerPath={DestinationConfigs.managerPath}
        title={DestinationConfigs.updateTitle}
      />

      <DefaultPropertyPanel
        id={destination.id}
        createdAt={destination.createdAt}
        updatedAt={destination.updatedAt}
      />

      <form onSubmit={handleFormSubmit}>
        <Paper shadow="xs">
          <Stack gap={0}>
            <Grid p="sm">
              <Grid.Col span={6}>
                <TextInput
                  key={form.key("contactFullname")}
                  label={DestinationConfigs.properties.contactFullname.label}
                  {...form.getInputProps("contactFullname")}
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <TextInput
                  key={form.key("contactEmail")}
                  label={DestinationConfigs.properties.contactEmail.label}
                  {...form.getInputProps("contactEmail")}
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <TextInput
                  key={form.key("contactPhone")}
                  label={DestinationConfigs.properties.contactPhone.label}
                  {...form.getInputProps("contactPhone")}
                />
              </Grid.Col>
              <Grid.Col>
                <TextInput
                  key={form.key("address.line")}
                  required
                  {...form.getInputProps("address.line")}
                  label={DestinationConfigs.properties["address.line"].label}
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <Select
                  key={form.key("address.provinceId")}
                  required
                  label={
                    DestinationConfigs.properties["address.provinceId"].label
                  }
                  placeholder="--"
                  searchable
                  {...form.getInputProps("address.provinceId")}
                  data={provinceSelectList}
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <Select
                  key={form.key("address.districtId")}
                  required
                  label={
                    DestinationConfigs.properties["address.districtId"].label
                  }
                  placeholder="--"
                  searchable
                  {...form.getInputProps("address.districtId")}
                  data={districtSelectList}
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <Select
                  key={form.key("status")}
                  required
                  label={DestinationConfigs.properties.status.label}
                  placeholder="--"
                  {...form.getInputProps("status")}
                  data={statusSelectList}
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

export default DestinationUpdate;
