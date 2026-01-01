import { Configs } from "~/types";
import ManagerPath from "~/constants/ManagerPath";
import ResourceUrl from "~/constants/ResourceURL";
import * as PageConfigs from "~/pages/PageConfig";

class OrderConfigs extends Configs {
  static managerPath = ManagerPath.ORDER;
  static resourceUrl = ResourceUrl.ORDER;
  static resourceKey = "orders";
  static createTitle = "Thêm đơn hàng";
  static updateTitle = "Cập nhật đơn hàng";
  static manageTitle = "Quản lý đơn hàng";

  static _rawProperties = {
    ...PageConfigs.getProperties(true, true),
    code: {
      label: "Mã đơn hàng",
      isShowInTable: true,
    },
    "orderResource.name": {
      label: "Tên nguồn đơn hàng",
      isShowInTable: true,
    },
    user: {
      label: "Người đặt hàng",
      isShowInTable: true,
    },
    to: {
      label: "Người nhận hàng",
      isShowInTable: true,
    },
    totalPay: {
      label: "Tổng tiền trả",
      isShowInTable: true,
    },
    warehouse: {
      label: "Kho",
      isShowInTable: true,
    },
    status: {
      label: "Trạng thái đơn hàng",
      isShowInTable: true,
    },
  };

  static properties = this._rawProperties;
  static initialCreateUpdateFormValues = {};
  static createUpdateFormSchema = {};
}

export default OrderConfigs;
