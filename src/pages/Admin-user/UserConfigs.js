import ManagerPath from "~/constants/ManagerPath";
import ResourceUrl from "~/constants/ResourceURL";
import { Configs } from "~/types";
import * as PageConfigs from "~/pages/PageConfig";
import z from "zod";
import MessageUtils from "~/utils/MessageUtils";

class UserConfigs extends Configs {
  static managerPath = ManagerPath.USER;
  static resourceUrl = ResourceUrl.USER;
  static resourceKey = "users";
  static createTitle = "Thêm người dùng";
  static updateTitle = "Cập nhật người dùng";
  static manageTitle = "Quản lý người dùng";

  static manageTitleLinks = [
    {
      link: ManagerPath.USER,
      label: "Quản lý người dùng",
    },
    {
      link: ManagerPath.ROLE,
      label: "Quản lý quyền",
    },
  ];
  static _rawProperties = {
    ...PageConfigs.getProperties(true),
    username: {
      label: "Tên đăng nhập",
      isShowInTable: true,
    },
    fullname: {
      label: "Họ và tên",
      isShowInTable: true,
    },
    email: {
      label: "Email",
      isShowInTable: false,
    },
    phone: {
      label: "Số điện thoại",
      isShowInTable: true,
    },
    gender: {
      label: "Giới tính",
      isShowInTable: true,
    },
    "address.line": {
      label: "Địa chỉ",
      isShowInTable: false,
    },
    "address.province.name": {
      label: "Tên tỉnh thành",
      isShowInTable: false,
    },
    "address.province.code": {
      label: "Mã tỉnh thành",
      isShowInTable: false,
    },
    "address.district.name": {
      label: "Tên quận huyện",
      isShowInTable: false,
    },
    "address.district.code": {
      label: "Mã quận huyện",
      isShowInTable: false,
    },
    avatar: {
      label: "Ảnh đại diện",
      isShowInTable: true,
    },
    status: {
      label: "Trạng thái người dùng",
      isShowInTable: true,
    },
    roles: {
      label: "Quyền người dùng",
      isShowInTable: true,
    },
    password: {
      label: "Mật khẩu",
      isShowInTable: false,
    },
    "address.provinceId": {
      label: "Tỉnh thành",
      isShowInTable: false,
    },
    "address.districtId": {
      label: "Quận huyện",
      isShowInTable: false,
    },
  };

  static properties = this._rawProperties;
  static initialCreateUpdateFormValues = {
    username: "",
    password: "",
    fullname: "",
    email: "",
    phone: "",
    gender: "M" | "F",
    address: {
      line: "",
      provinceId: null,
      districtId: null,
    },
    avatar: "",
    status: "1",
    roles: [],
  };
  static createUpdateFormSchema = z.object({
    username: z
      .string()
      .min(2, MessageUtils.min(UserConfigs.properties.username.label, 2)),
    password: z.string(),
    fullname: z.string(),
    email: z.email(),
    phone: z.string(),
    gender: z.string(),
    address: z.object({
      line: z.string(),
      provinceId: z.string(),
      districtId: z.string(),
    }),
    avatar: z.string(),
    status: z.string(),
    roles: z.array(z.string()).nonempty(),
  });
}

export default UserConfigs;
