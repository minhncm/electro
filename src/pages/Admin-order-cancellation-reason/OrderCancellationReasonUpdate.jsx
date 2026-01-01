import { Button, Divider, Grid, Group, Paper, Select, Stack, Textarea, TextInput } from "@mantine/core";
import CreateUpdateTitle from "~/components/CreateUpdateTitle";
import DefaultPropertyPanel from "~/components/DefaultPropertyPanel";
import OrderCancellationReasonConfigs from "~/pages/Admin-order-cancellation-reason/OrderCancellationReasonConfigs";

function OrderCancellationReasonUpdate() {
  return (
    <Stack maw={800}>
      <CreateUpdateTitle
        managerPath={OrderCancellationReasonConfigs.managerPath}
        title={OrderCancellationReasonConfigs.updateTitle}
      />
      <DefaultPropertyPanel />
      <form>
        <Paper shadow="xs">
          <Stack gap={0}>
            <Grid p="sm">
              <Grid.Col>
                <TextInput required label={OrderCancellationReasonConfigs.properties.name.label} />
              </Grid.Col>
              <Grid.Col>
                <Textarea label={OrderCancellationReasonConfigs.properties.note.label} />
              </Grid.Col>
              <Grid.Col span={6}>
                <Select required label={OrderCancellationReasonConfigs.properties.status.label} placeholder="--" />
              </Grid.Col>
            </Grid>

            <Divider mt="xs" />
            <Group justify="space-between" p="sm">
              <Button variant="default">Mặc định</Button>
              <Button type="submit">Thêm</Button>
            </Group>
          </Stack>
        </Paper>
      </form>
    </Stack>
  );
}

export default OrderCancellationReasonUpdate;
