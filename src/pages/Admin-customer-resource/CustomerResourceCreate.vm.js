import { useForm } from "@mantine/form";
import { zodResolver } from "mantine-form-zod-resolver";
import useCreateApi from "~/hooks/use-create-api";
import * as PageConfigs from "~/pages/PageConfig";
import CustomerResourseConfigs from "./CustomerResourceConfigs";

function useCustomerResourceCreateViewModel() {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: CustomerResourseConfigs.initialCreateUpdateFormValues,
    validate: zodResolver(CustomerResourseConfigs.createUpdateFormSchema),
  });

  const createApi = useCreateApi(CustomerResourseConfigs.resourceUrl);

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

export default useCustomerResourceCreateViewModel;
