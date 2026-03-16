import { useForm } from "@mantine/form";
import { zodResolver } from "mantine-form-zod-resolver";
import { useState } from "react";
import useGetByIdApi from "~/hooks/use-get-by-id-api";
import useUpdateApi from "~/hooks/use-update-api";
import * as PageConfigs from "~/pages/PageConfig";
import MiscUtils from "~/utils/MiscUtils";
import PropertyConfigs from "./PropertyConfigs";

function usePropertyUpdateViewModel(id) {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: PropertyConfigs.initialCreateUpdateFormValues,
    validate: zodResolver(PropertyConfigs.createUpdateFormSchema),
  });

  const [property, setProperty] = useState();
  const [prevFormValues, setPrevFormValues] = useState();

  const updateApi = useUpdateApi(
    PropertyConfigs.resourceUrl,
    PropertyConfigs.resourceKey,
    id,
  );

  useGetByIdApi(
    PropertyConfigs.resourceUrl,
    PropertyConfigs.resourceKey,
    id,
    (property) => {
      setProperty(property);
      const formValues = {
        name: property.name,
        code: property.code,
        description: property.description,
        status: String(property.status),
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
    property,
    statusSelectList,
    handleFormSubmit,
  };
}

export default usePropertyUpdateViewModel;
