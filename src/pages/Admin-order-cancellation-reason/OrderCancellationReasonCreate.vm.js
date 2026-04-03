import { useForm } from "@mantine/form";
import { zodResolver } from "mantine-form-zod-resolver";
import useCreateApi from "~/hooks/admin/use-create-api";
import * as PageConfigs from "~/pages/PageConfig";
import OrderCancellationReasonConfigs from "./OrderCancellationReasonConfigs";

function useOrderCancellationReasonCreateViewModel() {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: OrderCancellationReasonConfigs.initialCreateUpdateFormValues,
    validate: zodResolver(
      OrderCancellationReasonConfigs.createUpdateFormSchema,
    ),
  });

  const createApi = useCreateApi(OrderCancellationReasonConfigs.resourceUrl);

  const statusSelectList = PageConfigs.statusSelectList;

  const handleFormSubmit = form.onSubmit((values) => {
    const data = {
      name: values.name,
      note: values.note,
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

export default useOrderCancellationReasonCreateViewModel;
