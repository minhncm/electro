import { Configs } from "~/types";
import ManagerPath from "~/constants/ManagerPath";
import ResourceUrl from "~/constants/ResourceURL";
import * as PageConfigs from "~/pages/PageConfig";
import WarehouseConfigs from "~/pages/Admin-warehouse/WarehouseConfigs";

class CountConfigs extends Configs {
  static managerPath = ManagerPath.COUNT;
  static resourceUrl = ResourceUrl.COUNT;
  static resourceKey = "counts";
  static createTitle = "Thêm phiếu kiểm kho";
  static updateTitle = "Cập nhật phiếu kiểm kho";
  static manageTitle = "Quản lý phiếu kiểm kho";

  static manageTitleLinks = WarehouseConfigs.manageTitleLinks;

  static _rawProperties = {
    ...PageConfigs.getProperties(true, true),
    code: {
      label: "Mã phiếu kiểm kho",
      isShowInTable: true,
    },
    totalVariants: {
      label: "Số mặt hàng",
      isShowInTable: true,
    },
    "warehouse.name": {
      label: "Tên nhà kho",
      isShowInTable: true,
    },
    status: {
      label: "Trạng thái phiếu kiểm kho",
      isShowInTable: true,
    },
  };

  static properties = this._rawProperties;
  static initialCreateUpdateFormValues = {};
  static createUpdateFormSchema = {};
}

export default CountConfigs;
