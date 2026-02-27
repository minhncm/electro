import { useForm } from "@mantine/form";
import DistrictConfigs from "./DistrictConfigs";
import { zodResolver } from "mantine-form-zod-resolver";
import useCreateApi from "~/hooks/use-create-api";
import { useState } from "react";
import useGetAllApi from "~/hooks/use-get-all-api";
import ProvinceConfigs from "../Admin-province/ProvinceConfigs";

function useDistrictCreateViewModel() {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: DistrictConfigs.initialCreateUpdateFormValues,
    validate: zodResolver(DistrictConfigs.createUpdateFormSchema),
  });

  const [provinceSelectList, setProviceSelectList] = useState();
  const createApi = useCreateApi(DistrictConfigs.resourceUrl);

  useGetAllApi(
    ProvinceConfigs.resourceUrl,
    ProvinceConfigs.resourceKey,
    { all: 1 },
    (provinces) => {
      const selectList = provinces.content.map((province) => ({
        value: String(province.id),
        label: province.name,
      }));
      setProviceSelectList(selectList);
    },
  );

  const handleFormSubmit = form.onSubmit((values) => {
    const data = {
      name: values.name,
      code: values.code,
      provinceId: Number(values.provinceId),
    };
    createApi.mutate(data);
  });

  return {
    provinceSelectList,
    form,
    handleFormSubmit,
  };
}

export default useDistrictCreateViewModel;
