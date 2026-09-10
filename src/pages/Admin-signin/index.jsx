import {
  Box,
  Button,
  Container,
  Paper,
  PasswordInput,
  Stack,
  TextInput,
  useMantineTheme,
} from "@mantine/core";
import ElectroLogo from "~/components/ElectroLogo/ElectroLogo";
import useAdminSignin from "./AdminSignin.vm";
import useAuthStore from "~/stores/use-auth-store";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AdminSignin() {
  const { form, isSuccessLogin, handleFormSubmit } = useAdminSignin();
  const navigate = useNavigate();
  useEffect(() => {
    if (!isSuccessLogin) return;
    navigate("/admin");
  }, [isSuccessLogin, navigate]);

  const { user } = useAuthStore();

  const theme = useMantineTheme();
  return (
    <Box style={{ backgroundColor: theme.colors.gray[1], height: "100vh" }}>
      <Container size={375} py={40}>
        <Stack align="center">
          <ElectroLogo width={150} />

          <Paper
            withBorder
            shadow="md"
            p={30}
            mt={30}
            radius="md"
            style={{ width: "100%" }}
          >
            <form onSubmit={handleFormSubmit}>
              <TextInput
                required
                label="Tên tài khoản"
                placeholder="Nhập tên tài khoản của bạn"
                disabled={!!user}
                {...form.getInputProps("username")}
              />
              <PasswordInput
                required
                label="Mật khẩu"
                placeholder="Nhập mật khẩu của bạn"
                mt="md"
                disabled={!!user}
                {...form.getInputProps("password")}
              />
              <Button type="submit" fullWidth mt="xl" disabled={!!user}>
                Đăng nhập
              </Button>
            </form>
          </Paper>
        </Stack>
      </Container>
    </Box>
  );
}

export default AdminSignin;
