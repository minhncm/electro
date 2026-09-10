import { Configs } from "~/types";
import ManagerPath from "~/constants/ManagerPath";
import ResourceUrl from "~/constants/ResourceURL";
import * as PageConfigs from "~/pages/PageConfig";
import z from "zod";
import MessageUtils from "~/utils/MessageUtils";

class WarehouseConfigs extends Configs {
  static managerPath = ManagerPath.WAREHOUSE;
  static resourceUrl = ResourceUrl.WAREHOUSE;
  static resourceKey = "warehouses";
  static createTitle = "Thêm nhà kho";
  static updateTitle = "Cập nhật nhà kho";
  static manageTitle = "Quản lý nhà kho";

  static manageTitleLinks = [
    {
      link: ManagerPath.INVENTORY,
      label: "Theo dõi tồn kho",
    },
    {
      link: ManagerPath.WAREHOUSE,
      label: "Quản lý nhà kho",
    },
    {
      link: ManagerPath.PURCHASE_ORDER,
      label: "Quản lý đơn mua hàng",
    },
    {
      link: ManagerPath.DESTINATION,
      label: "Quản lý điểm nhập hàng",
    },
    {
      link: ManagerPath.DOCKET,
      label: "Quản lý phiếu nhập xuất kho",
    },
    {
      link: ManagerPath.DOCKET_REASON,
      label: "Quản lý lý do phiếu NXK",
    },
    {
      link: ManagerPath.COUNT,
      label: "Quản lý phiếu kiểm kho",
    },
    {
      link: ManagerPath.TRANSFER,
      label: "Quản lý phiếu chuyển kho",
    },
  ];

  static _rawProperties = {
    ...PageConfigs.getProperties(true, true, true),
    code: {
      label: "Mã nhà kho",
      isShowInTable: true,
    },
    name: {
      label: "Tên nhà kho",
      isShowInTable: true,
    },
    "address.line": {
      label: "Địa chỉ",
      isShowInTable: false,
    },
    "address.province.name": {
      label: "Tên tỉnh thành",
      isShowInTable: false,
    },
    "address.district.name": {
      label: "Tên quận huyện",
      isShowInTable: false,
    },
    status: {
      label: "Trạng thái nhà kho",
      isShowInTable: true,
    },
    "address.provinceId": {
      label: "Tỉnh thành",
      isShowInTable: false,
    },
    "address.districtId": {
      label: "Quận huyện",
      isShowInTable: false,
    },
  };

  static properties = this._rawProperties;
  static initialCreateUpdateFormValues = {
    code: "",
    name: "",
    address: {
      line: "",
      provinceId: null,
      districtId: null,
    },
    status: "1",
  };
  static createUpdateFormSchema = z.object({
    code: z.string(),
    name: z
      .string()
      .min(2, MessageUtils.min(WarehouseConfigs.properties.name.label, 2)),
    address: z.object({
      line: z.string(),
      provinceId: z.string(),
      districtId: z.string(),
    }),
    status: z.string(),
  });
}

export default WarehouseConfigs;
