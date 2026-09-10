import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import FetchUtils from "~/utils/FetchUtils";

function useGetByIdApi(
  resourceUrl,
  resourceKey,
  entityId,
  successCallBack,
  option = {},
) {
  const query = useQuery({
    queryKey: [resourceKey, "getById", entityId],
    queryFn: () => FetchUtils.getById(resourceUrl, entityId),
    ...option,
  });

  useEffect(() => {
    if (query.isSuccess && query.data && successCallBack) {
      successCallBack(query.data);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query.isSuccess, query.data]);
  return query;
}

export default useGetByIdApi;
