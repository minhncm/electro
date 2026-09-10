import { Configs } from "~/types";
import * as PageConfigs from "~/pages/PageConfig";
import EmployeeConfigs from "~/pages/Admin-employee/EmployeeConfigs";
import ManagerPath from "~/constants/ManagerPath";
import ResourceUrl from "~/constants/ResourceURL";
import z from "zod";
import MessageUtils from "~/utils/MessageUtils";

class JobLevelConfigs extends Configs {
  static managerPath = ManagerPath.JOB_LEVEL;
  static resourceUrl = ResourceUrl.JOB_LEVEL;
  static resourceKey = "job-levels";
  static createTitle = "Thêm cấp bậc công việc";
  static updateTitle = "Cập nhật cấp bậc công việc";
  static manageTitle = "Quản lý cấp bậc công việc";

  static manageTitleLinks = EmployeeConfigs.manageTitleLinks;

  static _rawProperties = {
    ...PageConfigs.getProperties(true, true, true),
    name: {
      label: "Tên cấp bậc công việc",
      isShowInTable: true,
    },
    status: {
      label: "Trạng thái cấp bậc công việc",
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
      .min(2, MessageUtils.min(JobLevelConfigs.properties.name.label, 2)),
    status: z.string(),
  });
}

export default JobLevelConfigs;
