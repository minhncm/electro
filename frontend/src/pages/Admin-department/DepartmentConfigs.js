import ManagerPath from "~/constants/ManagerPath";
import ResourceUrl from "~/constants/ResourceURL";
import { Configs } from "~/types";
import EmployeeConfigs from "~/pages/Admin-employee/EmployeeConfigs";
import * as PageConfigs from "~/pages/PageConfig";
import z from "zod";
import MessageUtils from "~/utils/MessageUtils";

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
  static initialCreateUpdateFormValues = {
    name: "",
    status: "1",
  };
  static createUpdateFormSchema = z.object({
    name: z
      .string()
      .min(2, MessageUtils.min(DepartmentConfigs.properties.name.label, 2)),
    status: z.string(),
  });
}

export default DepartmentConfigs;
