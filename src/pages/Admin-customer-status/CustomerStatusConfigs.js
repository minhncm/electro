import ManagerPath from "~/constants/ManagerPath";
import ResourceUrl from "~/constants/ResourceURL";
import { Configs } from "~/types";
import * as PageConfigs from "~/pages/PageConfig";
import CustomerConfigs from "~/pages/Admin-customer/CustomerConfigs";

class CustomerStatusConfigs extends Configs {
  static managerPath = ManagerPath.CUSTOMER_STATUS;
  static resourceUrl = ResourceUrl.CUSTOMER_STATUS;
  static resourceKey = "customer-status";
  static createTitle = "Thêm trạng thái khách hàng";
  static updateTitle = "Cập nhật trạng thái khách hàng";
  static manageTitle = "Quản lý trạng thái khách hàng";

  static manageTitleLinks = CustomerConfigs.manageTitleLinks;
  static _rawProperties = {
    ...PageConfigs.getProperties(true),
    code: {
      label: "Mã trạng thái khách hàng",
      isShowInTable: true,
    },
    name: {
      label: "Tên trạng thái khách hàng",
      isShowInTable: true,
    },
    description: {
      label: "Mô tả trạng thái khách hàng",
      isShowInTable: false,
    },
    color: {
      label: "Màu trạng thái khách hàng",
      isShowInTable: true,
    },
    status: {
      label: "Trạng thái trạng thái khách hàng",
      isShowInTable: true,
    },
  };

  static properties = this._rawProperties;
  static initialCreateUpdateFormValues = {};
  static createUpdateFormSchema = {};
}

export default CustomerStatusConfigs;
