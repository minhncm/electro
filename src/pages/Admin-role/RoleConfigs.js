import ManagerPath from "~/constants/ManagerPath";
import ResourceUrl from "~/constants/ResourceURL";
import { Configs } from "~/types";
import UserConfigs from "~/pages/Admin-user/UserConfigs";
import * as PageConfigs from "~/pages/PageConfig";

class RoleConfigs extends Configs {
  static managerPath = ManagerPath.ROLE;
  static resourceUrl = ResourceUrl.ROLE;
  static resourceKey = "roles";
  static createTitle = "Thêm quyền";
  static updateTitle = "Cập nhật quyền";
  static manageTitle = "Quản lý quyền";

  static manageTitleLinks = UserConfigs.manageTitleLinks;

  static _rawProperties = {
    ...PageConfigs.getProperties(true, true, true),
    code: {
      label: "Mã quyền",
      isShowInTable: true,
    },
    name: {
      label: "Tên quyền",
      isShowInTable: true,
    },
    status: {
      label: "Trạng thái quyền",
      isShowInTable: true,
    },
  };

  static properties = this._rawProperties;
  static initialCreateUpdateFormValues = {};
  static createUpdateFormSchema = {};
}

export default RoleConfigs;
