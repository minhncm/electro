import { Button, Card, Grid, Stack, TextInput, Title } from "@mantine/core";
import ClientUserNavbar from "~/components/ClientUserNavbar/ClientUserNavbar";
import Container from "~/components/Container/Container";

function ClientSettingPhone() {
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
                <Title order={2}>Cập nhật số điện thoai</Title>
                <Grid>
                  <Grid.Col span={6}>
                    <form>
                      <Stack>
                        <TextInput
                          required
                          radius="md"
                          label="Số điện thoại"
                          placeholder="Nhập số điện thoại của bạn"
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

export default ClientSettingPhone;
