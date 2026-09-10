import z from "zod";
import ManagerPath from "~/constants/ManagerPath";
import ResourceUrl from "~/constants/ResourceURL";
import CustomerConfigs from "~/pages/Admin-customer/CustomerConfigs";
import * as PageConfigs from "~/pages/PageConfig";
import { Configs } from "~/types";
import MessageUtils from "~/utils/MessageUtils";

class CustomerGroupConfigs extends Configs {
  static managerPath = ManagerPath.CUSTOMER_GROUP;
  static resourceUrl = ResourceUrl.CUSTOMER_GROUP;
  static resourceKey = "customer-groups";
  static createTitle = "Thêm nhóm khách hàng";
  static updateTitle = "Cập nhật nhóm khách hàng";
  static manageTitle = "Quản lý nhóm khách hàng";

  static manageTitleLinks = CustomerConfigs.manageTitleLinks;
  static _rawProperties = {
    ...PageConfigs.getProperties(true),
    code: {
      label: "Mã nhóm khách hàng",
      isShowInTable: true,
    },
    name: {
      label: "Tên nhóm khách hàng",
      isShowInTable: true,
    },
    description: {
      label: "Mô tả nhóm khách hàng",
      isShowInTable: false,
    },
    color: {
      label: "Màu nhóm khách hàng",
      isShowInTable: true,
    },
    status: {
      label: "Trạng thái nhóm khách hàng",
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
      .min(2, MessageUtils.min(CustomerGroupConfigs.properties.name.label, 2)),
    description: z.string(),
    color: z.string(),
    status: z.string(),
  });
}

export default CustomerGroupConfigs;
