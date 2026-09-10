import { useMutation } from "@tanstack/react-query";
import FetchUtils from "~/utils/FetchUtils";
import NotifyUtils from "~/utils/NotifyUtils";

function useCreateApi(resourceUrl) {
  return useMutation({
    mutationFn: (data) => FetchUtils.post(resourceUrl, data),
    onSuccess: () => NotifyUtils.simpleSuccess("Tạo thành công"),
    onError: () => NotifyUtils.simpleFailed("Tạo không thành công"),
  });
}
export default useCreateApi;
