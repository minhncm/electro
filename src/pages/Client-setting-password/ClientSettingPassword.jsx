import { Button, Card, Grid, PasswordInput, Stack, Title } from "@mantine/core";
import ClientUserNavbar from "~/components/ClientUserNavbar/ClientUserNavbar";
import Container from "~/components/Container/Container";

function ClientSettingPassword() {
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
                <Title order={2}>Đổi mật khẩu</Title>
                <Grid>
                  <Grid.Col span={6}>
                    <form>
                      <Stack>
                        <PasswordInput
                          required
                          radius="md"
                          label="Mật khẩu hiện tại"
                          placeholder="Nhập mật khẩu hiện tại"
                        />

                        <PasswordInput required radius="md" label="Mật khẩu mới" placeholder="Nhập mật khẩu mới" />
                        <PasswordInput
                          required
                          radius="md"
                          label="Nhập lại mật khẩu mới"
                          placeholder="Nhập lại mật khẩu mới"
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

export default ClientSettingPassword;
