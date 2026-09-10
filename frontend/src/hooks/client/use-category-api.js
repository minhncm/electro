import { useQuery } from "@tanstack/react-query";
import ResourceUrl from "~/constants/ResourceURL";
import FetchUtils from "~/utils/FetchUtils";

export const useGetAllCategories = () => {
  return useQuery({
    queryKey: ["client-api", "getAllCategories"],
    queryFn: () => FetchUtils.getAll(ResourceUrl.CLIENT_CATEGORY),
  });
};

export const useGetCategoryBySlug = (slug) => {
  return useQuery({
    queryKey: ["client-api", "getCategoryBySlug", slug],
    queryFn: () => FetchUtils.getById(ResourceUrl.CLIENT_CATEGORY, slug),
  });
};

export const useGetFiltersByCategorySlug = (slug) => {
  return useQuery({
    queryKey: ["client-api", "filters", "getFiltersByCategorySlug", slug],
    queryFn: () =>
      FetchUtils.getAll(ResourceUrl.CLIENT_CATEGORY + "/" + slug + "/filters"),
  });
};
