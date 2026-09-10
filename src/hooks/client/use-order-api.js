import {
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import ResourceUrl from "~/constants/ResourceURL";
import FetchUtils from "~/utils/FetchUtils";
import NotifyUtils from "~/utils/NotifyUtils";

export const useGetOrderByUser = () => {
  return useInfiniteQuery({
    queryKey: ["client-api", "getOrderByUser"],
    queryFn: ({ pageParam }) => {
      return FetchUtils.getAll(ResourceUrl.CLIENT_ORDER, {
        page: pageParam,
        size: 5,
        sort: "createdAt,desc",
        filter: null,
      });
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages, lastPageParam, allPageParams) => {
      if (lastPage.last) return undefined;
      return lastPage.page + 1;
    },
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

export const useGetShippingFee = () => {
  return useQuery({
    queryKey: ["client-api", "getShippingFee"],
    queryFn: () =>
      FetchUtils.get(ResourceUrl.CLIENT_ORDER + "/shipping-order/fee"),
  });
};

export const useCancelOrderApi = (code) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["client-api", "cancelOrder"],
    mutationFn: () =>
      FetchUtils.putById(ResourceUrl.CLIENT_ORDER + "/cancel", code),
    onSuccess: () =>
      queryClient.invalidateQueries(["client-api", "getOrderDetail"]),
    onError: () => NotifyUtils.simpleFailed("Hủy đơn hàng không thành công!"),
  });
};
