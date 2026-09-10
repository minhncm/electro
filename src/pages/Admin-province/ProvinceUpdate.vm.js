import { useForm } from "@mantine/form";
import ProvinceConfigs from "./ProvinceConfigs";
import { zodResolver } from "mantine-form-zod-resolver";
import { useState } from "react";
import useGetByIdApi from "~/hooks/admin/use-get-by-id-api";
import MiscUtils from "~/utils/MiscUtils";
import useUpdateApi from "~/hooks/admin/use-update-api";

function useProvinceUpdateViewModel(id) {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: ProvinceConfigs.initialCreateUpdateFormValues,
    validate: zodResolver(ProvinceConfigs.createUpdateFormSchema),
  });

  const [province, setProvince] = useState();
  const [prevFormValue, setPrevFormValue] = useState();

  const updateApi = useUpdateApi(
    ProvinceConfigs.resourceUrl,
    ProvinceConfigs.resourceKey,
    id,
  );

  useGetByIdApi(
    ProvinceConfigs.resourceUrl,
    ProvinceConfigs.resourceKey,
    id,
    (province) => {
      setProvince(province);
      const formValues = {
        name: province.name,
        code: province.code,
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
      };

      updateApi.mutate(data);
    }
  });

  return {
    province,
    form,
    handleFormSubmit,
  };
}

export default useProvinceUpdateViewModel;
