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
import DocketReasonConfigs from "~/pages/Admin-docket-reason/DocketReasonConfigs";
import useDocketReasonUpdateViewModel from "./DocketReasonUpdate.vm";

function DocketReasonUpdate() {
  const { id } = useParams();
  const { form, docketReason, statusSelectList, handleFormSubmit } =
    useDocketReasonUpdateViewModel(id);

  if (!docketReason) return null;

  return (
    <Stack maw={800}>
      <CreateUpdateTitle
        managerPath={DocketReasonConfigs.managerPath}
        title={DocketReasonConfigs.updateTitle}
      />
      <DefaultPropertyPanel
        id={docketReason.id}
        createdAt={docketReason.createdAt}
        updatedAt={docketReason.updatedAt}
      />
      <form onSubmit={handleFormSubmit}>
        <Paper shadow="xs">
          <Stack gap={0}>
            <Grid p="sm">
              <Grid.Col span={6}>
                <TextInput
                  key={form.key("name")}
                  required
                  label={DocketReasonConfigs.properties.name.label}
                  {...form.getInputProps("name")}
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <Select
                  key={form.key("status")}
                  required
                  label={DocketReasonConfigs.properties.status.label}
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

export default DocketReasonUpdate;
