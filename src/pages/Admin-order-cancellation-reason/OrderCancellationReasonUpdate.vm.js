import { useForm } from "@mantine/form";
import { zodResolver } from "mantine-form-zod-resolver";
import { useState } from "react";
import useGetByIdApi from "~/hooks/admin/use-get-by-id-api";
import useUpdateApi from "~/hooks/admin/use-update-api";
import * as PageConfigs from "~/pages/PageConfig";
import MiscUtils from "~/utils/MiscUtils";
import OrderCancellationReasonConfigs from "./OrderCancellationReasonConfigs";

function useOrderCancellationReasonUpdateViewModel(id) {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: OrderCancellationReasonConfigs.initialCreateUpdateFormValues,
    validate: zodResolver(
      OrderCancellationReasonConfigs.createUpdateFormSchema,
    ),
  });

  const [orderCancellationReason, setOrderCancellationReason] = useState();
  const [prevFormValues, setPrevFormValues] = useState();

  const updateApi = useUpdateApi(
    OrderCancellationReasonConfigs.resourceUrl,
    OrderCancellationReasonConfigs.resourceKey,
    id,
  );

  useGetByIdApi(
    OrderCancellationReasonConfigs.resourceUrl,
    OrderCancellationReasonConfigs.resourceKey,
    id,
    (orderCancellationReason) => {
      setOrderCancellationReason(orderCancellationReason);
      const formValues = {
        name: orderCancellationReason.name,
        note: orderCancellationReason.note,
        status: String(orderCancellationReason.status),
      };
      form.setValues(formValues);
      setPrevFormValues(formValues);
    },
  );

  const statusSelectList = PageConfigs.statusSelectList;

  const handleFormSubmit = form.onSubmit((values) => {
    if (!MiscUtils.isEqual(prevFormValues, values)) {
      const data = {
        name: values.name,
        note: values.note,
        status: Number(values.status),
      };
      updateApi.mutate(data);
    }
  });

  return {
    form,
    orderCancellationReason,
    statusSelectList,
    handleFormSubmit,
  };
}

export default useOrderCancellationReasonUpdateViewModel;
