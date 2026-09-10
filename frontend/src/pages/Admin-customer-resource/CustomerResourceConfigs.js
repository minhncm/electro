import ManagerPath from "~/constants/ManagerPath";
import ResourceUrl from "~/constants/ResourceURL";
import { Configs } from "~/types";
import * as PageConfigs from "~/pages/PageConfig";
import CustomerConfigs from "~/pages/Admin-customer/CustomerConfigs";
import z from "zod";
import MessageUtils from "~/utils/MessageUtils";

class CustomerResourceConfigs extends Configs {
  static managerPath = ManagerPath.CUSTOMER_RESOURCE;
  static resourceUrl = ResourceUrl.CUSTOMER_RESOURCE;
  static resourceKey = "customer-resources";
  static createTitle = "Thêm nguồn khách hàng";
  static updateTitle = "Cập nhật nguồn khách hàng";
  static manageTitle = "Quản lý nguồn khách hàng";

  static manageTitleLinks = CustomerConfigs.manageTitleLinks;
  static _rawProperties = {
    ...PageConfigs.getProperties(true),
    code: {
      label: "Mã nguồn khách hàng",
      isShowInTable: true,
    },
    name: {
      label: "Tên nguồn khách hàng",
      isShowInTable: true,
    },
    description: {
      label: "Mô tả nguồn khách hàng",
      isShowInTable: false,
    },
    color: {
      label: "Màu nguồn khách hàng",
      isShowInTable: true,
    },
    status: {
      label: "Trạng thái nguồn khách hàng",
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
      .min(
        2,
        MessageUtils.min(CustomerResourceConfigs.properties.name.label, 2),
      ),
    description: z.string(),
    color: z.string(),
    status: z.string(),
  });
}

export default CustomerResourceConfigs;
