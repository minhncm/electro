import ManagerPath from "~/constants/ManagerPath";
import ResourceUrl from "~/constants/ResourceURL";
import { Configs } from "~/types";
import AddressConfigs from "~/pages/Admin-address/AddressConfigs";
import * as PageConfigs from "~/pages/PageConfig";

class ProvinceConfigs extends Configs {
  static managerPath = ManagerPath.PROVINCE;
  static resourceUrl = ResourceUrl.PROVINCE;
  static resourceKey = "provinces";
  static createTitle = "Thêm tỉnh thành";
  static updateTitle = "Cập nhật tỉnh thành";
  static manageTitle = "Quản lý tỉnh thành";

  static manageTitleLinks = AddressConfigs.manageTitleLinks;
  static _rawProperties = {
    ...PageConfigs.getProperties(true, true, true),
    name: {
      label: "Tên tỉnh thành",
      isShowInTable: true,
    },
    code: {
      label: "Mã tỉnh thành",
      isShowInTable: true,
    },
  };

  static properties = this._rawProperties;
  static initialCreateUpdateFormValues = {};
  static createUpdateFormSchema = {};
}

export default ProvinceConfigs;
