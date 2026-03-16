import {
  Button,
  Divider,
  Grid,
  Group,
  Paper,
  Select,
  Stack,
  Textarea,
  TextInput,
} from "@mantine/core";
import { useParams } from "react-router-dom";
import CreateUpdateTitle from "~/components/CreateUpdateTitle";
import DefaultPropertyPanel from "~/components/DefaultPropertyPanel";
import OrderCancellationReasonConfigs from "~/pages/Admin-order-cancellation-reason/OrderCancellationReasonConfigs";
import useOrderCancellationReasonUpdateViewModel from "./OrderCancellationReasonUpdate.vm";

function OrderCancellationReasonUpdate() {
  const { id } = useParams();
  const { form, orderCancellationReason, statusSelectList, handleFormSubmit } =
    useOrderCancellationReasonUpdateViewModel(id);

  if (!orderCancellationReason) return null;

  return (
    <Stack maw={800}>
      <CreateUpdateTitle
        managerPath={OrderCancellationReasonConfigs.managerPath}
        title={OrderCancellationReasonConfigs.updateTitle}
      />
      <DefaultPropertyPanel
        id={orderCancellationReason.id}
        createdAt={orderCancellationReason.createdAt}
        updatedAt={orderCancellationReason.updatedAt}
      />
      <form onSubmit={handleFormSubmit}>
        <Paper shadow="xs">
          <Stack gap={0}>
            <Grid p="sm">
              <Grid.Col>
                <TextInput
                  key={form.key("name")}
                  required
                  label={OrderCancellationReasonConfigs.properties.name.label}
                  {...form.getInputProps("name")}
                />
              </Grid.Col>
              <Grid.Col>
                <Textarea
                  key={form.key("note")}
                  label={OrderCancellationReasonConfigs.properties.note.label}
                  {...form.getInputProps("note")}
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <Select
                  key={form.key("status")}
                  required
                  label={OrderCancellationReasonConfigs.properties.status.label}
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

export default OrderCancellationReasonUpdate;
