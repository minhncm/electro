import { useForm } from "@mantine/form";
import DepartmentConfigs from "./DepartmentConfigs";
import { zodResolver } from "mantine-form-zod-resolver";
import useCreateApi from "~/hooks/admin/use-create-api";

function useDepartmentCreateViewModel() {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: DepartmentConfigs.initialCreateUpdateFormValues,
    validate: zodResolver(DepartmentConfigs.createUpdateFormSchema),
  });

  const statusSelectList = [
    {
      value: "1",
      label: "Đang hoạt động",
    },
    {
      value: "2",
      label: "Ít hoạt động",
    },
    {
      value: "3",
      label: "Không hoạt động",
    },
  ];

  const createApi = useCreateApi(DepartmentConfigs.resourceUrl);

  const handleFormSubmit = form.onSubmit((values) => {
    const data = {
      name: values.name,
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

export default useDepartmentCreateViewModel;
