import ManagerPath from "~/constants/ManagerPath";
import ResourceUrl from "~/constants/ResourceURL";
import { Configs } from "~/types";

class ReviewConfigs extends Configs {
  static resourceUrl = ResourceUrl.REVIEW;
  static resourceKey = "reviews";
  static manageTitle = "Quản lý đánh giá sản phẩm";
  static manageTitleLinks = [
    {
      link: ManagerPath.REVIEW,
      label: "Quản lý đánh giá sản phẩm",
    },
  ];
}

export default ReviewConfigs;
