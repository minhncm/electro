import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import ResourceUrl from "~/constants/ResourceURL";
import useAuthStore from "~/stores/use-auth-store";
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

export const useGetNotificationApi = () => {
  const [notification, setNotification] = useState(null);
  const { user } = useAuthStore();
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
      const data = event.data;
      setNotification(data);
    };

    return () => {
      eventSource.close();
    };
  }, [user]);

  return notification;
};
