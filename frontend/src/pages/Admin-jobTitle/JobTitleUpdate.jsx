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
import CreateUpdateTitle from "~/components/CreateUpdateTitle";
import DefaultPropertyPanel from "~/components/DefaultPropertyPanel";
import JobTitleConfigs from "~/pages/Admin-jobTitle/JobTitleConfigs";
import useJobTitleUpdateViewModel from "./JobTitleUpdate.vm";
import { useParams } from "react-router-dom";

function JobTitleUpdate() {
  const { id } = useParams();
  const { form, jobTitle, statusSelectList, handleFormSubmit } =
    useJobTitleUpdateViewModel(id);

  if (!jobTitle) return null;
  return (
    <Stack maw={800}>
      <CreateUpdateTitle
        managerPath={JobTitleConfigs.managerPath}
        title={JobTitleConfigs.updateTitle}
      />

      <DefaultPropertyPanel
        id={jobTitle.id}
        createdAt={jobTitle.createdAt}
        updatedAt={jobTitle.updatedAt}
      />

      <form onSubmit={handleFormSubmit}>
        <Paper shadow="xs">
          <Stack gao={0}>
            <Grid p="sm">
              <Grid.Col span={6}>
                <TextInput
                  key={form.key("name")}
                  required
                  label={JobTitleConfigs.properties.name.label}
                  {...form.getInputProps("name")}
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <Select
                  key={form.key("status")}
                  required
                  label={JobTitleConfigs.properties.status.label}
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

export default JobTitleUpdate;
