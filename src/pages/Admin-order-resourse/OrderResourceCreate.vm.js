import { useForm } from "@mantine/form";
import OrderResourceConfigs from "./OrderResourceConfigs";
import { zodResolver } from "mantine-form-zod-resolver";
import useCreateApi from "~/hooks/admin/use-create-api";
import * as PageConfigs from "~/pages/PageConfig";
import useGetAllApi from "~/hooks/admin/use-get-all-api";
import CustomerResourceConfigs from "../Admin-customer-resource/CustomerResourceConfigs";
import { useState } from "react";

function useOrderResourceCreateViewModel() {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: OrderResourceConfigs.initialCreateUpdateFormValues,
    validate: zodResolver(OrderResourceConfigs.createUpdateFormSchema),
  });

  const [customerResourceSelectList, setCustomerResourceSelectList] =
    useState();
  const createApi = useCreateApi(OrderResourceConfigs.resourceUrl);

  useGetAllApi(
    CustomerResourceConfigs.resourceUrl,
    CustomerResourceConfigs.resourceKey,
    { all: 1 },
    (customerResources) => {
      const selectList = customerResources.content.map((customerResource) => ({
        value: String(customerResource.id),
        label: customerResource.name,
      }));
      setCustomerResourceSelectList(selectList);
    },
  );

  const statusSelectList = PageConfigs.statusSelectList;

  const handleFormSubmit = form.onSubmit((values) => {
    const data = {
      code: values.code,
      name: values.name,
      customerResourceId: Number(values.customerResourceId),
      color: values.color,
      status: Number(values.status),
    };

    createApi.mutate(data);
  });

  return {
    form,
    customerResourceSelectList,
    statusSelectList,
    handleFormSubmit,
  };
}

export default useOrderResourceCreateViewModel;
