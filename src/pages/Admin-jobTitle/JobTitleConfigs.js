import { Configs } from "~/types";
import * as PageConfigs from "~/pages/PageConfig";
import EmployeeConfigs from "~/pages/Admin-employee/EmployeeConfigs";
import ManagerPath from "~/constants/ManagerPath";
import ResourceUrl from "~/constants/ResourceURL";
import z from "zod";
import MessageUtils from "~/utils/MessageUtils";

class JobTitleConfigs extends Configs {
  static managerPath = ManagerPath.JOB_TITLE;
  static resourceUrl = ResourceUrl.JOB_TITLE;
  static resourceKey = "job-titles";
  static createTitle = "Thêm chức danh công việc";
  static updateTitle = "Cập nhật chức danh công việc";
  static manageTitle = "Quản lý chức danh công việc";

  static manageTitleLinks = EmployeeConfigs.manageTitleLinks;

  static _rawProperties = {
    ...PageConfigs.getProperties(true, true, true),
    name: {
      label: "Tên chức danh công việc",
      isShowInTable: true,
    },
    status: {
      label: "Trạng thái chức danh công việc",
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
      .min(2, MessageUtils.min(JobTitleConfigs.properties.name.label, 2)),
    status: z.string(),
  });
}

export default JobTitleConfigs;
