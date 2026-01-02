import ManagerPath from "~/constants/ManagerPath";
import ResourceUrl from "~/constants/ResourceURL";
import * as PageConfigs from "~/pages/PageConfig";
import { Configs } from "~/types";

class WaybillConfigs extends Configs {
  static managerPath = ManagerPath.WAYBILL;
  static resourceUrl = ResourceUrl.WAYBILL;
  static resourceKey = "waybills";
  static createTitle = "Thêm vận đơn";
  static updateTitle = "Cập nhật vận đơn";
  static manageTitle = "Quản lý vận đơn";

  static manageTitleLinks = [
    {
      link: ManagerPath.WAYBILL,
      label: "Quản lý vận đơn",
    },
  ];

  static _rawProperties = {
    ...PageConfigs.getProperties(true),
    code: {
      label: "Mã vận đơn",
      isShowInTable: true,
    },
    "order.code": {
      label: "Mã đơn hàng",
      isShowInTable: true,
    },
    shippingDate: {
      label: "Ngày gửi hàng",
      isShowInTable: true,
    },
    expectedDeliveryTime: {
      label: "Thời gian giao dự kiến",
      isShowInTable: true,
    },
    status: {
      label: "Trạng thái vận đơn",
      isShowInTable: true,
    },
    codAmount: {
      label: "Tiền thu hộ",
      isShowInTable: true,
    },
    shippingFee: {
      label: "Phí vận chuyển",
      isShowInTable: true,
    },
    size: {
      label: "Thông số kiện hàng",
      isShowInTable: true,
    },
  };

  static properties = this._rawProperties;
  static initialCreateUpdateFormValues = {};
  static createUpdateFormSchema = {};

  static ghnRequiredNoteMap = {
    CHOTHUHANG: "Cho thử hàng",
    CHOXEMHANGKHONGTHU: "Cho xem hàng, không cho thử",
    KHONGCHOXEMHANG: "Không cho xem hàng",
  };

  static ghnPaymentTypeIdMap = {
    1: "Người bán",
    2: "Người mua",
  };
}

export default WaybillConfigs;
