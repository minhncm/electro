import { useForm } from "@mantine/form";
import { zod4Resolver } from "mantine-form-zod-resolver";
import ClientSignupConfigs from "./ClientSignupConfigs";
import useGetAllApi from "~/hooks/admin/use-get-all-api";
import ProvinceConfigs from "../Admin-province/ProvinceConfigs";
import DistrictConfigs from "../Admin-district/DistrictConfigs";
import { useState } from "react";
import WardConfigs from "../Admin-ward/WardConfigs";
import { useRegisterUser } from "~/hooks/client/use-auth-api";
import useAuthStore from "~/stores/use-auth-store";
import NotifyUtils from "~/utils/NotifyUtils";

function useClientSignupStepOneViewModel(nextStep) {
  const { updateCurrentSignupUserId } = useAuthStore();

  const form = useForm({
    initialValues: ClientSignupConfigs.initialFormValuesOfStepOne,
    validate: zod4Resolver(ClientSignupConfigs.formSchemaOfStepOne),
  });

  const [provinceSelectList, setProvinceSelectList] = useState([]);
  const [districtSelectList, setDistrictSelectList] = useState([]);
  const [wardSelectList, setWardSelectList] = useState([]);

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
      filter: `province.id==${form.values.address.provinceId || 0}`,
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
    WardConfigs.resourceUrl,
    WardConfigs.resourceKey,
    {
      all: 1,
      filter: `district.id==${form.values.address.districtId || 0}`,
    },
    (wards) => {
      const selectList = wards.content.map((ward) => ({
        value: String(ward.id),
        label: ward.name,
      }));

      setWardSelectList(selectList);
    },
  );

  const genderSelectList = [
    {
      value: "M",
      label: "Nam",
    },
    {
      value: "F",
      label: "Nữ",
    },
  ];

  const registerUserApi = useRegisterUser();

  const handleFormSubmit = form.onSubmit((formValues) => {
    const requestBody = {
      username: formValues.username,
      password: formValues.password,
      fullname: formValues.fullname,
      email: formValues.email,
      phone: formValues.phone,
      gender: formValues.gender,
      address: {
        line: formValues.address.line,
        provinceId: Number(formValues.address.provinceId),
        districtId: Number(formValues.address.districtId),
        wardId: Number(formValues.address.wardId),
      },
    };

    registerUserApi.mutate(requestBody, {
      onSuccess: (registrationResponse) => {
        NotifyUtils.simpleSuccess("Tạo tài khoản thành công");
        updateCurrentSignupUserId(registrationResponse.userId);
        nextStep();
      },
      onError: () => NotifyUtils.simpleFailed("Tạo tài khoản không thành công"),
    });
  });

  return {
    form,
    provinceSelectList,
    districtSelectList,
    wardSelectList,
    genderSelectList,
    handleFormSubmit,
  };
}

export default useClientSignupStepOneViewModel;
