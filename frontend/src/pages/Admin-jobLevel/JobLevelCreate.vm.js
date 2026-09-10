import { useForm } from "@mantine/form";
import { zodResolver } from "mantine-form-zod-resolver";
import useCreateApi from "~/hooks/admin/use-create-api";
import * as PageConfigs from "~/pages/PageConfig";
import JobLevelConfigs from "./JobLevelConfigs";

function useJobLevelCreateViewModel() {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: JobLevelConfigs.initialCreateUpdateFormValues,
    validate: zodResolver(JobLevelConfigs.createUpdateFormSchema),
  });

  const createApi = useCreateApi(JobLevelConfigs.resourceUrl);

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

export default useJobLevelCreateViewModel;
