import { useForm } from "@mantine/form";
import { zodResolver } from "mantine-form-zod-resolver";
import useCreateApi from "~/hooks/use-create-api";
import * as PageConfigs from "~/pages/PageConfig";
import SpecificationConfigs from "./SpecificationConfigs";

function useSpecificationCreateViewModel() {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: SpecificationConfigs.initialCreateUpdateFormValues,
    validate: zodResolver(SpecificationConfigs.createUpdateFormSchema),
  });

  const createApi = useCreateApi(SpecificationConfigs.resourceUrl);

  const statusSelectList = PageConfigs.statusSelectList;

  const handleFormSubmit = form.onSubmit((values) => {
    const data = {
      name: values.name,
      code: values.code,
      description: values.description,
      status: Number(values.status),
    };
    createApi.mutate(data);
  });

  return {
    form,
    statusSelectList,
    handleFormSubmit,
  };
}

export default useSpecificationCreateViewModel;
