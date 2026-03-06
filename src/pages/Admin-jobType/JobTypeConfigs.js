import { Configs } from "~/types";
import * as PageConfigs from "~/pages/PageConfig";
import EmployeeConfigs from "~/pages/Admin-employee/EmployeeConfigs";
import ManagerPath from "~/constants/ManagerPath";
import ResourceUrl from "~/constants/ResourceURL";
import z from "zod";
import MessageUtils from "~/utils/MessageUtils";

class JobTypeConfigs extends Configs {
  static managerPath = ManagerPath.JOB_TYPE;
  static resourceUrl = ResourceUrl.JOB_TYPE;
  static resourceKey = "job-types";
  static createTitle = "Thêm loại hình công việc";
  static updateTitle = "Cập nhật loại hình công việc";
  static manageTitle = "Quản lý loại hình công việc";

  static manageTitleLinks = EmployeeConfigs.manageTitleLinks;

  static _rawProperties = {
    ...PageConfigs.getProperties(true, true, true),
    name: {
      label: "Tên loại hình công việc",
      isShowInTable: true,
    },
    status: {
      label: "Trạng thái loại hình công việc",
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
      .min(2, MessageUtils.min(JobTypeConfigs.properties.name.label, 2)),
    status: z.string(),
  });
}

export default JobTypeConfigs;
