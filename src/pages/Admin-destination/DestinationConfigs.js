import ManagerPath from "~/constants/ManagerPath";
import ResourceUrl from "~/constants/ResourceURL";
import * as PageConfigs from "~/pages/PageConfig";
import { Configs } from "~/types";
import WarehouseConfigs from "~/pages/Admin-warehouse/WarehouseConfigs";
import z from "zod";

class DestinationConfigs extends Configs {
  static managerPath = ManagerPath.DESTINATION;
  static resourceUrl = ResourceUrl.DESTINATION;
  static resourceKey = "destinations";
  static createTitle = "Thêm điểm nhập hàng";
  static updateTitle = "Cập nhật điểm nhập hàng";
  static manageTitle = "Quản lý điểm nhập hàng";

  static manageTitleLinks = WarehouseConfigs.manageTitleLinks;

  static _rawProperties = {
    ...PageConfigs.getProperties(true, true, true),
    contactFullname: {
      label: "Họ và tên người liên hệ",
      isShowInTable: false,
    },
    contactEmail: {
      label: "Email người liên hệ",
      isShowInTable: false,
    },
    contactPhone: {
      label: "Số điện thoại người liên hệ",
      isShowInTable: false,
    },
    "address.line": {
      label: "Địa chỉ",
      isShowInTable: true,
    },
    "address.province.name": {
      label: "Tên tỉnh thành",
      isShowInTable: true,
    },
    "address.district.name": {
      label: "Tên quận huyện",
      isShowInTable: true,
    },
    status: {
      label: "Trạng thái điểm nhập hàng",
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
    contactFullname: "",
    contactEmail: "",
    contactPhone: "",
    address: {
      line: "",
      provinceId: null,
      districtId: null,
    },
    status: "1",
  };
  static createUpdateFormSchema = z.object({
    contactFullname: z.string(),
    contactEmail: z.string(),
    contactPhone: z.string(),
    address: z.object({
      line: z.string(),
      provinceId: z.string(),
      districtId: z.string(),
    }),
    status: z.string(),
  });
}

export default DestinationConfigs;
