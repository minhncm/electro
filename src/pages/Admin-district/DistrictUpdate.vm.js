import { useForm } from "@mantine/form";
import DistrictConfigs from "./DistrictConfigs";
import { zodResolver } from "mantine-form-zod-resolver";
import { useState } from "react";
import useUpdateApi from "~/hooks/use-update-api";
import useGetByIdApi from "~/hooks/use-get-by-id-api";
import MiscUtils from "~/utils/MiscUtils";
import ProvinceConfigs from "../Admin-province/ProvinceConfigs";
import useGetAllApi from "~/hooks/use-get-all-api";

function useDistrictUpdateViewModel(id) {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: DistrictConfigs.initialCreateUpdateFormValues,
    validate: zodResolver(DistrictConfigs.createUpdateFormSchema),
  });

  const [district, setDistrict] = useState();
  const [prevFormValue, setPrevFormValue] = useState();
  const [provinceSelectList, setProviceSelectList] = useState();

  const updateApi = useUpdateApi(
    DistrictConfigs.resourceUrl,
    DistrictConfigs.resourceKey,
    id,
  );

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

  useGetByIdApi(
    DistrictConfigs.resourceUrl,
    DistrictConfigs.resourceKey,
    id,
    (district) => {
      setDistrict(district);
      const formValues = {
        name: district.name,
        code: district.code,
        provinceId: String(district.province.id),
      };

      form.setValues(formValues);
      setPrevFormValue(formValues);
    },
  );

  const handleFormSubmit = form.onSubmit((values) => {
    if (!MiscUtils.isEqual(prevFormValue, values)) {
      const data = {
        name: values.name,
        code: values.code,
        provinceId: Number(values.provinceId),
      };

      updateApi.mutate(data);
    }
  });

  return {
    district,
    provinceSelectList,
    form,
    handleFormSubmit,
  };
}

export default useDistrictUpdateViewModel;
