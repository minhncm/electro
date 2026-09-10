import { useMutation, useQuery } from "@tanstack/react-query";
import ResourceUrl from "~/constants/ResourceURL";
import useAuthStore from "~/stores/use-auth-store";
import FetchUtils from "~/utils/FetchUtils";
import NotifyUtils from "~/utils/NotifyUtils";

export const useGetUser = () => {
  return useQuery({
    queryKey: ["client-api", "getCurrentUser"],
    queryFn: () => FetchUtils.get(ResourceUrl.CLIENT_USER_INFO),
  });
};

export const useUpdateUser = (resourceUrl) => {
  const { setUser } = useAuthStore();
  return useMutation({
    mutationKey: ["client-api", "updateUser"],
    mutationFn: (data) => FetchUtils.patch(resourceUrl, data),
    onSuccess: (data) => {
      setUser(data);
      NotifyUtils.simpleSuccess("Cập nhật thành công");
    },
    onError: (data) => NotifyUtils.simpleFailed(data.message),
  });
};
