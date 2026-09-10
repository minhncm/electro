import { Button, Stack, Text, useMantineTheme } from "@mantine/core";
import { Link } from "react-router-dom";
import { Check } from "tabler-icons-react";

function ClientSignupStepThree() {
  const theme = useMantineTheme();  
  return (
    <Stack align="center" c={theme.colors.teal[6]}>
      <Check size={100} strokeWidth={1} />
      <Text fw={500}>Đã tạo tài khoản và xác nhận thành công!</Text>
      <Button radius="md" size="lg" mt="xl" component={Link} to="/signin">
        Đăng nhập
      </Button>
    </Stack>
  );
}

export default ClientSignupStepThree;
