import { Configs } from "~/types";
import ManagerPath from "~/constants/ManagerPath";
import ResourceUrl from "~/constants/ResourceURL";
import * as PageConfigs from "~/pages/PageConfig";
import ProductConfigs from "~/pages/Admin-product/ProductConfigs";

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
  static initialCreateUpdateFormValues = {};
  static createUpdateFormSchema = {};
}

export default PropertyConfigs;
