import { Button, Card, Grid, Stack, TextInput, Title } from "@mantine/core";
import ClientUserNavbar from "~/components/ClientUserNavbar/ClientUserNavbar";
import Container from "~/components/Container/Container";
import useClientSettingPhoneViewModel from "./useClientSettingPhone.vm";

function ClientSettingPhone() {
  const { form, handleFormSubmit } = useClientSettingPhoneViewModel();
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
                    <form onSubmit={handleFormSubmit}>
                      <Stack>
                        <TextInput
                          key={form.key("phone")}
                          required
                          radius="md"
                          label="Số điện thoại"
                          placeholder="Nhập số điện thoại của bạn"
                          {...form.getInputProps("phone")}
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
