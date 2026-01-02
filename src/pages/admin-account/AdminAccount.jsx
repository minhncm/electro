import React from "react";
import { Avatar, Badge, Divider, Group, Paper, Stack, Text, ThemeIcon, Title } from "@mantine/core";
import { Home, Mail, Mars, Phone, Venus } from "tabler-icons-react";

const user = {
  id: 1,
  createdAt: "2021-10-05T00:30:07Z",
  updatedAt: "2021-06-03T09:38:23Z",
  username: "dnucator0",
  fullname: "Dolly Nucator",
  email: "dnucator0@prweb.com",
  phone: "0919944705",
  gender: "M",
  address: {
    id: 1,
    createdAt: "2021-09-29T14:58:33Z",
    updatedAt: "2021-07-30T07:27:56Z",
    line: "140 Commercial Way",
    province: {
      id: 7,
      createdAt: "2023-02-14T17:00:00Z",
      updatedAt: "2023-02-14T17:00:00Z",
      name: "Thái Bình",
      code: "34",
    },
    district: {
      id: 28,
      createdAt: "2023-02-14T17:00:00Z",
      updatedAt: "2023-02-14T17:00:00Z",
      name: "Quận Hà Đông",
      code: "268",
    },
    ward: {
      id: 1,
      createdAt: "2023-02-14T17:00:00Z",
      updatedAt: "2023-02-14T17:00:00Z",
      name: "Phường 06",
      code: "27337",
    },
  },
  avatar: "http://dummyimage.com/138x100.png/dddddd/000000",
  status: 1,
  roles: [
    {
      id: 1,
      createdAt: "1971-04-11T00:45:46Z",
      updatedAt: "2006-04-25T20:05:23Z",
      code: "ADMIN",
      name: "Quản trị viên",
      status: 1,
    },
  ],
};

function AdminAccount() {
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
              {user?.gender === "M" ? <Mars size={20} strokeWidth={1.5} /> : <Venus size={20} strokeWidth={1.5} />}
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
