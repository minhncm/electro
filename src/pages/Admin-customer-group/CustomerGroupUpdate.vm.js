import { useForm } from "@mantine/form";
import { zodResolver } from "mantine-form-zod-resolver";
import useUpdateApi from "~/hooks/use-update-api";
import * as PageConfigs from "~/pages/PageConfig";
import CustomerGroupConfigs from "./CustomerGroupConfigs";
import useGetByIdApi from "~/hooks/use-get-by-id-api";
import { useState } from "react";
import MiscUtils from "~/utils/MiscUtils";

function useCustomerGroupUpdateViewModel(id) {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: CustomerGroupConfigs.initialCreateUpdateFormValues,
    validate: zodResolver(CustomerGroupConfigs.createUpdateFormSchema),
  });

  const [customerGroup, setCustomerGroup] = useState();
  const [prevFormValues, setPrevFormValues] = useState();

  const update = useUpdateApi(
    CustomerGroupConfigs.resourceUrl,
    CustomerGroupConfigs.resourceKey,
    id,
  );

  useGetByIdApi(
    CustomerGroupConfigs.resourceUrl,
    CustomerGroupConfigs.resourceKey,
    id,
    (customerGroup) => {
      setCustomerGroup(customerGroup);
      const formValues = {
        code: customerGroup.code,
        name: customerGroup.name,
        description: customerGroup.description,
        color: customerGroup.color,
        status: String(customerGroup.status),
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
    customerGroup,
    statusSelectList,
    handleFormSubmit,
  };
}

export default useCustomerGroupUpdateViewModel;
