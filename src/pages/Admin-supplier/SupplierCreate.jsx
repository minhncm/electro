import {
  Button,
  Divider,
  Grid,
  Group,
  Paper,
  Select,
  Stack,
  Text,
  Textarea,
  TextInput,
  Title,
} from "@mantine/core";
import CreateUpdateTitle from "~/components/CreateUpdateTitle";
import DefaultPropertyPanel from "~/components/DefaultPropertyPanel";
import SupplierConfigs from "~/pages/Admin-supplier/SupplierConfigs";
import useSupplierCreateViewModel from "./SupplierCreate.vm";

function SupplierCreate() {
  const {
    form,
    provinceSelectList,
    districtSelectList,
    statusSelectList,
    handleFormSubmit,
  } = useSupplierCreateViewModel();
  return (
    <Stack maw={800}>
      <CreateUpdateTitle
        managerPath={SupplierConfigs.managerPath}
        title={SupplierConfigs.createTitle}
      />

      <DefaultPropertyPanel />

      <form onSubmit={handleFormSubmit}>
        <Paper shadow="xs">
          <Stack gap={0}>
            <Grid p="sm">
              <Grid.Col>
                <Title order={4}>Thông tin cơ bản</Title>
                <Text size="sm">Một số thông tin chung</Text>
              </Grid.Col>
              <Grid.Col span={6}>
                <TextInput
                  key={form.key("displayName")}
                  required
                  label={SupplierConfigs.properties.displayName.label}
                  {...form.getInputProps("displayName")}
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <TextInput
                  key={form.key("code")}
                  required
                  label={SupplierConfigs.properties.code.label}
                  {...form.getInputProps("code")}
                />
              </Grid.Col>
              <Grid.Col>
                <Title order={4}>Người liên hệ</Title>
                <Text size="sm">
                  Thông tin người liên hệ khi đặt hàng, mua hàng
                </Text>
              </Grid.Col>
              <Grid.Col span={6}>
                <TextInput
                  key={form.key("contactFullname")}
                  label={SupplierConfigs.properties.contactFullname.label}
                  {...form.getInputProps("contactFullname")}
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <TextInput
                  key={form.key("contactEmail")}
                  label={SupplierConfigs.properties.contactEmail.label}
                  {...form.getInputProps("contactEmail")}
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <TextInput
                  key={form.key("contactPhone")}
                  label={SupplierConfigs.properties.contactPhone.label}
                  {...form.getInputProps("contactPhone")}
                />
              </Grid.Col>
              <Grid.Col>
                <Title order={4}>Thông tin công ty</Title>
                <Text size="sm">Thông tin chi tiết nhà cung cấp</Text>
              </Grid.Col>
              <Grid.Col span={6}>
                <TextInput
                  key={form.key("companyName")}
                  label={SupplierConfigs.properties.companyName.label}
                  {...form.getInputProps("companyName")}
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <TextInput
                  key={form.key("taxCode")}
                  label={SupplierConfigs.properties.taxCode.label}
                  {...form.getInputProps("taxCode")}
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <TextInput
                  key={form.key("email")}
                  label={SupplierConfigs.properties.email.label}
                  {...form.getInputProps("email")}
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <TextInput
                  key={form.key("phone")}
                  label={SupplierConfigs.properties.phone.label}
                  {...form.getInputProps("phone")}
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <TextInput
                  key={form.key("fax")}
                  label={SupplierConfigs.properties.fax.label}
                  {...form.getInputProps("fax")}
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <TextInput
                  key={form.key("website")}
                  label={SupplierConfigs.properties.website.label}
                  {...form.getInputProps("website")}
                />
              </Grid.Col>
              <Grid.Col>
                <TextInput
                  key={form.key("address.line")}
                  label={SupplierConfigs.properties["address.line"].label}
                  {...form.getInputProps("address.line")}
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <Select
                  key={form.key("address.provinceId")}
                  label={SupplierConfigs.properties["address.provinceId"].label}
                  placeholder="--"
                  clearable
                  searchable
                  {...form.getInputProps("address.provinceId")}
                  data={provinceSelectList}
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <Select
                  key={form.key("address.districtId")}
                  label={SupplierConfigs.properties["address.districtId"].label}
                  placeholder="--"
                  clearable
                  searchable
                  {...form.getInputProps("address.districtId")}
                  data={districtSelectList}
                />
              </Grid.Col>
              <Grid.Col>
                <Textarea
                  key={form.key("description")}
                  label={SupplierConfigs.properties.description.label}
                  {...form.getInputProps("description")}
                />
              </Grid.Col>
              <Grid.Col>
                <Textarea
                  key={form.key("note")}
                  label={SupplierConfigs.properties.note.label}
                  {...form.getInputProps("note")}
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <Select
                  required
                  key={form.key("status")}
                  label={SupplierConfigs.properties.status.label}
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

export default SupplierCreate;
