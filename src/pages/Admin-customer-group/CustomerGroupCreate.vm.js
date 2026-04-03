import { useForm } from "@mantine/form";
import CustomerGroupConfigs from "./CustomerGroupConfigs";
import { zodResolver } from "mantine-form-zod-resolver";
import * as PageConfigs from "~/pages/PageConfig";
import useCreateApi from "~/hooks/admin/use-create-api";

function useCustomerGroupCreateViewModel() {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: CustomerGroupConfigs.initialCreateUpdateFormValues,
    validate: zodResolver(CustomerGroupConfigs.createUpdateFormSchema),
  });

  const createApi = useCreateApi(CustomerGroupConfigs.resourceUrl);

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

export default useCustomerGroupCreateViewModel;
