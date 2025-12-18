import ManagerPath from "~/constants/ManagerPath";
import ResourceUrl from "~/constants/ResourceURL";
import { Configs } from "~/types";
import AddressConfigs from "~/pages/Admin-address/AddressConfigs";
import * as PageConfigs from "~/pages/PageConfig";

class DistrictConfigs extends Configs {
  static managerPath = ManagerPath.DISTRICT;
  static resourceUrl = ResourceUrl.DISTRICT;
  static resourceKey = "districts";
  static createTitle = "Thêm quận huyện";
  static updateTitle = "Cập nhật quận huyện";
  static manageTitle = "Quản lý quận huyện";

  static manageTitleLinks = AddressConfigs.manageTitleLinks;
  static _rawProperties = {
    ...PageConfigs.getProperties(true, true, true),
    name: {
      label: "Tên quận huyện",
      isShowInTable: true,
    },
    code: {
      label: "Mã quận huyện",
      isShowInTable: true,
    },
    "province.name": {
      label: "Tên tỉnh thành",
      isShowInTable: true,
    },
    "province.code": {
      label: "Mã tỉnh thành",
      isShowInTable: true,
    },
    provinceId: {
      label: "Tỉnh thành",
    },
  };
  static properties = this._rawProperties;
  static initialCreateUpdateFormValues = {};
  static createUpdateFormSchema = {};
}

export default DistrictConfigs;
