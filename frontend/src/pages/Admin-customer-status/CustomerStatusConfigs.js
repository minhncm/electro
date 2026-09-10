import ManagerPath from "~/constants/ManagerPath";
import ResourceUrl from "~/constants/ResourceURL";
import { Configs } from "~/types";
import * as PageConfigs from "~/pages/PageConfig";
import CustomerConfigs from "~/pages/Admin-customer/CustomerConfigs";
import z from "zod";
import MessageUtils from "~/utils/MessageUtils";

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
  static initialCreateUpdateFormValues = {
    code: "",
    name: "",
    description: "",
    color: "",
    status: "1",
  };
  static createUpdateFormSchema = z.object({
    code: z.string(),
    name: z
      .string()
      .min(2, MessageUtils.min(CustomerStatusConfigs.properties.name.label, 2)),
    description: z.string(),
    color: z.string(),
    status: z.string(),
  });
}

export default CustomerStatusConfigs;
