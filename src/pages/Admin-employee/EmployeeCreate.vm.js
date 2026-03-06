import { useForm } from "@mantine/form";
import EmployeeConfigs from "./EmployeeConfigs";
import { zodResolver } from "mantine-form-zod-resolver";
import useCreateApi from "~/hooks/use-create-api";
import { useState } from "react";
import useGetAllApi from "~/hooks/use-get-all-api";
import ProvinceConfigs from "../Admin-province/ProvinceConfigs";
import DistrictConfigs from "../Admin-district/DistrictConfigs";
import OfficeConfigs from "../Admin-office/OfficeConfigs";
import DepartmentConfigs from "../Admin-department/DepartmentConfigs";
import JobTypeConfigs from "../Admin-jobType/JobTypeConfigs";
import JobLevelConfigs from "../Admin-jobLevel/JobLevelConfigs";
import JobTitleConfigs from "../Admin-jobTitle/JobTitleConfigs";

function useEmployeeCreateViewModel() {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: EmployeeConfigs.initialCreateUpdateFormValues,
    validate: zodResolver(EmployeeConfigs.createUpdateFormSchema),
  });

  const [provinceSelectList, setProvinceSelectList] = useState([]);
  const [districtSelectList, setDistrictSelectList] = useState([]);
  const [officeSelectList, setOfficeSelectList] = useState([]);
  const [departmentSelectList, setDepartmentSelectList] = useState([]);
  const [jobTypeSelectList, setJobTypeSelectList] = useState([]);
  const [jobLevelSelectList, setJobLevelSelectList] = useState([]);
  const [jobTitleSelectList, setJobTitleSelectList] = useState([]);

  const createApi = useCreateApi(EmployeeConfigs.resourceUrl);

  useGetAllApi(
    ProvinceConfigs.resourceUrl,
    ProvinceConfigs.resourceKey,
    {
      all: 1,
    },
    (provinces) => {
      const selectList = provinces.content.map((province) => ({
        value: String(province.id),
        label: province.name,
      }));

      setProvinceSelectList(selectList);
    },
  );

  useGetAllApi(
    DistrictConfigs.resourceUrl,
    DistrictConfigs.resourceKey,
    {
      all: 1,
    },
    (districts) => {
      const selectList = districts.content.map((district) => ({
        value: String(district.id),
        label: district.name,
      }));

      setDistrictSelectList(selectList);
    },
  );

  useGetAllApi(
    OfficeConfigs.resourceUrl,
    OfficeConfigs.resourceKey,
    {
      all: 1,
    },
    (offices) => {
      const selectList = offices.content.map((office) => ({
        value: String(office.id),
        label: office.name,
      }));

      setOfficeSelectList(selectList);
    },
  );

  useGetAllApi(
    DepartmentConfigs.resourceUrl,
    DepartmentConfigs.resourceKey,
    {
      all: 1,
    },
    (departments) => {
      const selectList = departments.content.map((department) => ({
        value: String(department.id),
        label: department.name,
      }));

      setDepartmentSelectList(selectList);
    },
  );

  useGetAllApi(
    JobTypeConfigs.resourceUrl,
    JobTypeConfigs.resourceKey,
    {
      all: 1,
    },
    (jobTypes) => {
      const selectList = jobTypes.content.map((jobType) => ({
        value: String(jobType.id),
        label: jobType.name,
      }));

      setJobTypeSelectList(selectList);
    },
  );

  useGetAllApi(
    JobLevelConfigs.resourceUrl,
    JobLevelConfigs.resourceKey,
    {
      all: 1,
    },
    (jobLevels) => {
      const selectList = jobLevels.content.map((jobLevel) => ({
        value: String(jobLevel.id),
        label: jobLevel.name,
      }));

      setJobLevelSelectList(selectList);
    },
  );

  useGetAllApi(
    JobTitleConfigs.resourceUrl,
    JobTitleConfigs.resourceKey,
    {
      all: 1,
    },
    (jobTitles) => {
      const selectList = jobTitles.content.map((jobTitle) => ({
        value: String(jobTitle.id),
        label: jobTitle.name,
      }));

      setJobTitleSelectList(selectList);
    },
  );

  const genderSelectList = [
    { value: "M", label: "Nam" },
    { value: "F", label: "Nữ" },
  ];

  const statusSelectList = [
    { value: "1", label: "Đã kích hoạt" },
    { value: "2", label: "Chưa kích hoạt" },
  ];

  const roleSelectList = [
    {
      value: String(EmployeeConfigs.EMPLOYEE_ROLE_ID),
      label: "Nhân viên",
    },
  ];

  const handleFormSubmit = form.onSubmit((values) => {
    const data = {
      user: {
        username: values.user.username,
        password: values.user.password,
        fullname: values.user.fullname,
        email: values.user.email,
        phone: values.user.phone,
        gender: values.user.gender,
        address: {
          line: values.user.address.line,
          provinceId: Number(values.user.address.provinceId),
          districtId: Number(values.user.address.districtId),
        },
        avatar: values.user.avatar,
        status: Number(values.user.status),
        roleIds: [EmployeeConfigs.EMPLOYEE_ROLE_ID],
      },
      officeId: values.officeId,
      departmentId: values.departmentId,
      jobTypeId: values.jobTypeId,
      jobLevelId: values.jobLevelId,
      jobTitleId: values.jobTitleId,
    };

    createApi.mutate(data);
  });

  return {
    form,
    provinceSelectList,
    districtSelectList,
    officeSelectList,
    departmentSelectList,
    jobTypeSelectList,
    jobLevelSelectList,
    jobTitleSelectList,
    genderSelectList,
    statusSelectList,
    roleSelectList,
    handleFormSubmit,
  };
}

export default useEmployeeCreateViewModel;
