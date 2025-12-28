import { Configs } from "~/types";
import ManagerPath from "~/constants/ManagerPath";
import ResourceUrl from "~/constants/ResourceURL";
import * as PageConfigs from "~/pages/PageConfig";
import ProductConfigs from "~/pages/Admin-product/ProductConfigs";

class CategoryConfigs extends Configs {
  static managerPath = ManagerPath.CATEGORY;
  static resourceUrl = ResourceUrl.CATEGORY;
  static resourceKey = "categories";
  static createTitle = "Thêm danh mục sản phẩm";
  static updateTitle = "Cập nhật danh mục sản phẩm";
  static manageTitle = "Quản lý danh mục sản phẩm";

  static manageTitleLinks = ProductConfigs.manageTitleLinks;

  static _rawProperties = {
    ...PageConfigs.getProperties(true),
    name: {
      label: "Tên danh mục sản phẩm",
      isShowInTable: true,
    },
    slug: {
      label: "Slug danh mục sản phẩm",
      isShowInTable: true,
    },
    description: {
      label: "Mô tả danh mục sản phẩm",
      isShowInTable: false,
    },
    thumbnail: {
      label: "Hình đại diện",
      isShowInTable: true,
    },
    "parentCategory.name": {
      label: "Tên danh mục cha",
      isShowInTable: true,
    },
    status: {
      label: "Trạng thái danh mục sản phẩm",
      isShowInTable: true,
    },
    parentCategoryId: {
      label: "Danh mục cha",
      isShowInTable: false,
    },
  };

  static properties = this._rawProperties;
  static initialCreateUpdateFormValues = {};
  static createUpdateFormSchema = {};
}

export default CategoryConfigs;
