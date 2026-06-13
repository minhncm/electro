import z from "zod";
import MessageUtils from "~/utils/MessageUtils";

class ClientSignupConfigs {
  static initialFormValuesOfStepOne = {
    username: "",
    password: "",
    fullname: "",
    email: "",
    phone: "",
    gender: "M",
    address: {
      line: "",
      provinceId: null,
      districtId: null,
      wardId: null,
    },
  };
  static formSchemaOfStepOne = z.object({
    username: z.string().min(2, MessageUtils.min("Tên tài khoản", 2)),
    password: z.string().min(8, MessageUtils.min("Mật khẩu", 8)),
    fullname: z.string().min(2, MessageUtils.min("Họ và tên", 2)),
    email: z.email("Email không đúng định dạng"),
    phone: z.string().min(1, "Số điện thoại không được để trống"),
    gender: z.string().min(1, "Giới tính không được để trống"),
    address: z.object({
      line: z.string().min(1, "Đia chỉ không được để trống"),
      provinceId: z.string().min(1, "Tỉnh/Thành Phố không được để trống"),
      districtId: z.string().min(1, "Quận/Huyện không được để trống"),
      wardId: z.string().min(1, "Phướng/Xã không được để trống"),
    }),
  });

  static initialFormValuesOfStepTwo = {
    token: "",
  };

  static formSchemaOfStepTwo = z.object({
    token: z.string().min(1, "Vui lòng không bỏ trống"),
  });
}

export default ClientSignupConfigs;
