import {
  Alert,
  Anchor,
  Box,
  Button,
  Card,
  PasswordInput,
  Text,
  TextInput,
  Title,
  Transition,
  useMantineTheme,
} from "@mantine/core";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AlertCircle } from "tabler-icons-react";
import Container from "~/components/Container/Container";

function ClientSignin() {
  const theme = useMantineTheme();
  const user = true;
  const [openedAlert, setOpenedAlert] = useState(false);
  const [counter, setCounter] = useState(3);
  const navigate = useNavigate();

  const cardStyle = {
    wrapper: {
      minHeight: 600,
      backgroundSize: "cover",
      backgroundImage:
        "url(https://images.unsplash.com/photo-1487875961445-47a00398c267?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80)",
      backgroundPosition: "bottom",
    },

    form: {
      borderRight: `1px solid ${theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[3]}`,
      minHeight: 600,
      maxWidth: 450,
      paddingTop: 80,
    },
  };

  useEffect(() => {
    if (openedAlert && user && counter > 0) {
      setTimeout(() => setCounter(counter - 1), 1000);
    }

    if (counter === 0) {
      navigate("/");
    }
  }, [openedAlert, user, counter, navigate]);

  return (
    <main>
      <Container>
        <Transition>
          {(styles) => (
            <Alert
              style={styles}
              icon={<AlertCircle size={16} />}
              title="Bạn đã đăng nhập thành công"
              color="teal"
              radius="md"
              mb="xl"
            >
              Trở về trang chủ trong vòng {counter} giây
            </Alert>
          )}
        </Transition>

        <Card style={cardStyle.wrapper} radius="md" shadow="sm" p={0}>
          <Card style={cardStyle.form} radius={0} p={30}>
            <Title order={2} ta="center" mt="md" mb={50}>
              Đăng nhập
            </Title>

            <form>
              <TextInput
                required
                radius="md"
                label="Tên tài khoản"
                placeholder="Nhập tên tài khoản của bạn"
                size="md"
              />

              <PasswordInput
                required
                label="Mật khẩu"
                radius="md"
                placeholder="Nhập mật khẩu của bạn"
                mt="md"
                size="md"
              />

              <Box mt={5}>
                <Anchor component={Link} to="/forgot" size="sm">
                  Quên mật khẩu
                </Anchor>
              </Box>

              <Button type="submit" fullWidth mt="xl" size="md" radius="md">
                Đăng nhập
              </Button>
            </form>

            <Text ta="center" mt="md">
              Không có tài khoản?{" "}
              <Anchor component={Link} to="/signup" fw={700}>
                Đăng kí ngay
              </Anchor>
            </Text>
          </Card>
        </Card>
      </Container>
    </main>
  );
}

export default ClientSignin;
