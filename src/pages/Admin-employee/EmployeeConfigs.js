import ManagerPath from "~/constants/ManagerPath";
import ResourceUrl from "~/constants/ResourceURL";
import { Configs } from "~/types";
import * as PageConfigs from "~/pages/PageConfig";
import z from "zod";
import MessageUtils from "~/utils/MessageUtils";

class EmployeeConfigs extends Configs {
  static managerPath = ManagerPath.EMPLOYEE;
  static resourceUrl = ResourceUrl.EMPLOYEE;
  static resourceKey = "employees";
  static createTitle = "Thêm nhân viên";
  static updateTitle = "Cập nhật nhân viên";
  static manageTitle = "Quản lý nhân viên";

  static EMPLOYEE_ROLE_ID = 2;

  static manageTitleLinks = [
    { link: ManagerPath.EMPLOYEE, label: "Quản lý nhân viên" },
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
      isShowInTable: false,
    },
    "user.gender": {
      label: "Giới tính",
      isShowInTable: false,
    },
    "user.address.line": {
      label: "Địa chỉ",
      isShowInTable: false,
    },
    "user.address.province.name": {
      label: "Tên tỉnh thành",
      isShowInTable: false,
    },
    "user.address.province.code": {
      label: "Mã tỉnh thành",
      isShowInTable: false,
    },
    "user.address.district.name": {
      label: "Tên quận huyện",
      isShowInTable: false,
    },
    "user.address.district.code": {
      label: "Mã quận huyện",
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

    "office.name": {
      label: "Tên văn phòng",
      isShowInTable: true,
    },
    "office.address.line": {
      label: "Địa chỉ văn phòng",
      isShowInTable: false,
    },
    "office.address.province.name": {
      label: "Tên tỉnh thành văn phòng",
      isShowInTable: false,
    },
    "office.address.province.code": {
      label: "Mã tỉnh thành văn phòng",
      isShowInTable: false,
    },
    "office.address.district.name": {
      label: "Tên quận huyện văn phòng",
      isShowInTable: false,
    },
    "office.address.district.code": {
      label: "Mã quận huyện văn phòng",
      isShowInTable: false,
    },
    "office.status": {
      label: "Trạng thái văn phòng",
      isShowInTable: false,
    },
    officeId: {
      label: "Văn phòng",
      isShowInTable: false,
    },
    "department.name": {
      label: "Tên phòng ban",
      isShowInTable: true,
    },
    "department.status": {
      label: "Trạng thái phòng ban",
      isShowInTable: false,
    },
    departmentId: {
      label: "Phòng ban",
      isShowInTable: false,
    },
    "jobType.name": {
      label: "Tên loại hình công việc",
      isShowInTable: true,
    },
    "jobType.status": {
      label: "Trạng thái loại hình công việc",
      isShowInTable: false,
    },
    jobTypeId: {
      label: "Loại hình công việc",
      isShowInTable: false,
    },
    "jobLevel.name": {
      label: "Tên cấp bậc công việc",
      isShowInTable: true,
    },
    "jobLevel.status": {
      label: "Trạng thái cấp bậc công việc",
      isShowInTable: false,
    },
    jobLevelId: {
      label: "Cấp bậc công việc",
      isShowInTable: false,
    },
    "jobTitle.name": {
      label: "Tên chức danh công việc",
      isShowInTable: true,
    },
    "jobTitle.status": {
      label: "Trạng thái chức danh công việc",
      isShowInTable: false,
    },
    jobTitleId: {
      label: "Chức danh công việc",
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
        provinceId: null,
        districtId: null,
      },
      avatar: "",
      status: "1",
      roles: [String(EmployeeConfigs.EMPLOYEE_ROLE_ID)],
    },
    officeId: null,
    departmentId: null,
    jobTypeId: null,
    jobLevelId: null,
    jobTitleId: null,
  };
  static createUpdateFormSchema = z.object({
    user: z.object({
      username: z
        .string()
        .min(
          2,
          MessageUtils.min(
            EmployeeConfigs.properties["user.username"].label,
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
        provinceId: z.string(),
        districtId: z.string(),
      }),
      avatar: z.string(),
      status: z.string(),
      roles: z.array(z.string()).nonempty(),
    }),
    officeId: z.string(),
    departmentId: z.string(),
    jobTypeId: z.string(),
    jobLevelId: z.string(),
    jobTitleId: z.string(),
  });
}

export default EmployeeConfigs;
