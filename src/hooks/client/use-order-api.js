import { useQuery } from "@tanstack/react-query";
import ResourceUrl from "~/constants/ResourceURL";
import FetchUtils from "~/utils/FetchUtils";

export const useGetOrderByUser = (requestParams) => {
  if (!requestParams) {
    requestParams = {
      page: 1,
      size: 5,
      sort: "id,asc",
      filter: null,
    };
  }
  return useQuery({
    queryKey: ["client-api", "getOrderByUser"],
    queryFn: () => FetchUtils.getAll(ResourceUrl.CLIENT_ORDER, requestParams),
  });
};

export const useGetOrderDetail = (id) => {
  return useQuery({
    queryKey: ["client-api", "getOrderDetail"],
    queryFn: () => FetchUtils.getById(ResourceUrl.CLIENT_ORDER, id),
  });
};
