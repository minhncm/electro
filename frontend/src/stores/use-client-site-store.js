import { createTrackedSelector } from "react-tracked";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

const initialClientSiteState = {
  newNotifications: [],
  hasUnreadNotification: false,
};
const useClientSiteStore = create(
  devtools(
    (set, get) => ({
      ...initialClientSiteState,
      pushNewNotification: (value) =>
        set(
          () => ({
            newNotifications: [...get().newNotifications, value],
            hasUnreadNotification: true,
          }),
          false,
          "ClientSiteStore/pushNewNotification",
        ),
      markNotificationsAsRead: () =>
        set(
          () => ({
            hasUnreadNotification: false,
          }),
          false,
          "ClientSiteStore/markNotificationsAsRead",
        ),
    }),
    {
      name: "ClientSiteStore",
      anonymousActionType: "ClientSiteStore",
    },
  ),
);

export default createTrackedSelector(useClientSiteStore);
