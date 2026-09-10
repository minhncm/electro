import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import ResourceUrl from "~/constants/ResourceURL";
import FetchUtils from "~/utils/FetchUtils";
import NotifyUtils from "~/utils/NotifyUtils";

export const useGetRoomApi = () => {
  return useQuery({
    queryKey: ["client-api", "chat", "getRoom"],
    queryFn: () => FetchUtils.get(ResourceUrl.CLIENT_CHAT + "/get-room"),
  });
};

export const useCreateRoomApi = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["client-api", "chat", "createRoom"],
    mutationFn: () => FetchUtils.post(ResourceUrl.CLIENT_CHAT + "/create-room"),
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ["client-api", "chat", "getRoom"],
      }),
    onError: () =>
      NotifyUtils.simpleFailed("Khởi tạo yêu cầu tư vấn không thành công"),
  });
};
