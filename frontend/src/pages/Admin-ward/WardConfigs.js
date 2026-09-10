import ManagerPath from "~/constants/ManagerPath";
import ResourceUrl from "~/constants/ResourceURL";
import { Configs } from "~/types";

class WardConfigs extends Configs {
  static managerPath = ManagerPath.WARD;
  static resourceUrl = ResourceUrl.WARD;
  static resourceKey = "wards";
  static createTitle = "Thêm phường xã";
  static updateTitle = "Cập nhật phường xã";
  static manageTitle = "Quản lý phường xã";
}
export default WardConfigs;
