import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import ResourceUrl from "~/constants/ResourceURL";
import FetchUtils from "~/utils/FetchUtils";
import NotifyUtils from "~/utils/NotifyUtils";

export const useCartApi = () => {
  return useQuery({
    queryKey: ["client-cart", "getCart"],
    queryFn: () => FetchUtils.get(ResourceUrl.CLIENT_CART),
  });
};

export const useAddCartItem = () => {
  return useMutation({
    mutationKey: ["client-api", "addCartItem"],
    mutationFn: (data) => FetchUtils.post(ResourceUrl.CLIENT_CART, data),
    onError: (data) => NotifyUtils.simpleFailed(data.message),
    onSuccess: () => NotifyUtils.simpleSuccess("Thêm giỏ hàng thành công"),
  });
};

export const useUpdateCartItem = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["client-api", "updateCartItem"],
    mutationFn: (data) => FetchUtils.put(ResourceUrl.CLIENT_CART, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["client-cart", "getCart"] });
    },
  });
};

export const useDeleteCartItem = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["client-api", "deleteCartItem"],
    mutationFn: (ids) => FetchUtils.deleteByIds(ResourceUrl.CLIENT_CART, ids),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["client-cart", "getCart"] });
    },
  });
};
