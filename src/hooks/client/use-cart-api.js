import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import ResourceUrl from "~/constants/ResourceURL";
import FetchUtils from "~/utils/FetchUtils";

export const useCartApi = () => {
  return useQuery({
    queryKey: ["client-cart", "getCart"],
    queryFn: () => FetchUtils.get(ResourceUrl.CLIENT_CART),
  });
};

export const useUpdateCartItem = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["client-api", "updateCartItem"],
    mutationFn: (data) => {
      return FetchUtils.put(ResourceUrl.CLIENT_CART, data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["client-cart", "getCart"] });
    },
  });
};

export const useDeleteCartItem = () => {
  return useMutation({
    mutationKey: ["client-api", "deleteCartItem"],
    mutationFn: (ids) => {
      FetchUtils.deleteByIds(ResourceUrl.CLIENT_CART, ids);
    },
  });
};
