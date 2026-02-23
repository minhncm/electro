import { useMutation } from "@tanstack/react-query";
import queryClient from "~/lib/queryClient";
import FetchUtils from "~/utils/FetchUtils";
import NotifyUtils from "~/utils/NotifyUtils";

function useDeleteByIdApi(resourceUrl, resourceKey) {
  return useMutation({
    mutationFn: (entityIds) => FetchUtils.deleteById(resourceUrl, entityIds),
    onSuccess: () => {
      NotifyUtils.simpleSuccess("Xóa thành công");
      queryClient.invalidateQueries({ queryKey: [resourceKey, "getAll"] });
    },
    onError: () => NotifyUtils.simpleFailed("Xóa không thành công"),
  });
}

export default useDeleteByIdApi;
