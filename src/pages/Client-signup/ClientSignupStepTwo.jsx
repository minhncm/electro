import { Button, Card, Divider, Stack, TextInput } from "@mantine/core";

function ClientSignupStepTwo({ nextStep }) {
  return (
    <Card withBorder shadow="md" p={30} radius="md" w={500} m="auto">
      <Stack>
        <form>
          <Stack>
            <TextInput required radius="md" label="Mã xác nhận" placeholder="Nhập mã xác nhận đã gửi" />
            <Button radius="md" type="submit">
              Xác nhận
            </Button>
          </Stack>
        </form>

        <Divider label="hoặc" labelPosition="center" />

        <Button radius="md" variant="outline">
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
