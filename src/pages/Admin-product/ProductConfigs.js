import { Configs } from "~/types";
import ManagerPath from "~/constants/ManagerPath";
import ResourceUrl from "~/constants/ResourceURL";
import * as PageConfigs from "~/pages/PageConfig";

class ProductConfigs extends Configs {
  static managerPath = ManagerPath.PRODUCT;
  static resourceUrl = ResourceUrl.PRODUCT;
  static resourceKey = "products";
  static createTitle = "Thêm sản phẩm";
  static updateTitle = "Cập nhật sản phẩm";
  static manageTitle = "Quản lý sản phẩm";

  static manageTitleLinks = [
    {
      link: ManagerPath.PRODUCT,
      label: "Quản lý sản phẩm",
    },
    {
      link: ManagerPath.CATEGORY,
      label: "Quản lý danh mục sản phẩm",
    },
    {
      link: ManagerPath.BRAND,
      label: "Quản lý nhãn hiệu",
    },
    {
      link: ManagerPath.SUPPLIER,
      label: "Quản lý nhà cung cấp",
    },
    {
      link: ManagerPath.UNIT,
      label: "Quản lý đơn vị tính",
    },
    {
      link: ManagerPath.TAG,
      label: "Quản lý tag",
    },
    {
      link: ManagerPath.GUARANTEE,
      label: "Quản lý bảo hành",
    },
    {
      link: ManagerPath.PROPERTY,
      label: "Quản lý thuộc tính sản phẩm",
    },
    {
      link: ManagerPath.SPECIFICATION,
      label: "Quản lý thông số sản phẩm",
    },
  ];

  static _rawProperties = {
    ...PageConfigs.getProperties(true),
    name: {
      label: "Tên sản phẩm",
      isShowInTable: true,
    },
    code: {
      label: "Mã sản phẩm",
      isShowInTable: true,
    },
    slug: {
      label: "Slug sản phẩm",
      isShowInTable: false,
    },
    shortDescription: {
      label: "Mô tả ngắn sản phẩm",
      isShowInTable: false,
    },
    description: {
      label: "Mô tả sản phẩm",
      isShowInTable: false,
    },
    thumbnail: {
      label: "Hình đại diện",
      isShowInTable: true,
    },
    images: {
      label: "Hình ảnh sản phẩm",
      isShowInTable: false,
    },
    status: {
      label: "Trạng thái sản phẩm",
      isShowInTable: true,
    },
    "category.name": {
      label: "Tên danh mục sản phẩm",
      isShowInTable: true,
    },
    "brand.name": {
      label: "Tên nhãn hiệu",
      isShowInTable: false,
    },
    "supplier.displayName": {
      label: "Tên nhà cung cấp",
      isShowInTable: false,
    },
    "unit.name": {
      label: "Tên đơn vị tính",
      isShowInTable: false,
    },
    tags: {
      label: "Danh sách tag",
      isShowInTable: true,
    },
    specifications: {
      label: "Thông số sản phẩm",
      isShowInTable: false,
    },
    properties: {
      label: "Thuộc tính sản phẩm",
      isShowInTable: false,
    },
    variants: {
      label: "Phiên bản",
      isShowInTable: true,
    },
    weight: {
      label: "Khối lượng sản phẩm",
      isShowInTable: false,
    },
    "guarantee.name": {
      label: "Tên bảo hành sản phẩm",
      isShowInTable: false,
    },
    categoryId: {
      label: "Danh mục sản phẩm",
      isShowInTable: false,
    },
    brandId: {
      label: "Nhãn hiệu",
      isShowInTable: false,
    },
    supplierId: {
      label: "Nhà cung cấp",
      isShowInTable: false,
    },
    unitId: {
      label: "Đơn vị tính",
      isShowInTable: false,
    },
    guaranteeId: {
      label: "Bảo hành",
      isShowInTable: false,
    },
  };

  static properties = this._rawProperties;
  static initialCreateUpdateFormValues = {};
  static createUpdateFormSchema = {};
}

export default ProductConfigs;
