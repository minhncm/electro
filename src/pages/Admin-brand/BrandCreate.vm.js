import { useForm } from "@mantine/form";
import BrandConfigs from "./BrandConfigs";
import { zodResolver } from "mantine-form-zod-resolver";
import * as PageConfigs from "~/pages/PageConfig";
import useCreateApi from "~/hooks/use-create-api";

function useBrandCreateViewModel() {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: BrandConfigs.initialCreateUpdateFormValues,
    validate: zodResolver(BrandConfigs.createUpdateFormSchema),
  });

  const createApi = useCreateApi(BrandConfigs.resourceUrl);

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

export default useBrandCreateViewModel;
