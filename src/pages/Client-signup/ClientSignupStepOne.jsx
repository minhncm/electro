import { Button, Card, PasswordInput, Select, Stack, TextInput } from "@mantine/core";

function ClientSignupStepOne({ nextStep }) {
  return (
    <Card withBorder shadow="md" p={30} radius="md" maw={500} m="auto">
      <form>
        <Stack>
          <TextInput required radius="md" label="Tên tài khoản" placeholder="Nhập tên tài khoản mong muốn" />
          <PasswordInput required radius="md" label="Mật khẩu" placeholder="Nhập mật khẩu mong muốn" />
          <TextInput required radius="md" label="Họ và tên" placeholder="Nhập họ và tên của bạn" />
          <TextInput required radius="md" label="Email" placeholder="Nhập email của bạn" />
          <TextInput required radius="md" label="Số điện thoại" placeholder="Nhập số điện thoại của bạn" />
          <Select required radius="md" label="Giới tính" placeholder="Chọn giới tính" />
          <Select required radius="md" label="Tỉnh thành" placeholder="Chọn tỉnh thành" />
          <Select required radius="md" label="Quận huyện" placeholder="Chọn quận huyện" />
          <Select required radius="md" label="Phường xã" placeholder="Chọn phường xã" />
          <TextInput required radius="md" label="Địa chỉ" placeholder="Nhập địa chỉ của bạn" />
          <Button radius="md" type="submit">
            Đăng ký
          </Button>
        </Stack>
      </form>
    </Card>
  );
}

export default ClientSignupStepOne;
