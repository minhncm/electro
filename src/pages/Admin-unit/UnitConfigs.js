import { Configs } from "~/types";
import ManagerPath from "~/constants/ManagerPath";
import ResourceUrl from "~/constants/ResourceURL";
import * as PageConfigs from "~/pages/PageConfig";
import ProductConfigs from "~/pages/Admin-product/ProductConfigs";
import z from "zod";
import MessageUtils from "~/utils/MessageUtils";

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
  static initialCreateUpdateFormValues = {
    name: "",
    status: "1",
  };
  static createUpdateFormSchema = z.object({
    name: z
      .string()
      .min(2, MessageUtils.min(UnitConfigs.properties.name.label, 2)),
    status: z.string(),
  });
}

export default UnitConfigs;
