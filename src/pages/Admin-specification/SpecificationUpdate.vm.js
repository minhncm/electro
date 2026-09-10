import { useForm } from "@mantine/form";
import { zodResolver } from "mantine-form-zod-resolver";
import { useState } from "react";
import useGetByIdApi from "~/hooks/admin/use-get-by-id-api";
import useUpdateApi from "~/hooks/admin/use-update-api";
import * as PageConfigs from "~/pages/PageConfig";
import MiscUtils from "~/utils/MiscUtils";
import SpecificationConfigs from "./SpecificationConfigs";

function useSpecificationUpdateViewModel(id) {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: SpecificationConfigs.initialCreateUpdateFormValues,
    validate: zodResolver(SpecificationConfigs.createUpdateFormSchema),
  });

  const [specification, setSpecification] = useState();
  const [prevFormValues, setPrevFormValues] = useState();

  const updateApi = useUpdateApi(
    SpecificationConfigs.resourceUrl,
    SpecificationConfigs.resourceKey,
    id,
  );

  useGetByIdApi(
    SpecificationConfigs.resourceUrl,
    SpecificationConfigs.resourceKey,
    id,
    (specification) => {
      setSpecification(specification);
      const formValues = {
        name: specification.name,
        code: specification.code,
        description: specification.description,
        status: String(specification.status),
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
    specification,
    statusSelectList,
    handleFormSubmit,
  };
}

export default useSpecificationUpdateViewModel;
