import { useForm } from "@mantine/form";
import { zodResolver } from "mantine-form-zod-resolver";
import { useState } from "react";
import useGetByIdApi from "~/hooks/use-get-by-id-api";
import useUpdateApi from "~/hooks/use-update-api";
import * as PageConfigs from "~/pages/PageConfig";
import MiscUtils from "~/utils/MiscUtils";
import CustomerResourceConfigs from "./CustomerResourceConfigs";

function useCustomerResourceUpdateViewModel(id) {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: CustomerResourceConfigs.initialCreateUpdateFormValues,
    validate: zodResolver(CustomerResourceConfigs.createUpdateFormSchema),
  });

  const [customerResource, setCustomerResource] = useState();
  const [prevFormValues, setPrevFormValues] = useState();

  const update = useUpdateApi(
    CustomerResourceConfigs.resourceUrl,
    CustomerResourceConfigs.resourceKey,
    id,
  );

  useGetByIdApi(
    CustomerResourceConfigs.resourceUrl,
    CustomerResourceConfigs.resourceKey,
    id,
    (customerResource) => {
      setCustomerResource(customerResource);
      const formValues = {
        code: customerResource.code,
        name: customerResource.name,
        description: customerResource.description,
        color: customerResource.color,
        status: String(customerResource.status),
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
    customerResource,
    statusSelectList,
    handleFormSubmit,
  };
}

export default useCustomerResourceUpdateViewModel;
