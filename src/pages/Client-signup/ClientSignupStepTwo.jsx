import { Button, Card, Divider, Stack, TextInput } from "@mantine/core";
import useClientSignupStepTwoViewModel from "./ClientSignupStepTwo.vm";

function ClientSignupStepTwo({ nextStep }) {
  const { form, handleFormSubmit, handleResendTokenButton } =
    useClientSignupStepTwoViewModel(nextStep);
  return (
    <Card withBorder shadow="md" p={30} radius="md" w={500} m="auto">
      <Stack>
        <form onSubmit={handleFormSubmit}>
          <Stack>
            <TextInput
              key={form.key("token")}
              required
              radius="md"
              label="Mã xác nhận"
              placeholder="Nhập mã xác nhận đã gửi"
              {...form.getInputProps("token")}
            />
            <Button radius="md" type="submit">
              Xác nhận
            </Button>
          </Stack>
        </form>

        <Divider label="hoặc" labelPosition="center" />

        <Button radius="md" variant="outline" onClick={handleResendTokenButton}>
          Gửi mã xác nhận lần nữa
        </Button>

        <Button radius="md" variant="outline">
          Gửi mã xác nhận lần nữa với email mới
        </Button>
      </Stack>
    </Card>
  );
}

export default ClientSignupStepTwo;
