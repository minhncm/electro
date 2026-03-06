import { useForm } from "@mantine/form";
import JobTypeConfigs from "./JobTypeConfigs";
import { zodResolver } from "mantine-form-zod-resolver";
import * as PageConfigs from "~/pages/PageConfig";
import useCreateApi from "~/hooks/use-create-api";

function useJobTypeCreateViewModel() {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: JobTypeConfigs.initialCreateUpdateFormValues,
    validate: zodResolver(JobTypeConfigs.createUpdateFormSchema),
  });

  const createApi = useCreateApi(JobTypeConfigs.resourceUrl);

  const statusSelectList = PageConfigs.statusSelectList;

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

export default useJobTypeCreateViewModel;
