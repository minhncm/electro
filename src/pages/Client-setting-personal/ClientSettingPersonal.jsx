import { Button, Card, Grid, Select, Stack, TextInput, Title } from "@mantine/core";
import ClientUserNavbar from "~/components/ClientUserNavbar/ClientUserNavbar";
import Container from "~/components/Container/Container";

function ClientSettingPersonal() {
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
                    <form>
                      <Stack>
                        <TextInput
                          required
                          radius="md"
                          label="Tên tài khoản"
                          placeholder="Nhập tên tài khoản của bạn"
                          disabled
                          // chưa cho phép user sửa username
                        />

                        <TextInput required radius="md" label="Họ và tên" placeholder="Nhập họ và tên" />
                        <Select required radius="md" label="Giới tính" placeholder="Chọn giới tính" />
                        <Select required radius="md" label="Tỉnh thành" placeholder="Chọn tỉnh thành" />
                        <Select required radius="md" label="Quận huyện" placeholder="Chọn quận huyện" />
                        <Select required radius="md" label="Phường xã" placeholder="Chọn phường xã" />
                        <TextInput required radius="md" label="Địa chỉ" placeholder="Nhập địa chỉ của bạn" />

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
