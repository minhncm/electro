import { useQuery } from "@tanstack/react-query";
import ResourceUrl from "~/constants/ResourceURL";
import useClientCategoryStore from "~/stores/use-client-category-store";
import FetchUtils from "~/utils/FetchUtils";

export const useGetAllProducts = (requestParams) => {
  if (!requestParams) {
    requestParams = {
      page: 1,
      size: 12,
      filter: null,
      sort: "latest",
      search: null,
      saleable: true,
    };
  }

  return useQuery({
    queryKey: ["client-api", "getAllProducts", requestParams],
    queryFn: () => FetchUtils.getAll(ResourceUrl.CLIENT_PRODUCT, requestParams),
  });
};

export const useGetProductBySlug = (slug) => {
  return useQuery({
    queryKey: ["client-api", "getProductBySlug", slug],
    queryFn: () => FetchUtils.getById(ResourceUrl.CLIENT_PRODUCT, slug),
  });
};

export const useGetProductsByCategorySlug = (categorySlug) => {
  const {
    activePage,
    activeBrandFilter,
    activePriceFilter,
    activeSort,
    activeSearch,
    activeSaleable,
  } = useClientCategoryStore();

  const requestParams = {
    page: activePage,
    size: 9,
    filter: [
      `category.slug==${categorySlug}`,
      activeBrandFilter,
      activePriceFilter,
    ]
      .filter(Boolean)
      .join(";"),
    sort: activeSort,
    search: activeSearch,
    saleable: activeSaleable,
  };

  return useQuery({
    queryKey: ["client-api", "products", "getAllProducts", requestParams],
    queryFn: () => FetchUtils.getAll(ResourceUrl.CLIENT_PRODUCT, requestParams),
  });
};

export const useGetReviewsByProductSlug = (productSlug, requestParams) => {
  return useQuery({
    queryKey: ["client-api", "reviews", "getReviewsByProductSlug", productSlug],
    queryFn: () =>
      FetchUtils.getAll(
        ResourceUrl.CLIENT_REVIEW_PRODUCT + "/" + productSlug,
        requestParams,
      ),
  });
};
