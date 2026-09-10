import {
  keepPreviousData,
  QueryCache,
  QueryClient,
} from "@tanstack/react-query";
import NotifyUtils from "~/utils/NotifyUtils";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
      refetchOnWindowFocus: false,
      placeholderData: keepPreviousData,
    },
  },
  queryCache: new QueryCache({
    onError: (error) =>
      NotifyUtils.simpleFailed(
        `Lỗi ${error.statusCode || "chưa biết"}: Lấy dữ liệu không thành công`,
      ),
  }),
});

export default queryClient;
