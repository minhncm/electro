import {
  Avatar,
  Button,
  Card,
  Divider,
  Grid,
  Group,
  LoadingOverlay,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";
import { Link } from "react-router-dom";
import { Home, Lock, Mail, Mars, Phone } from "tabler-icons-react";
import ClientUserNavbar from "~/components/ClientUserNavbar/ClientUserNavbar";
import Container from "~/components/Container/Container";
import { useGetUser } from "~/hooks/client/use-user-api";

function ClientUser() {
  const { data: user } = useGetUser();

  if (!user) return <LoadingOverlay />;

  return (
    <main>
      <Container>
        <Grid gutter="lg">
          <Grid.Col span={3}>
            <ClientUserNavbar />
          </Grid.Col>
          <Grid.Col span={9}>
            <Card radius="md" shadow="md" p="lg">
              <Stack>
                <Title order={2}>Thông tin tài khoản</Title>

                <Grid gutter="lg">
                  <Grid.Col span={6}>
                    <Stack>
                      <Text size="lg" c="dimmed" fw={500}>
                        Thông tin cá nhân
                      </Text>

                      <Group justify="space-between">
                        <Group>
                          <Avatar color="cyan" size="lg" radius="md">
                            N
                          </Avatar>
                          <Stack gap={0}>
                            <Text fw={500}>{user.fullname}</Text>
                            <Text c="dimmed">@{user.username}</Text>
                          </Stack>
                        </Group>
                        <Button
                          component={Link}
                          to="/user/setting/personal"
                          variant="outline"
                          radius="md"
                        >
                          Cập nhật
                        </Button>
                      </Group>

                      <Divider my={3.5} variant="dotted" />

                      <Group gap="sm">
                        <ThemeIcon radius="xl" size="lg" variant="light">
                          <Mars size={20} strokeWidth={1.5} />
                        </ThemeIcon>
                        <Stack gap={0}>
                          <Text fw={500}>Giới tính</Text>
                          <Text>{user.gender === "M" ? "Nam" : "Nữ"}</Text>
                        </Stack>
                      </Group>

                      <Group gap="sm" wrap="nowrap">
                        <ThemeIcon radius="xl" size="lg" variant="light">
                          <Home size={20} strokeWidth={1.5} />
                        </ThemeIcon>
                        <Stack gap={0}>
                          <Text fw={500}>Địa chỉ</Text>
                          <Text>
                            {[
                              user.address.line,
                              user.address.ward.name,
                              user.address.district.name,
                              user.address.province.name,
                            ]
                              .filter(Boolean)
                              .join(", ")}
                          </Text>
                        </Stack>
                      </Group>
                    </Stack>
                  </Grid.Col>

                  <Grid.Col span={6}>
                    <Stack>
                      <Text size="lg" c="dimmed" fw={500}>
                        Số điện thoại và Email
                      </Text>

                      <Group justify="space-between">
                        <Group gap="sm">
                          <ThemeIcon radius="xl" size="lg" variant="light">
                            <Phone size={20} strokeWidth={1.5} />
                          </ThemeIcon>
                          <Stack gap={0}>
                            <Text fw={500}>Số điện thoại</Text>
                            <Text>{user.phone}</Text>
                          </Stack>
                        </Group>
                        <Button
                          component={Link}
                          to="/user/setting/phone"
                          variant="outline"
                          radius="md"
                        >
                          Cập nhật
                        </Button>
                      </Group>

                      <Group justify="space-between">
                        <Group gap="sm">
                          <ThemeIcon radius="xl" size="lg" variant="light">
                            <Mail size={20} strokeWidth={1.5} />
                          </ThemeIcon>
                          <Stack gap={0}>
                            <Text fw={500}>Email</Text>
                            <Text>{user.email}</Text>
                          </Stack>
                        </Group>
                        <Button
                          component={Link}
                          to="/user/setting/email"
                          variant="outline"
                          radius="md"
                        >
                          Cập nhật
                        </Button>
                      </Group>

                      <Text size="lg" c="dimmed" fw={500}>
                        Bảo mật
                      </Text>

                      <Group justify="space-between">
                        <Group gap="sm">
                          <ThemeIcon radius="xl" size="lg" variant="light">
                            <Lock size={20} strokeWidth={1.5} />
                          </ThemeIcon>
                          <Stack gap={0}>
                            <Text fw={500}>Đổi mật khẩu</Text>
                          </Stack>
                        </Group>
                        <Button
                          component={Link}
                          to="/user/setting/password"
                          variant="outline"
                          radius="md"
                        >
                          Cập nhật
                        </Button>
                      </Group>
                    </Stack>
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

export default ClientUser;
