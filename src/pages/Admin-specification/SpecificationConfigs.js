import { Configs } from "~/types";
import ManagerPath from "~/constants/ManagerPath";
import ResourceUrl from "~/constants/ResourceURL";
import * as PageConfigs from "~/pages/PageConfig";
import ProductConfigs from "~/pages/Admin-product/ProductConfigs";

class SpecificationConfigs extends Configs {
  static managerPath = ManagerPath.SPECIFICATION;
  static resourceUrl = ResourceUrl.SPECIFICATION;
  static resourceKey = "specifications";
  static createTitle = "Thêm thông số sản phẩm";
  static updateTitle = "Cập nhật thông số sản phẩm";
  static manageTitle = "Quản lý thông số sản phẩm";

  static manageTitleLinks = ProductConfigs.manageTitleLinks;

  static _rawProperties = {
    ...PageConfigs.getProperties(true, true, true),
    name: {
      label: "Tên thông số sản phẩm",
      isShowInTable: true,
    },
    code: {
      label: "Mã thông số sản phẩm",
      isShowInTable: true,
    },
    description: {
      label: "Mô tả thông số sản phẩm",
      isShowInTable: false,
    },
    status: {
      label: "Trạng thái thông số sản phẩm",
      isShowInTable: true,
    },
  };

  static properties = this._rawProperties;
  static initialCreateUpdateFormValues = {};
  static createUpdateFormSchema = {};
}

export default SpecificationConfigs;
