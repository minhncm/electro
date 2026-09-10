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
import { useParams } from "react-router-dom";
import CreateUpdateTitle from "~/components/CreateUpdateTitle";
import DefaultPropertyPanel from "~/components/DefaultPropertyPanel";
import CustomerStatusConfigs from "~/pages/Admin-customer-status/CustomerStatusConfigs";
import useCustomerStatusUpdateViewModel from "./CustomerStatusUpdate.vm";

function CustomerStatusUpdate() {
  const { id } = useParams();
  const { form, customerStatus, statusSelectList, handleFormSubmit } =
    useCustomerStatusUpdateViewModel(id);

  if (!customerStatus) return null;

  return (
    <Stack maw={800}>
      <CreateUpdateTitle
        managerPath={CustomerStatusConfigs.managerPath}
        title={CustomerStatusConfigs.updateTitle}
      />

      <DefaultPropertyPanel
        id={customerStatus.id}
        createdAt={customerStatus.createdAt}
        updatedAt={customerStatus.updatedAt}
      />

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
              <Button type="submit">Cập nhật</Button>
            </Group>
          </Stack>
        </Paper>
      </form>
    </Stack>
  );
}

export default CustomerStatusUpdate;
