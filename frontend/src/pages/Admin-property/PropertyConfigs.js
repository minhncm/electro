import { Configs } from "~/types";
import ManagerPath from "~/constants/ManagerPath";
import ResourceUrl from "~/constants/ResourceURL";
import * as PageConfigs from "~/pages/PageConfig";
import ProductConfigs from "~/pages/Admin-product/ProductConfigs";
import z from "zod";
import MessageUtils from "~/utils/MessageUtils";

class PropertyConfigs extends Configs {
  static managerPath = ManagerPath.PROPERTY;
  static resourceUrl = ResourceUrl.PROPERTY;
  static resourceKey = "properties";
  static createTitle = "Thêm thuộc tính sản phẩm";
  static updateTitle = "Cập nhật thuộc tính sản phẩm";
  static manageTitle = "Quản lý thuộc tính sản phẩm";

  static manageTitleLinks = ProductConfigs.manageTitleLinks;

  static _rawProperties = {
    ...PageConfigs.getProperties(true, true, true),
    name: {
      label: "Tên thuộc tính sản phẩm",
      isShowInTable: true,
    },
    code: {
      label: "Mã thuộc tính sản phẩm",
      isShowInTable: true,
    },
    description: {
      label: "Mô tả thuộc tính sản phẩm",
      isShowInTable: false,
    },
    status: {
      label: "Trạng thái thuộc tính sản phẩm",
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
      .min(2, MessageUtils.min(PropertyConfigs.properties.name.label, 2)),
    code: z.string(),
    description: z.string(),
    status: z.string(),
  });
}

export default PropertyConfigs;
