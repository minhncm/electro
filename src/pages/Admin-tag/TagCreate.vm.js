import { useForm } from "@mantine/form";
import TagConfigs from "./TagConfigs";
import { zodResolver } from "mantine-form-zod-resolver";
import * as PageConfigs from "~/pages/PageConfig";
import useCreateApi from "~/hooks/use-create-api";

function useTagCreateViewModel() {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: TagConfigs.initialCreateUpdateFormValues,
    validate: zodResolver(TagConfigs.createUpdateFormSchema),
  });

  const createApi = useCreateApi(TagConfigs.resourceUrl);

  const statusSelectList = PageConfigs.statusSelectList;

  const handleFormSubmit = form.onSubmit((values) => {
    const data = {
      name: values.name,
      slug: values.slug,
      status: values.status,
    };
    createApi.mutate(data);
  });

  return {
    form,
    statusSelectList,
    handleFormSubmit,
  };
}

export default useTagCreateViewModel;
