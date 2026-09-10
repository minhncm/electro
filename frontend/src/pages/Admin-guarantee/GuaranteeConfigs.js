import { Configs } from "~/types";
import ManagerPath from "~/constants/ManagerPath";
import ResourceUrl from "~/constants/ResourceURL";
import * as PageConfigs from "~/pages/PageConfig";
import ProductConfigs from "~/pages/Admin-product/ProductConfigs";
import z from "zod";
import MessageUtils from "~/utils/MessageUtils";

class GuaranteeConfigs extends Configs {
  static managerPath = ManagerPath.GUARANTEE;
  static resourceUrl = ResourceUrl.GUARANTEE;
  static resourceKey = "guarantees";
  static createTitle = "Thêm bảo hành";
  static updateTitle = "Cập nhật bảo hành";
  static manageTitle = "Quản lý bảo hành";

  static manageTitleLinks = ProductConfigs.manageTitleLinks;

  static _rawProperties = {
    ...PageConfigs.getProperties(true, true, true),
    name: {
      label: "Tên đơn vị tính",
      isShowInTable: true,
    },
    description: {
      label: "Mô tả bảo hành",
      isShowInTable: false,
    },
    status: {
      label: "Trạng thái đơn vị tính",
      isShowInTable: true,
    },
  };

  static properties = this._rawProperties;
  static initialCreateUpdateFormValues = {
    name: "",
    description: "",
    status: "1",
  };
  static createUpdateFormSchema = z.object({
    name: z
      .string()
      .min(2, MessageUtils.min(GuaranteeConfigs.properties.name.label, 2)),
    description: z.string(),
    status: z.string(),
  });
}

export default GuaranteeConfigs;
