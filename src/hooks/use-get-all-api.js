import { useQuery } from "@tanstack/react-query";
import useAppStore from "~/stores/use-app-store";
import FetchUtils from "~/utils/FetchUtils";
import FilterUtils from "~/utils/FilterUtils";

function useGetAllApi(resourceUrl, resourceKey, requestParams, options = {}) {
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

  const queryKey = [resourceKey, "getAll", requestParams];

  const query = useQuery({
    queryKey: queryKey,
    queryFn: () => FetchUtils.getAll(resourceUrl, requestParams),
    ...options,
  });

  return query;
}

export default useGetAllApi;
