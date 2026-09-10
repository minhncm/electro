import {
  ActionIcon,
  AppShell,
  Box,
  Burger,
  Button,
  Group,
  useMantineTheme,
} from "@mantine/core";
import { Link, useNavigate } from "react-router-dom";
import ElectroLogo from "../ElectroLogo/ElectroLogo";
import {
  Bell,
  Browser,
  Logout,
  Messages,
  MoonStars,
  Search,
  Sun,
  User,
} from "tabler-icons-react";
import useAuthStore from "~/stores/use-auth-store";
import ManagerPath from "~/constants/ManagerPath";

function AdminHeader() {
  const theme = useMantineTheme();
  const classes = {
    header: {
      height: 56,
      paddingLeft: theme.spacing.md,
      paddingRight: theme.spacing.md,
    },

    inner: {
      height: 56,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },

    links: {},

    search: {
      width: 300,
    },

    link: {
      display: "flex",
      alignItems: "center",
      lineHeight: 1,
      padding: "8px 12px",
      borderRadius: theme.radius.sm,
      textDecoration: "none",
      color:
        theme.colorScheme === "dark"
          ? theme.colors.dark[0]
          : theme.colors.gray[7],
      fontSize: theme.fontSizes.sm,
      fontWeight: 500,

      "&:hover": {
        backgroundColor:
          theme.colorScheme === "dark"
            ? theme.colors.dark[6]
            : theme.colors.gray[0],
        color: theme.colorScheme === "dark" ? theme.white : theme.black,
      },

      "&:active": {
        backgroundColor: theme.colors[theme.primaryColor][6],
        color: theme.white,
      },
    },
  };

  const headerLinks = [
    {
      link: "/admin/account",
      label: "Tài khoản",
      icon: User,
    },
    {
      link: "/admin/notification",
      label: "Thông báo",
      icon: Bell,
    },
    {
      link: "/admin/chat",
      label: "Tin nhắn",
      icon: Messages,
    },
    {
      link: "/",
      label: "Website",
      icon: Browser,
      target: "_blank",
    },
  ];

  const { resetAuthState } = useAuthStore();
  const navigate = useNavigate();
  const handleLogoutButton = () => {
    resetAuthState();
    navigate(ManagerPath.SIGNIN);
  };

  return (
    <AppShell.Header style={classes.header}>
      <div style={classes.inner}>
        <Group>
          <Burger size="sm" hiddenFrom="md" />
          <Box component={Link} to="/admin">
            <ElectroLogo />
          </Box>
        </Group>

        <Group>
          <Group ml={50} gap={5} style={classes.links}>
            {headerLinks.map((headerLink, index) => (
              <Button
                key={index}
                size="xs"
                variant="subtle"
                px={0}
                color={theme.colors.gray[5]}
                fw={500}
              >
                <Link
                  key={headerLink.label}
                  to={headerLink.link}
                  target={headerLink.target}
                  style={classes.link}
                >
                  <headerLink.icon size={16} style={{ marginRight: 7.5 }} />
                  {headerLink.label}
                </Link>
              </Button>
            ))}
          </Group>

          <Group gap="xs">
            <ActionIcon variant="outline" title="Tìm kiếm" c="blue">
              <Search size={18} />
            </ActionIcon>
            <ActionIcon
              variant="outline"
              title="Thay đổi chế độ màu"
              c={theme.colorScheme === "dark" ? "yellow" : "blue"}
            >
              {theme.colorScheme === "dark" ? (
                <Sun size={18} />
              ) : (
                <MoonStars size={18} />
              )}
            </ActionIcon>
            <ActionIcon
              variant="outline"
              title="Đăng xuất"
              c="blue"
              onClick={handleLogoutButton}
            >
              <Logout size={18} />
            </ActionIcon>
          </Group>
        </Group>
      </div>
    </AppShell.Header>
  );
}

export default AdminHeader;
