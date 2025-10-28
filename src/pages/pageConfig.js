import {
  Box,
  Briefcase,
  Cpu,
  DeviceGamepad2,
  DeviceLaptop,
  DevicesPc,
  DeviceSpeaker,
  DeviceTablet,
  DeviceWatch,
  Keyboard,
  Mouse,
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
      return Object.prototype.hasOwnProperty.call(target, name)
        ? target[name]
        : Box;
    },
  }
);
