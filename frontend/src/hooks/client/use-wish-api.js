import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import ResourceUrl from "~/constants/ResourceURL";
import FetchUtils from "~/utils/FetchUtils";
import NotifyUtils from "~/utils/NotifyUtils";

export const useGetAllWishes = () => {
  const requestParams = {
    page: 1,
    size: 5,
    sort: "id,asc",
    filter: "",
  };
  return useQuery({
    queryKey: ["client-api", "getAllWishes"],
    queryFn: () => FetchUtils.getAll(ResourceUrl.CLIENT_WISH, requestParams),
  });
};

export const useAddWishItem = () => {
  return useMutation({
    mutationKey: ["client-api", "addWishItem"],
    mutationFn: (data) => FetchUtils.post(ResourceUrl.CLIENT_WISH, data),
    onError: (data) => {
      NotifyUtils.simpleFailed(data.message);
    },
    onSuccess: () => {
      NotifyUtils.simpleSuccess("Đã thêm vào danh sách yêu thích");
    },
  });
};

export const useDeleteWishes = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["client-api", "deleteWishes"],
    mutationFn: (ids) => FetchUtils.deleteByIds(ResourceUrl.CLIENT_WISH, ids),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["client-api", "getAllWishes"],
      });
    },
  });
};
