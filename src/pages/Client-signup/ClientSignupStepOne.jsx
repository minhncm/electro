import {
  Button,
  Card,
  PasswordInput,
  Select,
  Stack,
  TextInput,
} from "@mantine/core";
import useClientSignupStepOneViewModel from "./ClientSignupStepOne.vm";

function ClientSignupStepOne({ nextStep }) {
  const {
    form,
    provinceSelectList,
    districtSelectList,
    wardSelectList,
    genderSelectList,
    handleFormSubmit,
  } = useClientSignupStepOneViewModel(nextStep);

  return (
    <Card withBorder shadow="md" p={30} radius="md" maw={500} m="auto">
      <form onSubmit={handleFormSubmit}>
        <Stack>
          <TextInput
            key={form.key("username")}
            {...form.getInputProps("username")}
            required
            radius="md"
            label="Tên tài khoản"
            placeholder="Nhập tên tài khoản mong muốn"
          />
          <PasswordInput
            key={form.key("password")}
            required
            radius="md"
            label="Mật khẩu"
            placeholder="Nhập mật khẩu mong muốn"
            {...form.getInputProps("password")}
          />
          <TextInput
            key={form.key("fullname")}
            required
            radius="md"
            label="Họ và tên"
            placeholder="Nhập họ và tên của bạn"
            {...form.getInputProps("fullname")}
          />
          <TextInput
            key={form.key("email")}
            required
            radius="md"
            label="Email"
            placeholder="Nhập email của bạn"
            {...form.getInputProps("email")}
          />
          <TextInput
            key={form.key("phone")}
            required
            radius="md"
            label="Số điện thoại"
            placeholder="Nhập số điện thoại của bạn"
            {...form.getInputProps("phone")}
          />
          <Select
            key={form.key("gender")}
            required
            radius="md"
            label="Giới tính"
            placeholder="Chọn giới tính"
            {...form.getInputProps("gender")}
            data={genderSelectList}
          />
          <Select
            key={form.key("address.provinceId")}
            required
            radius="md"
            label="Tỉnh thành"
            placeholder="Chọn tỉnh thành"
            {...form.getInputProps("address.provinceId")}
            data={provinceSelectList}
          />
          <Select
            key={form.key("address.districtId")}
            required
            radius="md"
            label="Quận huyện"
            placeholder="Chọn quận huyện"
            {...form.getInputProps("address.districtId")}
            data={districtSelectList}
          />
          <Select
            key={form.key("address.wardId")}
            required
            radius="md"
            label="Phường xã"
            placeholder="Chọn phường xã"
            {...form.getInputProps("address.wardId")}
            data={wardSelectList}
          />
          <TextInput
            key={form.key("address.line")}
            required
            radius="md"
            label="Địa chỉ"
            placeholder="Nhập địa chỉ của bạn"
            {...form.getInputProps("address.line")}
          />
          <Button radius="md" type="submit">
            Đăng ký
          </Button>
        </Stack>
      </form>
    </Card>
  );
}

export default ClientSignupStepOne;
