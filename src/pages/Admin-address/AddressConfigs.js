import { Configs } from "~/types";
import ManagerPath from "~/constants/ManagerPath";
import ResourceUrl from "~/constants/ResourceURL";
import * as PageConfig from "~/pages/PageConfig";

class AddressConfigs extends Configs {
  static managerPath = ManagerPath.ADDRESS;
  static resourceUrl = ResourceUrl.ADDRESS;
  static resourceKey = "addresses";
  static createTitle = "Thêm địa chỉ";
  static updateTitle = "Cập nhật địa chỉ";
  static manageTitle = "Quản lý địa chỉ";

  static manageTitleLinks = [
    { link: ManagerPath.ADDRESS, label: "Quản lý địa chỉ" },
    { link: ManagerPath.PROVINCE, label: "Quản lý tỉnh thành" },
    { link: ManagerPath.DISTRICT, label: "Quản lý quận huyện" },
  ];

  static _rawProperties = {
    ...PageConfig.getProperties(true, true, true),
    line: {
      label: "Địa chỉ",
      isShowInTable: true,
    },
    provinceName: {
      label: "Tên tỉnh thành",
      isShowInTable: true,
    },
    "province.code": {
      label: "Mã tỉnh thành",
      isShowInTable: false,
    },
    provinceId: {
      label: "Tỉnh thành",
      isShowInTable: false,
    },
    districtName: {
      label: "Tên quận huyện",
      isShowInTable: true,
    },
    "district.code": {
      label: "Mã tỉnh thành",
      isShowInTable: false,
    },
    districtId: {
      label: "Quận huyện",
      isShowInTable: false,
    },
  };

  static properties = this._rawProperties;
  static initialCreateUpdateFormValues = {};
  static createUpdateFormSchema = {};
}

export default AddressConfigs;
