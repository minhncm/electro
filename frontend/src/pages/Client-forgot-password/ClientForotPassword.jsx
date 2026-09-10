import {
  Button,
  Card,
  Container,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { zodResolver } from "mantine-form-zod-resolver";
import z from "zod";
import { useForgotPasswordApi } from "~/hooks/client/use-auth-api";
import MiscUtils from "~/utils/MiscUtils";
import NotifyUtils from "~/utils/NotifyUtils";

function ClientForgotPassword() {
  const initialFormValues = {
    email: "",
  };

  const formSchema = z.object({
    email: z.email("Email không hợp lệ"),
  });

  const form = useForm({
    initialValues: initialFormValues,
    schema: zodResolver(formSchema),
  });

  const forgotPasswordApi = useForgotPasswordApi();

  const handleFormSubmit = form.onSubmit((formValues) => {
    forgotPasswordApi.mutate(
      { email: formValues.email },
      {
        onSuccess: () =>
          NotifyUtils.simpleSuccess("Đã gửi email đổi mật khẩu thành công"),
        onError: () => NotifyUtils.simpleFailed("Gửi email không thành công"),
      },
    );
  });

  return (
    <main>
      <Container size="md">
        <Stack align="center">
          <Title order={2}>Yêu cầu cấp lại mật khẩu</Title>

          <Text size="sm" c="dimmed">
            Nhập email của bạn để nhận thư chứa đường dẫn thay đổi mật khẩu
          </Text>

          <Card
            withBorder
            shadow="md"
            mt={20}
            p={30}
            radius="md"
            style={{ width: "100%", maxWidth: 400 }}
          >
            <form onSubmit={handleFormSubmit}>
              <Stack>
                <TextInput
                  required
                  radius="md"
                  label="Email"
                  placeholder="Nhập email của bạn"
                  {...form.getInputProps("email")}
                />
                <Button
                  radius="md"
                  type="submit"
                  disabled={MiscUtils.isEqual(initialFormValues, form.values)}
                >
                  Yêu cầu
                </Button>
              </Stack>
            </form>
          </Card>
        </Stack>
      </Container>
    </main>
  );
}

export default ClientForgotPassword;
