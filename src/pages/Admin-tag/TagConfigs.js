import { Configs } from "~/types";
import ManagerPath from "~/constants/ManagerPath";
import ResourceUrl from "~/constants/ResourceURL";
import * as PageConfigs from "~/pages/PageConfig";
import ProductConfigs from "~/pages/Admin-product/ProductConfigs";

class TagConfigs extends Configs {
  static managerPath = ManagerPath.TAG;
  static resourceUrl = ResourceUrl.TAG;
  static resourceKey = "tags";
  static createTitle = "Thêm tag";
  static updateTitle = "Cập nhật tag";
  static manageTitle = "Quản lý tag";

  static manageTitleLinks = ProductConfigs.manageTitleLinks;

  static _rawProperties = {
    ...PageConfigs.getProperties(true, true, true),
    name: {
      label: "Tên đơn vị tính",
      isShowInTable: true,
    },
    slug: {
      label: "Slug tag",
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

export default TagConfigs;
