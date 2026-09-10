import { useQuery } from "@tanstack/react-query";
import ResourceUrl from "~/constants/ResourceURL";
import FetchUtils from "~/utils/FetchUtils";

export const useGetRewardApi = () => {
  return useQuery({
    queryKey: ["client-api", "getWard"],
    queryFn: () => FetchUtils.get(ResourceUrl.CLIENT_REWARD),
  });
};
