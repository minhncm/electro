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
import OrderResourceConfigs from "~/pages/Admin-order-resourse/OrderResourceConfigs";
import useOrderResourceUpdateViewModel from "./OrderResourceUpdate.vm";

function OrderResourceUpdate() {
  const { id } = useParams();
  const {
    form,
    orderResource,
    customerResourceSelectList,
    statusSelectList,
    handleFormSubmit,
  } = useOrderResourceUpdateViewModel(id);

  if (!orderResource) return null;

  return (
    <Stack maw={800}>
      <CreateUpdateTitle
        managerPath={OrderResourceConfigs.managerPath}
        title={OrderResourceConfigs.updateTitle}
      />
      <DefaultPropertyPanel
        id={orderResource.id}
        createdAt={orderResource.createdAt}
        updatedAt={orderResource.updatedAt}
      />
      <form onSubmit={handleFormSubmit}>
        <Paper shadow="xs">
          <Stack gap={0}>
            <Grid p="sm">
              <Grid.Col span={6}>
                <TextInput
                  key={form.key("code")}
                  required
                  label={OrderResourceConfigs.properties.code.label}
                  {...form.getInputProps("code")}
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <TextInput
                  key={form.key("name")}
                  {...form.getInputProps("name")}
                  required
                  label={OrderResourceConfigs.properties.name.label}
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <ColorInput
                  required
                  key={form.key("color")}
                  label={OrderResourceConfigs.properties.color.label}
                  placeholder="Chọn màu"
                  {...form.getInputProps("color")}
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <Select
                  key={form.key("customerResourceId")}
                  label={
                    OrderResourceConfigs.properties.customerResourceId.label
                  }
                  placeholder="--"
                  clearable
                  {...form.getInputProps("customerResourceId")}
                  data={customerResourceSelectList}
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <Select
                  key={form.key("status")}
                  required
                  label={OrderResourceConfigs.properties.status.label}
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

export default OrderResourceUpdate;
