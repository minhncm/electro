import React from "react";
import { notifications } from "@mantine/notifications";
import { Check, X } from "tabler-icons-react";

class NotifyUtils {
  static simple = (message) => {
    console.log(1);

    notifications.show({
      title: "Thông báo",
      message: message,
      autoClose: 5000,
    });
  };

  static simpleSuccess = (message) => {
    notifications.show({
      title: "Thông báo",
      message: message,
      autoClose: 5000,
      icon: <Check size={18} />,
      color: "teal",
    });
  };

  static simpleFailed = (message) => {
    notifications.show({
      title: "Thông báo",
      message: message,
      autoClose: 5000,
      icon: <X size={18} />,
      color: "red",
    });
  };
}

export default NotifyUtils;
