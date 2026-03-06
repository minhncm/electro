import { useForm } from "@mantine/form";
import { zodResolver } from "mantine-form-zod-resolver";
import { useState } from "react";
import useGetByIdApi from "~/hooks/use-get-by-id-api";
import useUpdateApi from "~/hooks/use-update-api";
import * as PageConfigs from "~/pages/PageConfig";
import MiscUtils from "~/utils/MiscUtils";
import CustomerStatusConfigs from "./CustomerStatusConfigs";

function useCustomerStatusUpdateViewModel(id) {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: CustomerStatusConfigs.initialCreateUpdateFormValues,
    validate: zodResolver(CustomerStatusConfigs.createUpdateFormSchema),
  });

  const [customerStatus, setCustomerStatus] = useState();
  const [prevFormValues, setPrevFormValues] = useState();

  const update = useUpdateApi(
    CustomerStatusConfigs.resourceUrl,
    CustomerStatusConfigs.resourceKey,
    id,
  );

  useGetByIdApi(
    CustomerStatusConfigs.resourceUrl,
    CustomerStatusConfigs.resourceKey,
    id,
    (customerStatus) => {
      setCustomerStatus(customerStatus);
      const formValues = {
        code: customerStatus.code,
        name: customerStatus.name,
        description: customerStatus.description,
        color: customerStatus.color,
        status: String(customerStatus.status),
      };
      form.setValues(formValues);
      setPrevFormValues(formValues);
    },
  );

  const statusSelectList = PageConfigs.statusSelectList;
  const handleFormSubmit = form.onSubmit((values) => {
    if (!MiscUtils.isEqual(prevFormValues, values)) {
      const data = {
        code: values.code,
        name: values.name,
        description: values.description,
        color: values.color,
        status: Number(values.status),
      };

      update.mutate(data);
    }
  });

  return {
    form,
    customerStatus,
    statusSelectList,
    handleFormSubmit,
  };
}

export default useCustomerStatusUpdateViewModel;
