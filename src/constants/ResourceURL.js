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

  CUSTOMER: ApplicationPath.API_PATH + "/customers",
  CUSTOMER_GROUP: ApplicationPath.API_PATH + "/customer-groups",
  CUSTOMER_STATUS: ApplicationPath.API_PATH + "/customer-status",
  CUSTOMER_RESOURCE: ApplicationPath.API_PATH + "/customer-resources",

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

  PRODUCT_INVENTORY: ApplicationPath.API_PATH + "/product-inventories",
  VARIANT_INVENTORY: ApplicationPath.API_PATH + "/variant-inventories",
  WAREHOUSE: ApplicationPath.API_PATH + "/warehouses",
  PURCHASE_ORDER: ApplicationPath.API_PATH + "/purchase-orders",
  PURCHASE_ORDER_VARIANT: ApplicationPath.API_PATH + "/purchase-order-variants",
  DESTINATION: ApplicationPath.API_PATH + "/destinations",
  DOCKET: ApplicationPath.API_PATH + "/dockets",
  DOCKET_VARIANT: ApplicationPath.API_PATH + "/docket-variants",
  DOCKET_REASON: ApplicationPath.API_PATH + "/docket-reasons",
  COUNT: ApplicationPath.API_PATH + "/counts",
  COUNT_VARIANT: ApplicationPath.API_PATH + "/count-variants",
  TRANSFER: ApplicationPath.API_PATH + "/transfers",
  TRANSFER_VARIANT: ApplicationPath.API_PATH + "/transfer-variants",

  ORDER: ApplicationPath.API_PATH + "/orders",
  ORDER_VARIANT: ApplicationPath.API_PATH + "/order-variants",
  ORDER_RESOURCE: ApplicationPath.API_PATH + "/order-resources",
  ORDER_CANCELLATION_REASON:
    ApplicationPath.API_PATH + "/order-cancellation-reasons",

  WAYBILL: ApplicationPath.API_PATH + "/waybills",

  REVIEW: ApplicationPath.API_PATH + "/reviews",

  REWARD_STRATEGY: ApplicationPath.API_PATH + "/reward-strategies",

  VOUCHER: ApplicationPath.API_PATH + "/vouchers",
  PAYMENT_METHOD: ApplicationPath.API_PATH + "/payment-methods",
  PROMOTION: ApplicationPath.API_PATH + "/promotions",
};

export default ResourceUrl;
