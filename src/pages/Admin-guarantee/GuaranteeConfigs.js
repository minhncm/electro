import { Configs } from "~/types";
import ManagerPath from "~/constants/ManagerPath";
import ResourceUrl from "~/constants/ResourceURL";
import * as PageConfigs from "~/pages/PageConfig";
import ProductConfigs from "~/pages/Admin-product/ProductConfigs";

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
  static initialCreateUpdateFormValues = {};
  static createUpdateFormSchema = {};
}

export default GuaranteeConfigs;
