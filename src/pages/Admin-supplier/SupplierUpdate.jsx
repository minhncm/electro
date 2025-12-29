import { Button, Divider, Grid, Group, Paper, Select, Stack, Text, Textarea, TextInput, Title } from "@mantine/core";
import CreateUpdateTitle from "~/components/CreateUpdateTitle";
import DefaultPropertyPanel from "~/components/DefaultPropertyPanel";
import SupplierConfigs from "~/pages/Admin-supplier/SupplierConfigs";

function SuppilerUpdate() {
  return (
    <Stack maw={800}>
      <CreateUpdateTitle managerPath={SupplierConfigs.managerPath} title={SupplierConfigs.updateTitle} />
      <DefaultPropertyPanel />
      <form>
        <Paper shadow="xs">
          <Stack gap={0}>
            <Grid p="sm">
              <Grid.Col>
                <Title order={4}>Thông tin cơ bản</Title>
                <Text size="sm">Một số thông tin chung</Text>
              </Grid.Col>
              <Grid.Col span={6}>
                <TextInput required label={SupplierConfigs.properties.displayName.label} />
              </Grid.Col>
              <Grid.Col span={6}>
                <TextInput required label={SupplierConfigs.properties.code.label} />
              </Grid.Col>
              <Grid.Col>
                <Title order={4}>Người liên hệ</Title>
                <Text size="sm">Thông tin người liên hệ khi đặt hàng, mua hàng</Text>
              </Grid.Col>
              <Grid.Col span={6}>
                <TextInput label={SupplierConfigs.properties.contactFullname.label} />
              </Grid.Col>
              <Grid.Col span={6}>
                <TextInput label={SupplierConfigs.properties.contactEmail.label} />
              </Grid.Col>
              <Grid.Col span={6}>
                <TextInput label={SupplierConfigs.properties.contactPhone.label} />
              </Grid.Col>
              <Grid.Col>
                <Title order={4}>Thông tin công ty</Title>
                <Text size="sm">Thông tin chi tiết nhà cung cấp</Text>
              </Grid.Col>
              <Grid.Col span={6}>
                <TextInput label={SupplierConfigs.properties.companyName.label} />
              </Grid.Col>
              <Grid.Col span={6}>
                <TextInput label={SupplierConfigs.properties.taxCode.label} />
              </Grid.Col>
              <Grid.Col span={6}>
                <TextInput label={SupplierConfigs.properties.email.label} />
              </Grid.Col>
              <Grid.Col span={6}>
                <TextInput label={SupplierConfigs.properties.phone.label} />
              </Grid.Col>
              <Grid.Col span={6}>
                <TextInput label={SupplierConfigs.properties.fax.label} />
              </Grid.Col>
              <Grid.Col span={6}>
                <TextInput label={SupplierConfigs.properties.website.label} />
              </Grid.Col>
              <Grid.Col>
                <TextInput label={SupplierConfigs.properties["address.line"].label} />
              </Grid.Col>
              <Grid.Col span={6}>
                <Select
                  label={SupplierConfigs.properties["address.provinceId"].label}
                  placeholder="--"
                  clearable
                  searchable
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <Select
                  label={SupplierConfigs.properties["address.districtId"].label}
                  placeholder="--"
                  clearable
                  searchable
                />
              </Grid.Col>
              <Grid.Col>
                <Textarea label={SupplierConfigs.properties.description.label} />
              </Grid.Col>
              <Grid.Col>
                <Textarea label={SupplierConfigs.properties.note.label} />
              </Grid.Col>
              <Grid.Col span={6}>
                <Select required label={SupplierConfigs.properties.status.label} placeholder="--" />
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

export default SuppilerUpdate;
