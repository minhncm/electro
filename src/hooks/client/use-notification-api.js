import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import ResourceUrl from "~/constants/ResourceURL";
import useAuthStore from "~/stores/use-auth-store";
import useClientSiteStore from "~/stores/use-client-site-store";
import FetchUtils from "~/utils/FetchUtils";

export const useGetAllNotificationApi = (page) => {
  const requestParams = {
    page,
    size: 5,
  };
  return useQuery({
    queryKey: ["client-api", "getAllNotification"],
    queryFn: () =>
      FetchUtils.getAll(ResourceUrl.CLIENT_NOTIFICATION, requestParams),
  });
};

export const useNotificationEvent = () => {
  const { user } = useAuthStore();
  const { pushNewNotification } = useClientSiteStore();
  useEffect(() => {
    if (!user) return;
    const eventSource = new EventSource(
      ResourceUrl.CLIENT_NOTIFICATION_EVENTS,
      {
        withCredentials: true,
      },
    );

    eventSource.onopen = () => {
      console.log("SSE open successful");
    };

    eventSource.onerror = (error) => {
      console.log("SSE error", error);
    };

    eventSource.onmessage = (event) => {
      const notificationResponse = event.data;
      pushNewNotification(notificationResponse);
    };

    return () => {
      eventSource.close();
    };
  }, [user, pushNewNotification]);
};
