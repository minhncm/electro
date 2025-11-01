import { Button, Card, Grid, Stack, TextInput, Title } from "@mantine/core";
import ClientUserNavbar from "~/components/ClientUserNavbar/ClientUserNavbar";
import Container from "~/components/Container/Container";

function ClientSettingEmail() {
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
                <Title order={2}>Cập nhật email</Title>
                <Grid>
                  <Grid.Col span={6}>
                    <form>
                      <Stack>
                        <TextInput required radius="md" label="Email" placeholder="Nhập email của bạn" />
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

export default ClientSettingEmail;
