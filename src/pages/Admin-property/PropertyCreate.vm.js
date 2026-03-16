import { useForm } from "@mantine/form";
import { zodResolver } from "mantine-form-zod-resolver";
import useCreateApi from "~/hooks/use-create-api";
import * as PageConfigs from "~/pages/PageConfig";
import PropertyConfigs from "./PropertyConfigs";

function usePropertyCreateViewModel() {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: PropertyConfigs.initialCreateUpdateFormValues,
    validate: zodResolver(PropertyConfigs.createUpdateFormSchema),
  });

  const createApi = useCreateApi(PropertyConfigs.resourceUrl);

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

export default usePropertyCreateViewModel;
