import ApplicationPath from "~/constants/ApplicationPath";

const ResourceUrl = {
  ADDRESS: ApplicationPath.API_PATH + "/addresses",
  PROVINCE: ApplicationPath.API_PATH + "/provinces",
  DISTRICT: ApplicationPath.API_PATH + "/districts",

  USER: ApplicationPath.API_PATH + "/users",
  ROLE: ApplicationPath.API_PATH + "/roles",

  EMPLOYEE: ApplicationPath.API_PATH + "/employees",
  OFFICE: ApplicationPath.API_PATH + "/offices",
  DEPARTMENT: ApplicationPath.API_PATH + "/departments",
  JOB_TYPE: ApplicationPath.API_PATH + "/job-types",
  JOB_LEVEL: ApplicationPath.API_PATH + "/job-levels",
  JOB_TITLE: ApplicationPath.API_PATH + "/job-titles",

  PRODUCT: ApplicationPath.API_PATH + "/products",
  CATEGORY: ApplicationPath.API_PATH + "/categories",
  BRAND: ApplicationPath.API_PATH + "/brands",
  SUPPLIER: ApplicationPath.API_PATH + "/suppliers",
  UNIT: ApplicationPath.API_PATH + "/units",
  TAG: ApplicationPath.API_PATH + "/tags",
  GUARANTEE: ApplicationPath.API_PATH + "/guarantees",
  PROPERTY: ApplicationPath.API_PATH + "/properties",
  SPECIFICATION: ApplicationPath.API_PATH + "/specifications",
  VARIANT: ApplicationPath.API_PATH + "/variants",
};

export default ResourceUrl;
