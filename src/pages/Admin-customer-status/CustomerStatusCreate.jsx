import {
  Button,
  ColorInput,
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
import CustomerStatusConfigs from "~/pages/Admin-customer-status/CustomerStatusConfigs";
import useCustomerStatusCreateViewModel from "./CustomerStatusCreate.vm";

function CustomerStatusCreate() {
  const { form, statusSelectList, handleFormSubmit } =
    useCustomerStatusCreateViewModel();

  return (
    <Stack maw={800}>
      <CreateUpdateTitle
        managerPath={CustomerStatusConfigs.managerPath}
        title={CustomerStatusConfigs.createTitle}
      />

      <DefaultPropertyPanel />

      <form onSubmit={handleFormSubmit}>
        <Paper shadow="xs">
          <Stack gap={0}>
            <Grid p="sm">
              <Grid.Col span={6}>
                <TextInput
                  key={form.key("code")}
                  required
                  label={CustomerStatusConfigs.properties.code.label}
                  {...form.getInputProps("code")}
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <TextInput
                  key={form.key("name")}
                  required
                  label={CustomerStatusConfigs.properties.name.label}
                  {...form.getInputProps("name")}
                />
              </Grid.Col>
              <Grid.Col>
                <TextInput
                  key={form.key("description")}
                  required
                  label={CustomerStatusConfigs.properties.description.label}
                  {...form.getInputProps("description")}
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <ColorInput
                  key={form.key("color")}
                  required
                  label={CustomerStatusConfigs.properties.color.label}
                  placeholder="Chọn màu"
                  {...form.getInputProps("color")}
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <Select
                  key={form.key("status")}
                  required
                  label={CustomerStatusConfigs.properties.status.label}
                  placeholder="--"
                  {...form.getInputProps("status")}
                  data={statusSelectList}
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

export default CustomerStatusCreate;
