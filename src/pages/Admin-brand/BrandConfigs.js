import { Configs } from "~/types";
import ManagerPath from "~/constants/ManagerPath";
import ResourceUrl from "~/constants/ResourceURL";
import * as PageConfigs from "~/pages/PageConfig";
import ProductConfigs from "~/pages/Admin-product/ProductConfigs";

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
  static initialCreateUpdateFormValues = {};
  static createUpdateFormSchema = {};
}

export default BrandConfigs;
