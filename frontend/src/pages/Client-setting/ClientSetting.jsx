import { Button, Card, Grid, Group, Stack, Text, ThemeIcon, Title } from "@mantine/core";
import { Link } from "react-router-dom";
import { Lock, Mail, Phone, User } from "tabler-icons-react";
import ClientUserNavbar from "~/components/ClientUserNavbar/ClientUserNavbar";
import Container from "~/components/Container/Container";

function ClientSetting() {
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
                <Title order={2}>Thiết đặt</Title>

                <Group justify="space-between">
                  <Group>
                    <ThemeIcon radius="xl" size="xl" variant="light">
                      <User strokeWidth={1.5} />
                    </ThemeIcon>
                    <Stack gap={0}>
                      <Text fw={500}>Thông tin cá nhân</Text>
                      <Text c="dimmed" size="sm">
                        Cập nhật họ và tên, giới tính, địa chỉ...
                      </Text>
                    </Stack>
                  </Group>

                  <Button component={Link} to="/user/setting/personal" variant="outline" radius="md">
                    Cập nhật
                  </Button>
                </Group>

                <Group justify="space-between">
                  <Group>
                    <ThemeIcon radius="xl" size="xl" variant="light">
                      <Phone strokeWidth={1.5} />
                    </ThemeIcon>
                    <Stack gap={0}>
                      <Text fw={500}>Số điện thoại</Text>
                      <Text c="dimmed" size="sm">
                        Thay đổi số điện thoại hiện tại bằng số mới
                      </Text>
                    </Stack>
                  </Group>

                  <Button component={Link} to="/user/setting/phone" variant="outline" radius="md">
                    Cập nhật
                  </Button>
                </Group>

                <Group justify="space-between">
                  <Group>
                    <ThemeIcon radius="xl" size="xl" variant="light">
                      <Mail strokeWidth={1.5} />
                    </ThemeIcon>
                    <Stack gap={0}>
                      <Text fw={500}>Email</Text>
                      <Text c="dimmed" size="sm">
                        Thay đổi email hiện tại bằng email mới
                      </Text>
                    </Stack>
                  </Group>

                  <Button component={Link} to="/user/setting/email" variant="outline" radius="md">
                    Cập nhật
                  </Button>
                </Group>

                <Group justify="space-between">
                  <Group>
                    <ThemeIcon radius="xl" size="xl" variant="light">
                      <Lock strokeWidth={1.5} />
                    </ThemeIcon>
                    <Stack gap={0}>
                      <Text fw={500}>Mật khẩu</Text>
                      <Text c="dimmed" size="sm">
                        Thay đổi mật khẩu hiện tại
                      </Text>
                    </Stack>
                  </Group>

                  <Button component={Link} to="/user/setting/password" variant="outline" radius="md">
                    Cập nhật
                  </Button>
                </Group>
              </Stack>
            </Card>
          </Grid.Col>
        </Grid>
      </Container>
    </main>
  );
}

export default ClientSetting;
