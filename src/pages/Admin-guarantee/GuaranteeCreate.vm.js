import { useForm } from "@mantine/form";
import { zodResolver } from "mantine-form-zod-resolver";
import useCreateApi from "~/hooks/admin/use-create-api";
import * as PageConfigs from "~/pages/PageConfig";
import GuaranteeConfigs from "./GuaranteeConfigs";

function useGuaranteeCreateViewModel() {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: GuaranteeConfigs.initialCreateUpdateFormValues,
    validate: zodResolver(GuaranteeConfigs.createUpdateFormSchema),
  });

  const createApi = useCreateApi(GuaranteeConfigs.resourceUrl);

  const statusSelectList = PageConfigs.statusSelectList;

  const handleFormSubmit = form.onSubmit((values) => {
    const data = {
      name: values.name,
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

export default useGuaranteeCreateViewModel;
