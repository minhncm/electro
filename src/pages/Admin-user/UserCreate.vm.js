import { useForm } from "@mantine/form";
import UserConfigs from "./UserConfigs";
import { zodResolver } from "mantine-form-zod-resolver";
import useGetAllApi from "~/hooks/use-get-all-api";
import ProvinceConfigs from "../Admin-province/ProvinceConfigs";
import DistrictConfigs from "../Admin-district/DistrictConfigs";
import { useState } from "react";
import RoleConfigs from "../Admin-role/RoleConfigs";
import useCreateApi from "~/hooks/use-create-api";

function useUserCreateViewModel() {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: UserConfigs.initialCreateUpdateFormValues,
    validate: zodResolver(UserConfigs.createUpdateFormSchema),
  });

  const [provinceSelectList, setProvinceSelectList] = useState([]);
  const [districtSelectList, setDistrictSelectList] = useState([]);
  const [roleSelectList, setRoleSelectList] = useState([]);

  const createApi = useCreateApi(UserConfigs.resourceUrl);

  const genderSelectList = [
    { value: "M", label: "Nam" },
    { value: "F", label: "Nữ" },
  ];

  const statusSelectList = [
    { value: "1", label: "Đã kích hoạt" },
    { value: "2", label: "Chưa kích hoạt" },
  ];

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
    RoleConfigs.resourceUrl,
    RoleConfigs.resourceKey,
    { all: 1 },
    (roles) => {
      const selectList = roles.content.map((role) => ({
        value: String(role.id),
        label: role.name,
      }));
      setRoleSelectList(selectList);
    },
  );

  const handleFormSubmit = form.onSubmit((values) => {
    const data = {
      username: values.username,
      password: values.password,
      fullname: values.fullname,
      email: values.email,
      phone: values.phone,
      gender: values.gender,
      address: {
        line: values.address.line,
        provinceId: Number(values.address.provinceId),
        districtId: Number(values.address.districtId),
      },
      avatar: values.avatar,
      status: values.status,
      roleIds: values.roles.map((roleId) => Number(roleId)),
    };
    console.log(data);

    createApi.mutate(data);
  });

  return {
    form,
    provinceSelectList,
    districtSelectList,
    roleSelectList,
    genderSelectList,
    statusSelectList,
    handleFormSubmit,
  };
}

export default useUserCreateViewModel;
