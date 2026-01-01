import { Configs } from "~/types";
import ManagerPath from "~/constants/ManagerPath";
import ResourceUrl from "~/constants/ResourceURL";
import * as PageConfigs from "~/pages/PageConfig";
import WarehouseConfigs from "~/pages/Admin-warehouse/WarehouseConfigs";

class DocketReasonConfigs extends Configs {
  static managerPath = ManagerPath.DOCKET_REASON;
  static resourceUrl = ResourceUrl.DOCKET_REASON;
  static resourceKey = "docket-reasons";
  static createTitle = "Thêm lý do phiếu NXK";
  static updateTitle = "Cập nhật lý do phiếu NXK";
  static manageTitle = "Quản lý lý do phiếu NXK";

  static manageTitleLinks = WarehouseConfigs.manageTitleLinks;

  static _rawProperties = {
    ...PageConfigs.getProperties(true, true),
    name: {
      label: "Tên lý do phiếu NXK",
      isShowInTable: true,
    },
    status: {
      label: "Trạng thái lý do phiếu NXK",
      isShowInTable: true,
    },
  };

  static properties = this._rawProperties;
  static initialCreateUpdateFormValues = {};
  static createUpdateFormSchema = {};
}

export default DocketReasonConfigs;
