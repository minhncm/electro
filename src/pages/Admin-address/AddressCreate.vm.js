import { useForm } from "@mantine/form";
import AddressConfigs from "./AddressConfigs";
import { zodResolver } from "mantine-form-zod-resolver";
import { useState } from "react";
import useGetAllApi from "~/hooks/use-get-all-api";
import ProvinceConfigs from "../Admin-province/ProvinceConfigs";
import DistrictConfigs from "../Admin-district/DistrictConfigs";
import useCreateApi from "~/hooks/use-create-api";

function useAddressCreateViewModel() {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: AddressConfigs.initialCreateUpdateFormValues,
    validate: zodResolver(AddressConfigs.createUpdateFormSchema),
  });

  const [provinceSelectList, setProvinceSelectList] = useState([]);
  const [districtSelectList, setDistrictSelectList] = useState([]);

  const createApi = useCreateApi(AddressConfigs.resourceUrl);

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

  const handleFormSubmit = form.onSubmit((values) => {
    const data = {
      line: values.line || null,
      provinceId: Number(values.provinceId) || null,
      districtId: Number(values.districtId) || null,
      wardId: null,
    };
    createApi.mutate(data);
  });

  return {
    form,
    handleFormSubmit,
    provinceSelectList,
    districtSelectList,
  };
}

export default useAddressCreateViewModel;
