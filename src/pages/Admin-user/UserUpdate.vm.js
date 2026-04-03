import { useForm } from "@mantine/form";
import UserConfigs from "./UserConfigs";
import { zodResolver } from "mantine-form-zod-resolver";
import { useState } from "react";
import useGetAllApi from "~/hooks/admin/use-get-all-api";
import ProvinceConfigs from "../Admin-province/ProvinceConfigs";
import DistrictConfigs from "../Admin-district/DistrictConfigs";
import RoleConfigs from "../Admin-role/RoleConfigs";
import useUpdateApi from "~/hooks/admin/use-update-api";
import useGetByIdApi from "~/hooks/admin/use-get-by-id-api";
import MiscUtils from "~/utils/MiscUtils";

function useUserUpdateViewModel(id) {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: UserConfigs.initialCreateUpdateFormValues,
    validate: zodResolver(UserConfigs.createUpdateFormSchema),
  });

  const [user, setUser] = useState();
  const [provinceSelectList, setProvinceSelectList] = useState([]);
  const [districtSelectList, setDistrictSelectList] = useState([]);
  const [roleSelectList, setRoleSelectList] = useState([]);
  const [prevFormValues, setPrevFormValues] = useState();

  const updateApi = useUpdateApi(
    UserConfigs.resourceUrl,
    UserConfigs.resourceKey,
    id,
  );

  const genderSelectList = [
    { value: "M", label: "Nam" },
    { value: "F", label: "Nữ" },
  ];

  const statusSelectList = [
    { value: "1", label: "Đã kích hoạt" },
    { value: "2", label: "Chưa kích hoạt" },
  ];

  useGetByIdApi(
    UserConfigs.resourceUrl,
    UserConfigs.resourceKey,
    id,
    (user) => {
      setUser(user);
      const formValues = {
        username: user.username,
        password: "",
        fullname: user.fullname,
        email: user.email,
        phone: user.phone,
        gender: user.gender,
        address: {
          line: user.address.line || "",
          provinceId: user.address.province
            ? String(user.address.province.id)
            : null,
          districtId: user.address.district
            ? String(user.address.district.id)
            : null,
        },
        avatar: user.avatar || "",
        status: String(user.status),
        roles: user.roles.map((role) => String(role.id)),
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
    if (!MiscUtils.isEqual(prevFormValues, values)) {
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
      updateApi.mutate(data);
    }
  });

  return {
    form,
    user,
    provinceSelectList,
    districtSelectList,
    roleSelectList,
    genderSelectList,
    statusSelectList,
    handleFormSubmit,
  };
}

export default useUserUpdateViewModel;
