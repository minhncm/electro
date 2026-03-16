import z from "zod";
import ManagerPath from "~/constants/ManagerPath";
import ResourceUrl from "~/constants/ResourceURL";
import * as PageConfigs from "~/pages/PageConfig";
import { Configs } from "~/types";
import MessageUtils from "~/utils/MessageUtils";

class OrderResourceConfigs extends Configs {
  static managerPath = ManagerPath.ORDER_RESOURCE;
  static resourceUrl = ResourceUrl.ORDER_RESOURCE;
  static resourceKey = "order-resources";
  static createTitle = "Thêm nguồn đơn hàng";
  static updateTitle = "Cập nhật nguồn đơn hàng";
  static manageTitle = "Quản lý nguồn đơn hàng";

  static manageTitleLinks = [
    {
      link: ManagerPath.ORDER,
      label: "Quản lý đơn hàng",
    },
    {
      link: ManagerPath.ORDER_RESOURCE,
      label: "Quản lý nguồn đơn hàng",
    },
    {
      link: ManagerPath.ORDER_CANCELLATION_REASON,
      label: "Quản lý lý do hủy đơn hàng",
    },
  ];

  static _rawProperties = {
    ...PageConfigs.getProperties(true),
    code: {
      label: "Mã nguồn đơn hàng",
      isShowInTable: true,
    },
    name: {
      label: "Tên nguồn đơn hàng",
      isShowInTable: true,
    },
    color: {
      label: "Màu nguồn đơn hàng",
      isShowInTable: true,
    },
    "customerResource.name": {
      label: "Tên nguồn khách hàng",
      isShowInTable: true,
    },
    customerResourceId: {
      label: "Nguồn khách hàng",
      isShowInTable: false,
    },
    status: {
      label: "Trạng thái nguồn đơn hàng",
      isShowInTable: true,
    },
  };

  static properties = this._rawProperties;
  static initialCreateUpdateFormValues = {
    code: "",
    name: "",
    color: "",
    customerResourceId: null,
    status: "1",
  };
  static createUpdateFormSchema = z.object({
    code: z.string(),
    name: z
      .string()
      .min(2, MessageUtils.min(OrderResourceConfigs.properties.name.label, 2)),
    color: z.string(),
    customerResourceId: z.string(),
    status: z.string(),
  });
}

export default OrderResourceConfigs;
