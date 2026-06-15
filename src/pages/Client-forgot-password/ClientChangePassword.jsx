import {
  Button,
  Card,
  Container,
  PasswordInput,
  Stack,
  Title,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { zodResolver } from "mantine-form-zod-resolver";
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import z from "zod";
import { useResetPasswordApi } from "~/hooks/client/use-auth-api";
import MessageUtils from "~/utils/MessageUtils";
import MiscUtils from "~/utils/MiscUtils";
import NotifyUtils from "~/utils/NotifyUtils";

function ClientChangePassword() {
  const [searchParams] = useSearchParams();

  const token = searchParams.get("token");
  const email = searchParams.get("email");

  const navigate = useNavigate();

  useEffect(() => {
    if (!token || !email) {
      navigate("/");
    }
  }, [email, navigate, token]);

  const formSchema = z.object({
    newPassword: z.string().min(1, MessageUtils.min("Mật khẩu", 1)),
    newPasswordAgain: z.string().min(1, MessageUtils.min("Mật khẩu", 1)),
  });

  const initialFormValues = {
    newPassword: "",
    newPasswordAgain: "",
  };

  const form = useForm({
    initialValues: initialFormValues,
    schema: zodResolver(formSchema),
  });

  const resetPasswordApi = useResetPasswordApi();

  const handleFormSubmit = form.onSubmit((formValues) => {
    if (formValues.newPassword !== formValues.newPasswordAgain) {
      form.setFieldError("newPasswordAgain", "Mật khẩu không trùng khớp");
    } else if (token && email) {
      const requestBody = {
        token: token,
        email: email,
        password: formValues.newPassword,
      };

      resetPasswordApi.mutate(requestBody, {
        onSuccess: () => {
          NotifyUtils.simpleSuccess("Đổi mật khẩu mới thành công");
        },
        onError: () =>
          NotifyUtils.simpleFailed("Đổi mật khẩu không thành công"),
      });
    }
  });
  return (
    <main>
      <Container size="xl">
        <Stack align="center">
          <Title order={2}>Đổi mật khẩu</Title>

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
                <PasswordInput
                  required
                  radius="md"
                  label="Mật khẩu mới"
                  placeholder="Nhập mật khẩu mới"
                  {...form.getInputProps("newPassword")}
                />
                <PasswordInput
                  required
                  radius="md"
                  label="Nhập lại mật khẩu mới"
                  placeholder="Nhập lại mật khẩu mới"
                  {...form.getInputProps("newPasswordAgain")}
                />
                <Button
                  radius="md"
                  type="submit"
                  disabled={MiscUtils.isEqual(initialFormValues, form.values)}
                >
                  Đổi mật khẩu
                </Button>
              </Stack>
            </form>
          </Card>
        </Stack>
      </Container>
    </main>
  );
}

export default ClientChangePassword;
