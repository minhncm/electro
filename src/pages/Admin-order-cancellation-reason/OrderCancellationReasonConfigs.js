import ManagerPath from "~/constants/ManagerPath";
import ResourceUrl from "~/constants/ResourceURL";
import * as PageConfigs from "~/pages/PageConfig";
import { Configs } from "~/types";
import OrderResourceConfigs from "~/pages/Admin-order-resourse/OrderResourceConfigs";
import z from "zod";
import MessageUtils from "~/utils/MessageUtils";

class OrderCancellationReasonConfigs extends Configs {
  static managerPath = ManagerPath.ORDER_CANCELLATION_REASON;
  static resourceUrl = ResourceUrl.ORDER_CANCELLATION_REASON;
  static resourceKey = "order-cancellation-reasons";
  static createTitle = "Thêm lý do hủy đơn hàng";
  static updateTitle = "Cập nhật lý do hủy đơn hàng";
  static manageTitle = "Quản lý lý do hủy đơn hàng";

  static manageTitleLinks = OrderResourceConfigs.manageTitleLinks;

  static _rawProperties = {
    ...PageConfigs.getProperties(true, true, true),
    name: {
      label: "Tên lý do hủy đơn hàng",
      isShowInTable: true,
    },
    note: {
      label: "Ghi chú lý do hủy đơn hàng",
      isShowInTable: false,
    },
    status: {
      label: "Trạng thái lý do hủy đơn hàng",
      isShowInTable: true,
    },
  };

  static properties = this._rawProperties;
  static initialCreateUpdateFormValues = {
    name: "",
    note: "",
    status: "1",
  };
  static createUpdateFormSchema = z.object({
    name: z
      .string()
      .min(
        2,
        MessageUtils.min(
          OrderCancellationReasonConfigs.properties.name.label,
          2,
        ),
      ),
    note: z.string(),
    status: z.string(),
  });
}

export default OrderCancellationReasonConfigs;
