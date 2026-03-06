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
import CustomerGroupConfigs from "~/pages/Admin-customer-group/CustomerGroupConfigs";
import useCustomerGroupUpdateViewModel from "./CustomerGroupUpdate.vm";
import { useParams } from "react-router-dom";

function CustomerGroupUpdate() {
  const { id } = useParams();
  const { form, customerGroup, statusSelectList, handleFormSubmit } =
    useCustomerGroupUpdateViewModel(id);

  if (!customerGroup) return null;
  return (
    <Stack maw={800}>
      <CreateUpdateTitle
        managerPath={CustomerGroupConfigs.managerPath}
        title={CustomerGroupConfigs.updateTitle}
      />

      <DefaultPropertyPanel
        id={customerGroup.id}
        createdAt={customerGroup.createdAt}
        updatedAt={customerGroup.updatedAt}
      />

      <form onSubmit={handleFormSubmit}>
        <Paper shadow="xs">
          <Stack gap={0}>
            <Grid p="sm">
              <Grid.Col span={6}>
                <TextInput
                  key={form.key("code")}
                  required
                  label={CustomerGroupConfigs.properties.code.label}
                  {...form.getInputProps("code")}
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <TextInput
                  key={form.key("name")}
                  required
                  label={CustomerGroupConfigs.properties.name.label}
                  {...form.getInputProps("name")}
                />
              </Grid.Col>
              <Grid.Col>
                <TextInput
                  key={form.key("description")}
                  required
                  label={CustomerGroupConfigs.properties.description.label}
                  {...form.getInputProps("description")}
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <ColorInput
                  key={form.key("color")}
                  required
                  label={CustomerGroupConfigs.properties.color.label}
                  placeholder="Chọn màu"
                  {...form.getInputProps("color")}
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <Select
                  key={form.key("status")}
                  required
                  label={CustomerGroupConfigs.properties.status.label}
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

export default CustomerGroupUpdate;
