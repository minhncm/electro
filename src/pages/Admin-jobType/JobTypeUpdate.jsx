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

import JobTypeConfigs from "~/pages/Admin-jobType/JobTypeConfigs";
import useJobTypeUpdateViewModel from "./JobTypeUpdate.vm";

function JobTypeUpdate() {
  const { id } = useParams();
  const { form, jobType, statusSelectList, handleFormSubmit } =
    useJobTypeUpdateViewModel(id);

  if (!jobType) return null;
  return (
    <Stack maw={800}>
      <CreateUpdateTitle
        managerPath={JobTypeConfigs.managerPath}
        title={JobTypeConfigs.updateTitle}
      />

      <DefaultPropertyPanel
        id={jobType.id}
        createdAt={jobType.createdAt}
        updatedAt={jobType.updatedAt}
      />

      <form onSubmit={handleFormSubmit}>
        <Paper shadow="xs">
          <Stack gao={0}>
            <Grid p="sm">
              <Grid.Col span={6}>
                <TextInput
                  key={form.key("name")}
                  required
                  label={JobTypeConfigs.properties.name.label}
                  {...form.getInputProps("name")}
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <Select
                  key={form.key("status")}
                  required
                  label={JobTypeConfigs.properties.status.label}
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

export default JobTypeUpdate;
