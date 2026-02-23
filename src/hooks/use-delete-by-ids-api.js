import { useMutation } from "@tanstack/react-query";
import queryClient from "~/lib/queryClient";
import FetchUtils from "~/utils/FetchUtils";
import NotifyUtils from "~/utils/NotifyUtils";

function useDeleteByIdsApi(resourceUrl, resourceKey) {
  return useMutation({
    mutationFn: (entityIds) => FetchUtils.deleteByIds(resourceUrl, entityIds),
    onSuccess: () => {
      NotifyUtils.simpleSuccess("Xóa thành công");
      queryClient.invalidateQueries([resourceKey, "getAll"]);
    },
    onError: () => NotifyUtils.simpleFailed("Xóa không thành công"),
  });
}

export default useDeleteByIdsApi;
