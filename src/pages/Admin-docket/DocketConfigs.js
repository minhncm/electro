import { Configs } from "~/types";
import ManagerPath from "~/constants/ManagerPath";
import ResourceUrl from "~/constants/ResourceURL";
import * as PageConfigs from "~/pages/PageConfig";
import WarehouseConfigs from "~/pages/Admin-warehouse/WarehouseConfigs";

class DocketConfigs extends Configs {
  static managerPath = ManagerPath.DOCKET;
  static resourceUrl = ResourceUrl.DOCKET;
  static resourceKey = "dockets";
  static createTitle = "Thêm phiếu nhập xuất kho";
  static updateTitle = "Cập nhật phiếu nhập xuất kho";
  static manageTitle = "Quản lý phiếu nhập xuất kho";

  static manageTitleLinks = WarehouseConfigs.manageTitleLinks;

  static _rawProperties = {
    ...PageConfigs.getProperties(true, true),
    type: {
      label: "Loại phiếu NXK",
      isShowInTable: true,
    },
    code: {
      label: "Mã phiếu NXK",
      isShowInTable: true,
    },
    totalVariants: {
      label: "Số mặt hàng",
      isShowInTable: true,
    },
    "reason.name": {
      label: "Tên lý do phiếu NXK",
      isShowInTable: true,
    },
    "warehouse.name": {
      label: "Tên nhà kho",
      isShowInTable: true,
    },
    note: {
      label: "Ghi chú phiếu NXK",
      isShowInTable: false,
    },
    status: {
      label: "Trạng thái phiếu NXK",
      isShowInTable: true,
    },
  };

  static properties = this._rawProperties;
  static initialCreateUpdateFormValues = {};
  static createUpdateFormSchema = {};
}

export default DocketConfigs;
