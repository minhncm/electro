import React from "react";
import {
  Avatar,
  Badge,
  Divider,
  Group,
  Paper,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";
import { Home, Mail, Mars, Phone, Venus } from "tabler-icons-react";
import useAuthStore from "~/stores/use-auth-store";

function AdminAccount() {
  const { user } = useAuthStore();
  return (
    <Stack>
      <Title order={3}>Thông tin tài khoản</Title>

      <Paper shadow="xs" p="lg" maw={500}>
        <Stack>
          <Text size="lg" c="dimmed" fw={500}>
            Thông tin cá nhân
          </Text>

          <Group>
            <Avatar color="cyan" size="lg" radius="md">
              {user?.fullname.charAt(0)}
            </Avatar>
            <Stack gap={0}>
              <Text fw={500}>{user?.fullname}</Text>
              <Text c="dimmed">@{user?.username}</Text>
            </Stack>
          </Group>

          <Divider my={3.5} variant="dotted" />

          <Group gap="sm">
            <ThemeIcon radius="xl" size="lg" variant="light">
              {user?.gender === "M" ? (
                <Mars size={20} strokeWidth={1.5} />
              ) : (
                <Venus size={20} strokeWidth={1.5} />
              )}
            </ThemeIcon>
            <Stack gap={0}>
              <Text fw={500}>Giới tính</Text>
              {user?.gender === "M" ? "Nam" : "Nữ"}
            </Stack>
          </Group>

          <Group gap="sm" sx={{ flexWrap: "nowrap" }}>
            <ThemeIcon radius="xl" size="lg" variant="light">
              <Home size={20} strokeWidth={1.5} />
            </ThemeIcon>
            <Stack gap={0}>
              <Text fw={500}>Địa chỉ</Text>
              <Text>
                {[
                  user?.address.line,
                  user?.address.ward?.name,
                  user?.address.district?.name,
                  user?.address.province?.name,
                ]
                  .filter(Boolean)
                  .join(", ")}
              </Text>
            </Stack>
          </Group>

          <Text size="lg" c="dimmed" fw={500}>
            Số điện thoại và Email
          </Text>

          <Group gap="sm">
            <ThemeIcon radius="xl" size="lg" variant="light">
              <Phone size={20} strokeWidth={1.5} />
            </ThemeIcon>
            <Stack gap={0}>
              <Text fw={500}>Số điện thoại</Text>
              <Text>{user?.phone}</Text>
            </Stack>
          </Group>

          <Group gap="sm">
            <ThemeIcon radius="xl" size="lg" variant="light">
              <Mail size={20} strokeWidth={1.5} />
            </ThemeIcon>
            <Stack gap={0}>
              <Text weight={500}>Email</Text>
              <Text>{user?.email}</Text>
            </Stack>
          </Group>

          <Text size="lg" c="dimmed" weight={500}>
            Quyền người dùng
          </Text>

          <Group gap="xs">
            {user?.roles.map((role) => (
              <Badge key={role.id} radius="sm">
                {role.name}
              </Badge>
            ))}
          </Group>
        </Stack>
      </Paper>
    </Stack>
  );
}

export default AdminAccount;
