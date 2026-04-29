import { useQuery } from "@tanstack/react-query";
import ResourceUrl from "~/constants/ResourceURL";
import FetchUtils from "~/utils/FetchUtils";

export const useGetUser = () => {
  return useQuery({
    queryKey: ["client-api", "getCurrentUser"],
    queryFn: () => FetchUtils.get(ResourceUrl.CLIENT_USER_INFO),
  });
};
