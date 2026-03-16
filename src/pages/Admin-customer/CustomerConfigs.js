import ManagerPath from "~/constants/ManagerPath";
import ResourceUrl from "~/constants/ResourceURL";
import { Configs } from "~/types";
import * as PageConfigs from "~/pages/PageConfig";
import z from "zod";
import MessageUtils from "~/utils/MessageUtils";

class CustomerConfigs extends Configs {
  static managerPath = ManagerPath.CUSTOMER;
  static resourceUrl = ResourceUrl.CUSTOMER;
  static resourceKey = "customers";
  static createTitle = "Thêm người dùng";
  static updateTitle = "Cập nhật người dùng";
  static manageTitle = "Quản lý người dùng";

  static CUSTOMER_ROLE_ID = 3;

  static manageTitleLinks = [
    {
      link: ManagerPath.CUSTOMER,
      label: "Quản lý khách hàng",
    },
    {
      link: ManagerPath.CUSTOMER_GROUP,
      label: "Quản lý nhóm khách hàng",
    },
    {
      link: ManagerPath.CUSTOMER_STATUS,
      label: "Quản lý trạng thái khách hàng",
    },
    {
      link: ManagerPath.CUSTOMER_RESOURCE,
      label: "Quản lý nguồn khách hàng",
    },
  ];
  static _rawProperties = {
    ...PageConfigs.getProperties(true),
    "user.username": {
      label: "Tên đăng nhập",
      isShowInTable: false,
    },
    "user.fullname": {
      label: "Họ và tên",
      isShowInTable: true,
    },
    "user.email": {
      label: "Email",
      isShowInTable: false,
    },
    "user.phone": {
      label: "Số điện thoại",
      isShowInTable: true,
    },
    "user.gender": {
      label: "Giới tính",
      isShowInTable: false,
    },
    "user.address.line": {
      label: "Địa chỉ khách hàng",
      isShowInTable: false,
    },
    "user.address.province.name": {
      label: "Tên tỉnh thành khách hàng",
      isShowInTable: false,
    },
    "user.address.province.code": {
      label: "Mã tỉnh thành khách hàng",
      isShowInTable: false,
    },
    "user.address.district.name": {
      label: "Tên quận huyện khách hàng",
      isShowInTable: false,
    },
    "user.address.district.code": {
      label: "Mã quận huyện khách hàng",
      isShowInTable: false,
    },
    "user.avatar": {
      label: "Ảnh đại diện",
      isShowInTable: true,
    },
    "user.status": {
      label: "Trạng thái người dùng",
      isShowInTable: false,
    },
    "user.roles": {
      label: "Quyền người dùng",
      isShowInTable: false,
    },
    "user.password": {
      label: "Mật khẩu",
      isShowInTable: false,
    },
    "user.address.provinceId": {
      label: "Tỉnh thành",
      isShowInTable: false,
    },
    "user.address.districtId": {
      label: "Quận huyện",
      isShowInTable: false,
    },
    "customerGroup.name": {
      label: "Tên nhóm khách hàng",
      isShowInTable: true,
    },
    customerGroupId: {
      label: "Nhóm khách hàng",
      isShowInTable: false,
    },
    "customerStatus.name": {
      label: "Tên trạng thái khách hàng",
      isShowInTable: true,
    },
    customerStatusId: {
      label: "Trạng thái khách hàng",
      isShowInTable: false,
    },
    "customerResource.name": {
      label: "Tên nguồn khách hàng",
      isShowInTable: true,
    },
    customerResourceId: {
      label: "Nguồn khách hàng",
      isShowInTable: false,
    },
  };

  static properties = this._rawProperties;
  static initialCreateUpdateFormValues = {
    user: {
      username: "",
      password: "",
      fullname: "",
      email: "",
      phone: "",
      gender: "M" | "F",
      address: {
        line: "",
        districtId: null,
        provinceId: null,
      },
      avatar: "",
      status: "1",
      roles: [String(CustomerConfigs.CUSTOMER_ROLE_ID)],
    },
    customerGroupId: null,
    customerResourceId: null,
    customerStatusId: null,
  };
  static createUpdateFormSchema = z.object({
    user: z.object({
      username: z
        .string()
        .min(
          2,
          MessageUtils.min(
            CustomerConfigs.properties["user.username"].label,
            2,
          ),
        ),
      password: z.string(),
      fullname: z.string(),
      email: z.string(),
      phone: z.string(),
      gender: z.string(),
      address: z.object({
        line: z.string(),
        districtId: z.string(),
        provinceId: z.string(),
      }),
      avatar: z.string(),
      status: z.string(),
      roles: z.array(z.string()).nonempty(),
    }),
    customerGroupId: z.string(),
    customerResourceId: z.string(),
    customerStatusId: z.string(),
  });
}

export default CustomerConfigs;
