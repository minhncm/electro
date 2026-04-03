import { useForm } from "@mantine/form";
import { zodResolver } from "mantine-form-zod-resolver";
import ProvinceConfigs from "~/pages/Admin-province/ProvinceConfigs";
import useCreateApi from "~/hooks/admin/use-create-api";

function useProvinceCreateViewModel() {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: ProvinceConfigs.initialCreateUpdateFormValues,
    validate: zodResolver(ProvinceConfigs.createUpdateFormSchema),
  });

  const createApi = useCreateApi(ProvinceConfigs.resourceUrl);

  const handleFormSubmit = form.onSubmit((values) => {
    const data = {
      name: values.name,
      code: values.code,
    };
    createApi.mutate(data);
  });

  return {
    form,
    handleFormSubmit,
  };
}

export default useProvinceCreateViewModel;
