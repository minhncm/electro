import { Configs } from "~/types";
import ManagerPath from "~/constants/ManagerPath";
import ResourceUrl from "~/constants/ResourceURL";
import * as PageConfigs from "~/pages/PageConfig";
import WarehouseConfigs from "~/pages/Admin-warehouse/WarehouseConfigs";

class TransferConfigs extends Configs {
  static managerPath = ManagerPath.TRANSFER;
  static resourceUrl = ResourceUrl.TRANSFER;
  static resourceKey = "transfers";
  static createTitle = "Thêm phiếu chuyển kho";
  static updateTitle = "Cập nhật phiếu chuyển kho";
  static manageTitle = "Quản lý phiếu chuyển kho";

  static manageTitleLinks = WarehouseConfigs.manageTitleLinks;

  static _rawProperties = {
    ...PageConfigs.getProperties(true, true),
    code: {
      label: "Mã phiếu chuyển kho",
      isShowInTable: true,
    },
    "exportDocket.warehouse.name": {
      label: "Tên kho xuất",
      isShowInTable: true,
    },
    "exportDocket.status": {
      label: "Trạng thái phiếu xuất",
      isShowInTable: true,
    },
    arrow: {
      label: "",
      isShowInTable: true,
    },
    "importDocket.warehouse.name": {
      label: "Tên kho nhập",
      isShowInTable: true,
    },
    "importDocket.status": {
      label: "Trạng thái phiếu nhập",
      isShowInTable: true,
    },
    note: {
      label: "Ghi chú phiếu chuyển kho",
      isShowInTable: false,
    },
  };

  static properties = this._rawProperties;
  static initialCreateUpdateFormValues = {};
  static createUpdateFormSchema = {};
}

export default TransferConfigs;
