import { useForm } from "@mantine/form";
import { zodResolver } from "mantine-form-zod-resolver";
import { useState } from "react";
import useGetByIdApi from "~/hooks/use-get-by-id-api";
import useUpdateApi from "~/hooks/use-update-api";
import * as PageConfigs from "~/pages/PageConfig";
import MiscUtils from "~/utils/MiscUtils";
import GuaranteeConfigs from "./GuaranteeConfigs";

function useGuaranteeUpdateViewModel(id) {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: GuaranteeConfigs.initialCreateUpdateFormValues,
    validate: zodResolver(GuaranteeConfigs.createUpdateFormSchema),
  });

  const [guarantee, setGuarantee] = useState();
  const [prevFormValues, setPrevFormValues] = useState();

  const updateApi = useUpdateApi(
    GuaranteeConfigs.resourceUrl,
    GuaranteeConfigs.resourceKey,
    id,
  );

  useGetByIdApi(
    GuaranteeConfigs.resourceUrl,
    GuaranteeConfigs.resourceKey,
    id,
    (guarantee) => {
      setGuarantee(guarantee);
      const formValues = {
        name: guarantee.name,
        description: guarantee.description,
        status: String(guarantee.status),
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
        description: values.description,
        status: Number(values.status),
      };
      updateApi.mutate(data);
    }
  });

  return {
    form,
    guarantee,
    statusSelectList,
    handleFormSubmit,
  };
}

export default useGuaranteeUpdateViewModel;
