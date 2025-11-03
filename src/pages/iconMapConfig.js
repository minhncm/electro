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
      return Object.prototype.hasOwnProperty.call(target, name) ? target[name] : Box;
    },
  }
);

export const paymentMethodIconMap = {
  cash: Cash,
  paypal: BrandPaypal,
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
