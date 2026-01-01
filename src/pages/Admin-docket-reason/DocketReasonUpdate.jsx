import { Button, Divider, Grid, Group, Paper, Select, Stack, TextInput } from "@mantine/core";
import CreateUpdateTitle from "~/components/CreateUpdateTitle";
import DefaultPropertyPanel from "~/components/DefaultPropertyPanel";
import DocketReasonConfigs from "~/pages/Admin-docket-reason/DocketReasonConfigs";

function DocketReasonUpdate() {
  return (
    <Stack maw={800}>
      <CreateUpdateTitle managerPath={DocketReasonConfigs.managerPath} title={DocketReasonConfigs.updateTitle} />
      <DefaultPropertyPanel />
      <form>
        <Paper shadow="xs">
          <Stack gap={0}>
            <Grid p="sm">
              <Grid.Col span={6}>
                <TextInput required label={DocketReasonConfigs.properties.name.label} />
              </Grid.Col>
              <Grid.Col span={6}>
                <Select required label={DocketReasonConfigs.properties.status.label} placeholder="--" />
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

export default DocketReasonUpdate;
