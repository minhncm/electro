import z from "zod";
import ManagerPath from "~/constants/ManagerPath";
import ResourceUrl from "~/constants/ResourceURL";
import * as PageConfigs from "~/pages/PageConfig";
import { Configs } from "~/types";
import DateUtils from "~/utils/DateUtils";
import { RequiredNote } from "~/pages/PageConfig";

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
  static initialCreateUpdateFormValues = {
    orderId: "",
    shippingDate: DateUtils.today(),
    weight: 1,
    length: 1,
    width: 1,
    height: 1,
    note: "",
    ghnRequiredNote: RequiredNote.KHONGCHOXEMHANG,
  };
  static createUpdateFormSchema = z.object({
    orderId: z.string().min(1, "Vui lòng không để trống"),
    shippingDate: z
      .date()
      .nullable()
      .refine((value) => value !== null, {
        message: "Vui lòng không để trống",
      }),
    weight: z.number().min(1),
    length: z.number().min(1),
    width: z.number().min(1),
    height: z.number().min(1),
    note: z.string(),
    ghnRequiredNote: z.string(),
  });

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
