import { Configs } from "~/types";
import * as PageConfigs from "~/pages/PageConfig";
import EmployeeConfigs from "~/pages/Admin-employee/EmployeeConfigs";
import ManagerPath from "~/constants/ManagerPath";
import ResourceUrl from "~/constants/ResourceURL";
import z from "zod";
import MessageUtils from "~/utils/MessageUtils";

class OfficeConfigs extends Configs {
  static managerPath = ManagerPath.OFFICE;
  static resourceUrl = ResourceUrl.OFFICE;
  static resourceKey = "offices";
  static createTitle = "Thêm văn phòng";
  static updateTitle = "Cập nhật văn phòng";
  static manageTitle = "Quản lý văn phòng";

  static manageTitleLinks = EmployeeConfigs.manageTitleLinks;

  static _rawProperties = {
    ...PageConfigs.getProperties(true, true, true),
    name: {
      label: "Tên văn phòng",
      isShowInTable: true,
    },
    "address.line": {
      label: "Địa chỉ",
      isShowInTable: true,
    },
    "address.province.name": {
      label: "Tên tỉnh thành",
      isShowInTable: true,
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
    status: {
      label: "Trạng thái văn phòng",
      isShowInTable: true,
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
    name: "",
    address: {
      line: "",
      provinceId: null,
      districtId: null,
    },
    status: "1",
  };
  static createUpdateFormSchema = z.object({
    name: z
      .string()
      .min(2, MessageUtils.min(OfficeConfigs.properties.name.label, 2)),
    address: z.object({
      line: z.string(),
      provinceId: z.string(),
      districtId: z.string(),
    }),
  });
}

export default OfficeConfigs;
