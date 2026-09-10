import { useForm } from "@mantine/form";
import DocketReasonConfigs from "./DocketReasonConfigs";
import { zodResolver } from "mantine-form-zod-resolver";
import * as PageConfigs from "~/pages/PageConfig";
import useCreateApi from "~/hooks/admin/use-create-api";

function useDocketReasonCreateViewModel() {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: DocketReasonConfigs.initialCreateUpdateFormValues,
    validate: zodResolver(DocketReasonConfigs.createUpdateFormSchema),
  });

  const createApi = useCreateApi(DocketReasonConfigs.resourceUrl);

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

export default useDocketReasonCreateViewModel;
