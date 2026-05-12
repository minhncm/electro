import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
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

export const useCreateOrder = () => {
  return useMutation({
    mutationKey: ["client-api", "createOrder"],
    mutationFn: (data) => FetchUtils.post(ResourceUrl.CLIENT_ORDER, data),
  });
};

export const useCaptureOrder = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["client-api", "captureOrder"],
    mutationFn: (paypalOrderId) =>
      FetchUtils.post(
        ResourceUrl.CLIENT_ORDER + "/paypal/capture/" + paypalOrderId,
      ),
    onSuccess: () => queryClient.invalidateQueries(["client-cart", "getCart"]),
  });
};
