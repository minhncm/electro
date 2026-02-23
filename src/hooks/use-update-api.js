import { useMutation } from "@tanstack/react-query";
import queryClient from "~/lib/queryClient";
import FetchUtils from "~/utils/FetchUtils";
import NotifyUtils from "~/utils/NotifyUtils";

function useUpdateApi(resourceUrl, resourceKey, entityId) {
  return useMutation({
    mutationFn: (data) => FetchUtils.update(resourceUrl, entityId, data),
    onSuccess: () => {
      NotifyUtils.simpleSuccess("Cập nhật thành công");
      queryClient.invalidateQueries({
        queryKey: [resourceKey, "getById", entityId],
      });
      queryClient.invalidateQueries({
        queryKey: [resourceKey, "getAll"],
      });
    },
    onError: () => NotifyUtils.simpleFailed("Cập nhật không thành công"),
  });
}
export default useUpdateApi;
