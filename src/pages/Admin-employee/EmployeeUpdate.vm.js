import { useForm } from "@mantine/form";
import { zodResolver } from "mantine-form-zod-resolver";
import { useState } from "react";
import useGetAllApi from "~/hooks/use-get-all-api";
import useGetByIdApi from "~/hooks/use-get-by-id-api";
import useUpdateApi from "~/hooks/use-update-api";
import MiscUtils from "~/utils/MiscUtils";
import DepartmentConfigs from "../Admin-department/DepartmentConfigs";
import DistrictConfigs from "../Admin-district/DistrictConfigs";
import JobLevelConfigs from "../Admin-jobLevel/JobLevelConfigs";
import JobTitleConfigs from "../Admin-jobTitle/JobTitleConfigs";
import JobTypeConfigs from "../Admin-jobType/JobTypeConfigs";
import OfficeConfigs from "../Admin-office/OfficeConfigs";
import ProvinceConfigs from "../Admin-province/ProvinceConfigs";
import EmployeeConfigs from "./EmployeeConfigs";

function useEmployeeUpdateViewModel(id) {
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
  const [employee, setEmployee] = useState();
  const [prevFormValues, setPrevFormValues] = useState();

  const updateApi = useUpdateApi(
    EmployeeConfigs.resourceUrl,
    EmployeeConfigs.resourceKey,
    id,
  );

  useGetByIdApi(
    EmployeeConfigs.resourceUrl,
    EmployeeConfigs.resourceKey,
    id,
    (employee) => {
      setEmployee(employee);
      const formValues = {
        user: {
          username: employee.user.username,
          password: "",
          fullname: employee.user.fullname,
          email: employee.user.email,
          phone: employee.user.phone,
          gender: employee.user.gender,
          address: {
            line: employee.user.address.line,
            provinceId: employee.user.address.province
              ? String(employee.user.address.province.id)
              : null,
            districtId: employee.user.address.district
              ? String(employee.user.address.district.id)
              : null,
          },
          avatar: employee.user.address.avatar,
          status: String(employee.user.address.status),
          roles: employee.user.roles.map((role) => String(role.id)),
        },
        officeId: employee.user.office ? String(employee.user.office.id) : null,
        departmentId: employee.user.department
          ? String(employee.user.department.id)
          : null,
        jobTypeId: employee.user.jobType
          ? String(employee.user.jobType.id)
          : null,
        jobLevelId: employee.user.jobLevel
          ? String(employee.user.jobLevel.id)
          : null,
        jobTitleId: employee.user.jobTitle
          ? String(employee.user.jobTitle.id)
          : null,
      };

      form.setValues(formValues);
      setPrevFormValues(formValues);
    },
  );

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
    if (!MiscUtils.isEqual(prevFormValues, values)) {
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

      updateApi.mutate(data);
    }
  });

  return {
    form,
    employee,
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

export default useEmployeeUpdateViewModel;
