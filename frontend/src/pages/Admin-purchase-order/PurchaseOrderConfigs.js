import { Configs } from "~/types";
import ManagerPath from "~/constants/ManagerPath";
import ResourceUrl from "~/constants/ResourceURL";
import * as PageConfigs from "~/pages/PageConfig";
import WarehouseConfigs from "~/pages/Admin-warehouse/WarehouseConfigs";

class PurchaseOrderConfigs extends Configs {
  static managerPath = ManagerPath.PURCHASE_ORDER;
  static resourceUrl = ResourceUrl.PURCHASE_ORDER;
  static resourceKey = "purchase-orders";
  static createTitle = "Thêm đơn mua hàng";
  static updateTitle = "Cập nhật đơn mua hàng";
  static manageTitle = "Quản lý đơn mua hàng";

  static manageTitleLinks = WarehouseConfigs.manageTitleLinks;

  static _rawProperties = {
    ...PageConfigs.getProperties(true, true),
    code: {
      label: "Mã đơn mua hàng",
      isShowInTable: true,
    },
    "supplier.displayName": {
      label: "Tên nhà cung cấp",
      isShowInTable: true,
    },
    "destination.address.line": {
      label: "Địa chỉ điểm nhập hàng",
      isShowInTable: true,
    },
    totalAmount: {
      label: "Tổng thành tiền",
      isShowInTable: true,
    },
    note: {
      label: "Ghi chú đơn mua hàng",
      isShowInTable: false,
    },
    warehouse: {
      label: "Kho",
      isShowInTable: true,
    },
    status: {
      label: "Trạng thái đơn mua hàng",
      isShowInTable: true,
    },
  };

  static properties = this._rawProperties;
  static initialCreateUpdateFormValues = {};
  static createUpdateFormSchema = {};
}

export default PurchaseOrderConfigs;
