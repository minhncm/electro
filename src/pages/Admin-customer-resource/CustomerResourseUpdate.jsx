import { Button, ColorInput, Divider, Grid, Group, Paper, Select, Stack, TextInput } from "@mantine/core";
import CreateUpdateTitle from "~/components/CreateUpdateTitle";
import DefaultPropertyPanel from "~/components/DefaultPropertyPanel";
import CustomerResourseConfigs from "~/pages/Admin-customer-resource/CustomerResourseConfigs";

function CustomerResourseUpdate() {
  return (
    <Stack maw={800}>
      <CreateUpdateTitle
        managerPath={CustomerResourseConfigs.managerPath}
        title={CustomerResourseConfigs.updateTitle}
      />

      <DefaultPropertyPanel />

      <form>
        <Paper shadow="xs">
          <Stack gap={0}>
            <Grid p="sm">
              <Grid.Col span={6}>
                <TextInput required label={CustomerResourseConfigs.properties.code.label} />
              </Grid.Col>
              <Grid.Col span={6}>
                <TextInput required label={CustomerResourseConfigs.properties.name.label} />
              </Grid.Col>
              <Grid.Col>
                <TextInput required label={CustomerResourseConfigs.properties.description.label} />
              </Grid.Col>
              <Grid.Col span={6}>
                <ColorInput required label={CustomerResourseConfigs.properties.color.label} placeholder="Chọn màu" />
              </Grid.Col>
              <Grid.Col span={6}>
                <Select required label={CustomerResourseConfigs.properties.status.label} placeholder="--" />
              </Grid.Col>
            </Grid>

            <Divider />

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

export default CustomerResourseUpdate;
