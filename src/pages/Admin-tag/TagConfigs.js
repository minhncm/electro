import { Configs } from "~/types";
import ManagerPath from "~/constants/ManagerPath";
import ResourceUrl from "~/constants/ResourceURL";
import * as PageConfigs from "~/pages/PageConfig";
import ProductConfigs from "~/pages/Admin-product/ProductConfigs";
import z from "zod";
import MessageUtils from "~/utils/MessageUtils";

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
  static initialCreateUpdateFormValues = {
    name: "",
    slug: "",
    status: "1",
  };
  static createUpdateFormSchema = z.object({
    name: z
      .string()
      .min(2, MessageUtils.min(TagConfigs.properties.name.label, 2)),
    slug: z.string(),
    status: z.string(),
  });
}

export default TagConfigs;
