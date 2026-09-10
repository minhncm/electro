import ManagerPath from "~/constants/ManagerPath";
import ResourceUrl from "~/constants/ResourceURL";
import { Configs } from "~/types";
import AddressConfigs from "~/pages/Admin-address/AddressConfigs";
import * as PageConfigs from "~/pages/PageConfig";
import z from "zod";
import MessageUtils from "~/utils/MessageUtils";

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
  static initialCreateUpdateFormValues = {
    name: "",
    code: "",
    provinceId: null,
  };
  static createUpdateFormSchema = z.object({
    name: z
      .string()
      .min(2, MessageUtils.min(DistrictConfigs.properties.name.label, 2)),
    code: z
      .string()
      .max(35, MessageUtils.max(DistrictConfigs.properties.code.label, 35)),
    provinceId: z.string(),
  });
}

export default DistrictConfigs;
