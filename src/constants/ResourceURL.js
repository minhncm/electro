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
};

export default ResourceUrl;
