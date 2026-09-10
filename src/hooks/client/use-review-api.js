import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import ResourceUrl from "~/constants/ResourceURL";
import FetchUtils from "~/utils/FetchUtils";

export const useGetAllReviewsByUser = (page = 1) => {
  const requestParams = {
    page,
    size: 5,
    sort: "id,asc",
    filter: "",
  };
  return useQuery({
    queryKey: ["client-api", "getAllReviewsByUser"],
    queryFn: () => FetchUtils.getAll(ResourceUrl.CLIENT_REVIEW, requestParams),
  });
};

export const useDeleteReviews = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["client-api", "deleteReviews"],
    mutationFn: (ids) => FetchUtils.deleteByIds(ResourceUrl.CLIENT_REVIEW, ids),
    onSuccess: () => {
      queryClient.invalidateQueries(["client-api", "getAllReviewsByUser"]);
    },
  });
};

export const useCreateReviewApi = () => {
  return useMutation({
    mutationKey: ["client-api", "createReviewApi"],
    mutationFn: (request) =>
      FetchUtils.post(ResourceUrl.CLIENT_REVIEW, request),
  });
};
