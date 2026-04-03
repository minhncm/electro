import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import useAppStore from "~/stores/use-app-store";
import FetchUtils from "~/utils/FetchUtils";
import FilterUtils from "~/utils/FilterUtils";

function useGetAllApi(
  resourceUrl,
  resourceKey,
  requestParams,
  successCallBack,
  options = {},
) {
  const { activePage, activePageSize, activeFilter, searchToken } =
    useAppStore();

  if (!requestParams) {
    requestParams = {
      page: activePage,
      size: activePageSize,
      sort: FilterUtils.convertToSortRSQL(activeFilter),
      filter: FilterUtils.convertToFilterRSQL(activeFilter),
      search: searchToken,
    };
  }

  const query = useQuery({
    queryKey: [resourceKey, "getAll", requestParams],
    queryFn: () => FetchUtils.getAll(resourceUrl, requestParams),
    ...options,
  });

  useEffect(() => {
    if (query.isSuccess && query.data && successCallBack) {
      successCallBack(query.data);
    }
  }, [query.isSuccess, query.data]);

  return query;
}

export default useGetAllApi;
