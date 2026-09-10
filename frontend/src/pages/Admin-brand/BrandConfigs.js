import { Configs } from "~/types";
import ManagerPath from "~/constants/ManagerPath";
import ResourceUrl from "~/constants/ResourceURL";
import * as PageConfigs from "~/pages/PageConfig";
import ProductConfigs from "~/pages/Admin-product/ProductConfigs";
import z from "zod";
import MessageUtils from "~/utils/MessageUtils";

class BrandConfigs extends Configs {
  static managerPath = ManagerPath.BRAND;
  static resourceUrl = ResourceUrl.BRAND;
  static resourceKey = "brands";
  static createTitle = "Thêm nhãn hiệu";
  static updateTitle = "Cập nhật nhãn hiệu";
  static manageTitle = "Quản lý nhãn hiệu";

  static manageTitleLinks = ProductConfigs.manageTitleLinks;

  static _rawProperties = {
    ...PageConfigs.getProperties(true, true, true),
    name: {
      label: "Tên nhãn hiệu",
      isShowInTable: true,
    },
    code: {
      label: "Mã nhãn hiệu",
      isShowInTable: true,
    },
    description: {
      label: "Mô tả nhãn hiệu",
      isShowInTable: false,
    },
    status: {
      label: "Trạng thái nhãn hiệu",
      isShowInTable: true,
    },
  };

  static properties = this._rawProperties;
  static initialCreateUpdateFormValues = {
    name: "",
    code: "",
    description: "",
    status: "1",
  };
  static createUpdateFormSchema = z.object({
    name: z
      .string()
      .min(2, MessageUtils.min(BrandConfigs.properties.name.label, 2)),
    code: z.string(),
    description: z.string(),
    status: z.string(),
  });
}

export default BrandConfigs;
