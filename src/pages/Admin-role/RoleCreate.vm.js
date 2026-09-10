import { useForm } from "@mantine/form";
import RoleConfigs from "./RoleConfigs";
import { zodResolver } from "mantine-form-zod-resolver";
import useCreateApi from "~/hooks/admin/use-create-api";

function useRoleCreateViewModel() {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: RoleConfigs.initialCreateUpdateFormValues,
    validate: zodResolver(RoleConfigs.createUpdateFormSchema),
  });

  const statusSelectList = [
    { value: "1", label: "Có hiệu lực" },
    { value: "2", label: "Vô hiệu lực" },
  ];

  const createApi = useCreateApi(RoleConfigs.resourceUrl);

  const handleFormSubmit = form.onSubmit((values) => {
    const data = {
      name: values.name,
      code: values.code,
      status: Number(values.status),
    };
    createApi.mutate(data);
  });

  return {
    form,
    handleFormSubmit,
    statusSelectList,
  };
}

export default useRoleCreateViewModel;
