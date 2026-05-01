import { useForm } from "@mantine/form";
import { zodResolver } from "mantine-form-zod-resolver";
import { useState } from "react";
import z from "zod";
import ResourceUrl from "~/constants/ResourceURL";
import useGetAllApi from "~/hooks/admin/use-get-all-api";
import { useUpdateUser } from "~/hooks/client/use-user-api";
import useAuthStore from "~/stores/use-auth-store";
import MessageUtils from "~/utils/MessageUtils";
import DistrictConfigs from "../Admin-district/DistrictConfigs";
import ProvinceConfigs from "../Admin-province/ProvinceConfigs";
import WardConfigs from "../Admin-ward/WardConfigs";

function useClientSettingPersonalViewModel() {
  const formSchema = z.object({
    username: z.string().trim().min(2, MessageUtils.min("Tên tài khoản", 2)),
    fullname: z.string(),
    gender: z.string(),
    address: z.object({
      line: z.string(),
      provinceId: z.string(),
      districtId: z.string(),
      wardId: z.string(),
    }),
  });

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

  const { user } = useAuthStore();

  const initialFormValues = {
    username: user?.username,
    fullname: user?.fullname,
    gender: user?.gender,
    address: {
      line: user?.address.line,
      provinceId: user?.address.province?.id
        ? String(user?.address.province?.id)
        : null,
      districtId: user?.address.district?.id
        ? String(user?.address.district?.id)
        : null,
      wardId: user?.address.ward?.id ? String(user?.address.ward?.id) : null,
    },
  };

  const form = useForm({
    mode: "uncontrolled",
    initialValues: initialFormValues,
    validate: zodResolver(formSchema),
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

  const updatePersonalSettingApi = useUpdateUser(
    ResourceUrl.CLIENT_USER_PERSONAL,
  );

  const handleFormSubmit = form.onSubmit((formValues) => {
    const requestBody = {
      username: formValues.username,
      fullname: formValues.fullname,
      gender: formValues.gender,
      address: {
        line: formValues.address.line,
        provinceId: Number(formValues.address.provinceId),
        districtId: Number(formValues.address.districtId),
        wardId: Number(formValues.address.wardId),
      },
    };

    updatePersonalSettingApi.mutate(requestBody);
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

export default useClientSettingPersonalViewModel;
