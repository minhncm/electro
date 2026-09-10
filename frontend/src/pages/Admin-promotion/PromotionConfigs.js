import ManagerPath from "~/constants/ManagerPath";
import ResourceUrl from "~/constants/ResourceURL";
import { Configs } from "~/types";
import * as PageConfigs from "~/pages/PageConfig";
import PaymentMethodConfigs from "~/pages/Admin-payment-method/PaymentMethodConfigs";

class PromotionConfigs extends Configs {
  static managerPath = ManagerPath.PROMOTION;
  static resourceUrl = ResourceUrl.PROMOTION;
  static resourceKey = "promotions";
  static createTitle = "Thêm khuyến mãi";
  static updateTitle = "Cập nhật khuyến mãi";
  static manageTitle = "Quản lý khuyến mãi";

  static manageTitleLinks = PaymentMethodConfigs.manageTitleLinks;

  static _rawProperties = {
    ...PageConfigs.getProperties(true, true),
    name: {
      label: "Tên khuyến mãi",
      isShowInTable: true,
    },
    startDate: {
      label: "Ngày bắt đầu khuyến mãi",
      isShowInTable: true,
    },
    endDate: {
      label: "Ngày kết thúc khuyến mãi",
      isShowInTable: true,
    },
    percent: {
      label: "Phần trăm giảm giá",
      isShowInTable: true,
    },
    status: {
      label: "Trạng thái khuyến mãi",
      isShowInTable: true,
    },
    numberOfProducts: {
      label: "Số sản phẩm",
      isShowInTable: true,
    },
  };

  static properties = this._rawProperties;
  static initialCreateUpdateFormValues = {};
  static createUpdateFormSchema = {};

  static addProductMode = {
    CATEGORY: "category",
    PRODUCT: "product",
  };
}

export default PromotionConfigs;
