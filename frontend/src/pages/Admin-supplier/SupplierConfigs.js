import { Configs } from "~/types";
import ManagerPath from "~/constants/ManagerPath";
import ResourceUrl from "~/constants/ResourceURL";
import * as PageConfigs from "~/pages/PageConfig";
import ProductConfigs from "~/pages/Admin-product/ProductConfigs";
import z from "zod";
import MessageUtils from "~/utils/MessageUtils";

class SupplierConfigs extends Configs {
  static managerPath = ManagerPath.SUPPLIER;
  static resourceUrl = ResourceUrl.SUPPLIER;
  static resourceKey = "suppliers";
  static createTitle = "Thêm nhà cung cấp";
  static updateTitle = "Cập nhật nhà cung cấp";
  static manageTitle = "Quản lý nhà cung cấp";

  static manageTitleLinks = ProductConfigs.manageTitleLinks;

  static _rawProperties = {
    ...PageConfigs.getProperties(true),
    displayName: {
      label: "Tên hiển thị nhà cung cấp",
      isShowInTable: true,
    },
    code: {
      label: "Mã nhà cung cấp",
      isShowInTable: true,
    },
    contactFullname: {
      label: "Họ và tên người liên hệ",
      isShowInTable: true,
    },
    contactEmail: {
      label: "Email người liên hệ",
      isShowInTable: false,
    },
    contactPhone: {
      label: "Số điện thoại người liên hệ",
      isShowInTable: true,
    },
    companyName: {
      label: "Tên công ty",
      isShowInTable: true,
    },
    taxCode: {
      label: "Mã số thuế công ty",
      isShowInTable: false,
    },
    email: {
      label: "Email công ty",
      isShowInTable: false,
    },
    phone: {
      label: "Số điện thoại công ty",
      isShowInTable: false,
    },
    fax: {
      label: "Fax công ty",
      isShowInTable: false,
    },
    website: {
      label: "Website công ty",
      isShowInTable: false,
    },
    "address.line": {
      label: "Địa chỉ công ty",
      isShowInTable: false,
    },
    "address.province.name": {
      label: "Tên tỉnh thành công ty",
      isShowInTable: false,
    },
    "address.district.name": {
      label: "Tên quận huyện công ty",
      isShowInTable: false,
    },
    "address.provinceId": {
      label: "Tỉnh thành công ty",
      isShowInTable: false,
    },
    "address.districtId": {
      label: "Quận huyện công ty",
      isShowInTable: false,
    },
    description: {
      label: "Mô tả công ty",
      isShowInTable: false,
    },
    note: {
      label: "Ghi chú công ty",
      isShowInTable: false,
    },
    status: {
      label: "Trạng thái nhà cung cấp",
      isShowInTable: true,
    },
  };

  static properties = this._rawProperties;
  static initialCreateUpdateFormValues = {
    displayName: "",
    code: "",
    contactFullname: "",
    contactEmail: "",
    contactPhone: "",
    companyName: "",
    taxCode: "",
    email: "",
    phone: "",
    fax: "",
    website: "",
    address: {
      line: "",
      provinceId: null,
      districtId: null,
    },
    description: "",
    note: "",
    status: "1",
  };
  static createUpdateFormSchema = z.object({
    displayName: z
      .string()
      .min(
        2,
        MessageUtils.min(SupplierConfigs.properties.displayName.label, 2),
      ),
    code: z.string(),
    contactFullname: z.string(),
    contactEmail: z.string(),
    contactPhone: z.string(),
    companyName: z.string(),
    taxCode: z.string(),
    email: z.string(),
    phone: z.string(),
    fax: z.string(),
    website: z.string(),
    address: z.object({
      line: z.string(),
      provinceId: z.string().nullable(),
      districtId: z.string().nullable(),
    }),
    description: z.string(),
    note: z.string(),
    status: z.string(),
  });
}

export default SupplierConfigs;
