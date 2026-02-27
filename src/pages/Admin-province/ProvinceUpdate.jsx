import {
  Divider,
  Grid,
  Group,
  Paper,
  Select,
  Stack,
  TextInput,
} from "@mantine/core";
import CreateUpdateTitle from "~/components/CreateUpdateTitle";
import ProvinceConfigs from "./ProvinceConfigs";
import DefaultPropertyPanel from "~/components/DefaultPropertyPanel";
import Button from "~/components/common/Button";
import { useParams } from "react-router-dom";
import useProvinceUpdateViewModel from "./ProvinceUpdate.vm";

function ProvinceUpdate() {
  const { id } = useParams();
  const { province, form, handleFormSubmit } = useProvinceUpdateViewModel(id);

  if (!province) return null;
  return (
    <Stack maw={800}>
      <CreateUpdateTitle
        managerPath={ProvinceConfigs.managerPath}
        title={ProvinceConfigs.updateTitle}
      />

      <DefaultPropertyPanel
        id={province.id}
        createdAt={province.createdAt}
        updatedAt={province.updatedAt}
      />

      <form onSubmit={handleFormSubmit}>
        <Paper shadow="xs">
          <Stack gap={0}>
            <Grid p="sm">
              <Grid.Col span={6}>
                <TextInput
                  key={form.key("name")}
                  required
                  label={ProvinceConfigs.properties.name.label}
                  {...form.getInputProps("name")}
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <TextInput
                  key={form.key("code")}
                  required
                  label={ProvinceConfigs.properties.code.label}
                  {...form.getInputProps("code")}
                />
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

export default ProvinceUpdate;
