import { useForm } from "@mantine/form";
import { zodResolver } from "mantine-form-zod-resolver";
import useCreateApi from "~/hooks/use-create-api";
import * as PageConfigs from "~/pages/PageConfig";
import UnitConfigs from "./UnitConfigs";

function useUnitCreateViewModel() {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: UnitConfigs.initialCreateUpdateFormValues,
    validate: zodResolver(UnitConfigs.createUpdateFormSchema),
  });

  const createApi = useCreateApi(UnitConfigs.resourceUrl);

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

export default useUnitCreateViewModel;
