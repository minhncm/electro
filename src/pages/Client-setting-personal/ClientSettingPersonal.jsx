import {
  Button,
  Card,
  Grid,
  Select,
  Stack,
  TextInput,
  Title,
} from "@mantine/core";
import ClientUserNavbar from "~/components/ClientUserNavbar/ClientUserNavbar";
import Container from "~/components/Container/Container";
import useClientSettingPersonalViewModel from "./useClientSettingPersonal.vm";

function ClientSettingPersonal() {
  const {
    form,
    provinceSelectList,
    districtSelectList,
    wardSelectList,
    genderSelectList,
    handleFormSubmit,
  } = useClientSettingPersonalViewModel();
  return (
    <main>
      <Container>
        <Grid gutter="lg">
          <Grid.Col span={3}>
            <ClientUserNavbar />
          </Grid.Col>

          <Grid.Col span={9}>
            <Card radius="md" shadow="sm" p="lg">
              <Stack>
                <Title order={2}>Cập nhật thông tin cá nhân</Title>
                <Grid>
                  <Grid.Col span={6}>
                    <form onSubmit={handleFormSubmit}>
                      <Stack>
                        <TextInput
                          required
                          radius="md"
                          label="Tên tài khoản"
                          placeholder="Nhập tên tài khoản của bạn"
                          disabled
                          // chưa cho phép user sửa username
                        />

                        <TextInput
                          key={form.key("fullname")}
                          required
                          radius="md"
                          label="Họ và tên"
                          placeholder="Nhập họ và tên"
                          {...form.getInputProps("fullname")}
                        />
                        <Select
                          required
                          radius="md"
                          label="Giới tính"
                          placeholder="Chọn giới tính"
                          key={form.key("gender")}
                          data={genderSelectList}
                          {...form.getInputProps("gender")}
                        />
                        <Select
                          required
                          radius="md"
                          label="Tỉnh thành"
                          placeholder="Chọn tỉnh thành"
                          data={provinceSelectList}
                          key={form.key("address.provinceId")}
                          {...form.getInputProps("address.provinceId")}
                        />
                        <Select
                          required
                          radius="md"
                          label="Quận huyện"
                          placeholder="Chọn quận huyện"
                          data={districtSelectList}
                          key={form.key("address.districtId")}
                          {...form.getInputProps("address.districtId")}
                        />
                        <Select
                          required
                          radius="md"
                          label="Phường xã"
                          placeholder="Chọn phường xã"
                          key={form.key("address.wardId")}
                          data={wardSelectList}
                          {...form.getInputProps("address.wardId")}
                        />
                        <TextInput
                          required
                          radius="md"
                          label="Địa chỉ"
                          placeholder="Nhập địa chỉ của bạn"
                          key={form.key("address.line")}
                          {...form.getInputProps("address.line")}
                        />

                        <Button radius="md" type="submit">
                          Cập nhật
                        </Button>
                      </Stack>
                    </form>
                  </Grid.Col>
                </Grid>
              </Stack>
            </Card>
          </Grid.Col>
        </Grid>
      </Container>
    </main>
  );
}

export default ClientSettingPersonal;
