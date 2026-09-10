import ManagerPath from "~/constants/ManagerPath";
import { Configs } from "~/types";
import ResourceUrl from "~/constants/ResourceURL";

class PaymentMethodConfigs extends Configs {
  static resourceUrl = ResourceUrl.PAYMENT_METHOD;
  static resourceKey = "payment-methods";
  static manageTitle = "Quản lý hình thức thanh toán";
  static manageTitleLinks = [
    {
      link: ManagerPath.VOUCHER,
      label: "Quản lý sổ quỹ",
    },
    {
      link: ManagerPath.PAYMENT_METHOD,
      label: "Quản lý hình thức thanh toán",
    },
    {
      link: ManagerPath.PROMOTION,
      label: "Quản lý khuyến mãi",
    },
  ];
}

export default PaymentMethodConfigs;
