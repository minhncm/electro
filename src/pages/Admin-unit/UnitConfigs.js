import { Configs } from "~/types";
import ManagerPath from "~/constants/ManagerPath";
import ResourceUrl from "~/constants/ResourceURL";
import * as PageConfigs from "~/pages/PageConfig";
import ProductConfigs from "~/pages/Admin-product/ProductConfigs";

class UnitConfigs extends Configs {
  static managerPath = ManagerPath.UNIT;
  static resourceUrl = ResourceUrl.UNIT;
  static resourceKey = "units";
  static createTitle = "Thêm đơn vị tính";
  static updateTitle = "Cập nhật đơn vị tính";
  static manageTitle = "Quản lý đơn vị tính";

  static manageTitleLinks = ProductConfigs.manageTitleLinks;

  static _rawProperties = {
    ...PageConfigs.getProperties(true, true, true),
    name: {
      label: "Tên đơn vị tính",
      isShowInTable: true,
    },
    status: {
      label: "Trạng thái đơn vị tính",
      isShowInTable: true,
    },
  };

  static properties = this._rawProperties;
  static initialCreateUpdateFormValues = {};
  static createUpdateFormSchema = {};
}

export default UnitConfigs;
