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
import CustomerResourceConfigs from "~/pages/Admin-customer-resource/CustomerResourceConfigs";
import useCustomerResourceCreateViewModel from "./CustomerResourceCreate.vm";

function CustomerResourceCreate() {
  const { form, statusSelectList, handleFormSubmit } =
    useCustomerResourceCreateViewModel();
  return (
    <Stack maw={800}>
      <CreateUpdateTitle
        managerPath={CustomerResourceConfigs.managerPath}
        title={CustomerResourceConfigs.createTitle}
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
                  label={CustomerResourceConfigs.properties.code.label}
                  {...form.getInputProps("code")}
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <TextInput
                  key={form.key("name")}
                  required
                  label={CustomerResourceConfigs.properties.name.label}
                  {...form.getInputProps("name")}
                />
              </Grid.Col>
              <Grid.Col>
                <TextInput
                  key={form.key("description")}
                  required
                  label={CustomerResourceConfigs.properties.description.label}
                  {...form.getInputProps("description")}
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <ColorInput
                  key={form.key("color")}
                  required
                  label={CustomerResourceConfigs.properties.color.label}
                  placeholder="Chọn màu"
                  {...form.getInputProps("color")}
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <Select
                  key={form.key("status")}
                  required
                  label={CustomerResourceConfigs.properties.status.label}
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

export default CustomerResourceCreate;
