import { useForm } from "@mantine/form";
import { zodResolver } from "mantine-form-zod-resolver";
import useCreateApi from "~/hooks/admin/use-create-api";
import * as PageConfigs from "~/pages/PageConfig";
import CustomerStatusConfigs from "./CustomerStatusConfigs";

function useCustomerStatusCreateViewModel() {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: CustomerStatusConfigs.initialCreateUpdateFormValues,
    validate: zodResolver(CustomerStatusConfigs.createUpdateFormSchema),
  });

  const createApi = useCreateApi(CustomerStatusConfigs.resourceUrl);

  const statusSelectList = PageConfigs.statusSelectList;
  const handleFormSubmit = form.onSubmit((values) => {
    const data = {
      code: values.code,
      name: values.name,
      description: values.description,
      color: values.color,
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

export default useCustomerStatusCreateViewModel;
