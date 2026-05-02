import {
  Alarm,
  AlertCircle,
  AlertTriangle,
  Bell,
  Box,
  BrandPaypal,
  Briefcase,
  Cash,
  Cpu,
  DeviceGamepad2,
  DeviceLaptop,
  DevicesPc,
  DeviceSpeaker,
  DeviceTablet,
  DeviceWatch,
  FileBarcode,
  Keyboard,
  Message,
  Mouse,
  Star,
} from "tabler-icons-react";

const properties = {
  id: {
    label: "ID",
    isShowInTable: false,
  },
  createdAt: {
    label: "Ngày tạo",
    isShowInTable: false,
  },
  updatedAt: {
    label: "Ngày cập nhật",
    isShowInTable: false,
  },
  createdBy: {
    label: "Người tạo",
    isShowInTable: false,
  },
  updatedBy: {
    label: "Người cập nhật",
    isShowInTable: false,
  },
};

export const getProperties = (...isShowInTable) => {
  const _properties = JSON.parse(JSON.stringify(properties));
  Object.values(_properties).forEach(
    (value, index) =>
      isShowInTable[index] && (value.isShowInTable = isShowInTable[index]),
  );
  return _properties;
};

export const categorySlugIconMap = new Proxy(
  {
    laptop: DeviceLaptop,
    loa: DeviceSpeaker,
    "ban-phim": Keyboard,
    "may-choi-game": DeviceGamepad2,
    chuot: Mouse,
    cpu: Cpu,
    pc: DevicesPc,
    balo: Briefcase,
    tablet: DeviceTablet,
    smartwatch: DeviceWatch,
  },
  {
    get: function (target, name) {
      // kiểm tra xem object target có thuộc tính name hay không
      return Object.prototype.hasOwnProperty.call(target, name)
        ? target[name]
        : Box;
    },
  },
);

export const paymentMethodIconMap = {
  CASH: Cash,
  PAYPAL: BrandPaypal,
};

export const paymentMethodNameMap = {
  CASH: "Thanh toán tiền mặt",
  PAYPAL: "Thanh toán PayPal",
};

const notificationType = {
  general: "GENERAL",
  error: "ERROR",
  warning: "WARNING",
  preorder: "PREORDER",
  review: "REVIEW",
  order: "ORDER",
  checkout_paypal_success: "CHECKOUT_PAYPAL_SUCCESS",
  checkout_paypal_cancel: "CHECKOUT_PAYPAL_CANCEL",
};

export const notificationIconMap = {
  [notificationType.general]: {
    icon: Bell,
    color: "blue",
  },
  [notificationType.error]: {
    icon: AlertCircle,
    color: "red",
  },
  [notificationType.warning]: {
    icon: AlertTriangle,
    color: "yellow",
  },
  [notificationType.preorder]: {
    icon: Alarm,
    color: "teal",
  },
  [notificationType.review]: {
    icon: Message,
    color: "violet",
  },
  [notificationType.order]: {
    icon: FileBarcode,
    color: "indigo",
  },
  [notificationType.checkout_paypal_success]: {
    icon: BrandPaypal,
    color: "cyan",
  },
  [notificationType.checkout_paypal_cancel]: {
    icon: BrandPaypal,
    color: "pink",
  },
};

const rewardType = {
  success_order: "SUCCESS_ORDER",
  add_review: "ADD_REVIEW",
};

export const RewardLogInfoMap = {
  [rewardType.success_order]: {
    icon: FileBarcode,
    color: "blue",
  },
  [rewardType.add_review]: {
    icon: Star,
    color: "yellow",
  },
};

export const initialListResponse = {
  content: [],
  page: 1,
  size: 5,
  totalElements: 0,
  totalPages: 0,
  last: false,
};

export const initialListSelectList = [
  {
    value: "5",
    label: "5",
  },
  {
    value: "10",
    label: "10",
  },
  {
    value: "25",
    label: "25",
  },
  {
    value: "50",
    label: "50",
  },
];

export const statusSelectList = [
  {
    value: "1",
    label: "Có hiệu lực",
  },
  {
    value: "2",
    label: "Vô hiệu lực",
  },
];
