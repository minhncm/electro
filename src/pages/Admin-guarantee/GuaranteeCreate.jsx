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
import GuaranteeConfigs from "~/pages/Admin-guarantee/GuaranteeConfigs";
import useGuaranteeCreateViewModel from "./GuaranteeCreate.vm";

function GuaranteeCreate() {
  const { form, statusSelectList, handleFormSubmit } =
    useGuaranteeCreateViewModel();

  return (
    <Stack maw={800}>
      <CreateUpdateTitle
        managerPath={GuaranteeConfigs.managerPath}
        title={GuaranteeConfigs.createTitle}
      />
      <DefaultPropertyPanel />
      <form onSubmit={handleFormSubmit}>
        <Paper shadow="xs">
          <Stack gap={0}>
            <Grid p="sm">
              <Grid.Col span={6}>
                <TextInput
                  key={form.key("name")}
                  required
                  label={GuaranteeConfigs.properties.name.label}
                  {...form.getInputProps("name")}
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <TextInput
                  key={form.key("description")}
                  required
                  label={GuaranteeConfigs.properties.description.label}
                  {...form.getInputProps("description")}
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <Select
                  key={form.key("status")}
                  required
                  label={GuaranteeConfigs.properties.status.label}
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
              <Button type="submit">Thêm</Button>
            </Group>
          </Stack>
        </Paper>
      </form>
    </Stack>
  );
}

export default GuaranteeCreate;
