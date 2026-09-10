import { useForm } from "@mantine/form";
import { zodResolver } from "mantine-form-zod-resolver";
import useUpdateApi from "~/hooks/admin/use-update-api";
import * as PageConfigs from "~/pages/PageConfig";
import BrandConfigs from "./BrandConfigs";
import useGetByIdApi from "~/hooks/admin/use-get-by-id-api";
import { useState } from "react";
import MiscUtils from "~/utils/MiscUtils";

function useBrandUpdateViewModel(id) {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: BrandConfigs.initialCreateUpdateFormValues,
    validate: zodResolver(BrandConfigs.createUpdateFormSchema),
  });

  const [brand, setBrand] = useState();
  const [prevFormValues, setPrevFormValues] = useState();

  const updateApi = useUpdateApi(
    BrandConfigs.resourceUrl,
    BrandConfigs.resourceKey,
    id,
  );

  useGetByIdApi(
    BrandConfigs.resourceUrl,
    BrandConfigs.resourceKey,
    id,
    (brand) => {
      setBrand(brand);
      const formValues = {
        name: brand.name,
        code: brand.code,
        description: brand.description,
        status: String(brand.status),
      };
      form.setValues(formValues);
      setPrevFormValues(formValues);
    },
  );

  const statusSelectList = PageConfigs.statusSelectList;

  const handleFormSubmit = form.onSubmit((values) => {
    if (!MiscUtils.isEqual(prevFormValues, values)) {
      const data = {
        name: values.name,
        code: values.code,
        description: values.description,
        status: Number(values.status),
      };
      updateApi.mutate(data);
    }
  });

  return {
    form,
    brand,
    statusSelectList,
    handleFormSubmit,
  };
}

export default useBrandUpdateViewModel;
