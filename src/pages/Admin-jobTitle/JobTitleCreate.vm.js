import { useForm } from "@mantine/form";
import { zodResolver } from "mantine-form-zod-resolver";
import useCreateApi from "~/hooks/admin/use-create-api";
import * as PageConfigs from "~/pages/PageConfig";
import JobTitleConfigs from "./JobTitleConfigs";

function useJobTitleCreateViewModel() {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: JobTitleConfigs.initialCreateUpdateFormValues,
    validate: zodResolver(JobTitleConfigs.createUpdateFormSchema),
  });

  const createApi = useCreateApi(JobTitleConfigs.resourceUrl);

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

export default useJobTitleCreateViewModel;
