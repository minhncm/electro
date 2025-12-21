import ManagerPath from "~/constants/ManagerPath";
import ResourceUrl from "~/constants/ResourceURL";
import { Configs } from "~/types";
import EmployeeConfigs from "~/pages/Admin-employee/EmployeeConfigs";
import * as PageConfigs from "~/pages/PageConfig";

class DepartmentConfigs extends Configs {
  static managerPath = ManagerPath.DEPARTMENT;
  static resourceUrl = ResourceUrl.DEPARTMENT;
  static resourceKey = "departments";
  static createTitle = "Thêm phòng ban";
  static updateTitle = "Cập nhật phòng ban";
  static manageTitle = "Quản lý phòng ban";

  static manageTitleLinks = EmployeeConfigs.manageTitleLinks;

  static _rawProperties = {
    ...PageConfigs.getProperties(true, true, true),
    name: {
      label: "Tên phòng ban",
      isShowInTable: true,
    },
    status: {
      label: "Trạng thái phòng ban",
      isShowInTable: true,
    },
  };

  static properties = this._rawProperties;
  static initialCreateUpdateFormValues = {};
  static createUpdateFormSchema = {};
}

export default DepartmentConfigs;
