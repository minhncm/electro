import { useForm } from "@mantine/form";
import { zodResolver } from "mantine-form-zod-resolver";
import { useState } from "react";
import useGetAllApi from "~/hooks/use-get-all-api";
import useUpdateApi from "~/hooks/use-update-api";
import * as PageConfigs from "~/pages/PageConfig";
import CustomerResourceConfigs from "../Admin-customer-resource/CustomerResourceConfigs";
import OrderResourceConfigs from "./OrderResourceConfigs";
import useGetByIdApi from "~/hooks/use-get-by-id-api";
import MiscUtils from "~/utils/MiscUtils";

function useOrderResourceUpdateViewModel(id) {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: OrderResourceConfigs.initialCreateUpdateFormValues,
    validate: zodResolver(OrderResourceConfigs.createUpdateFormSchema),
  });

  const [orderResource, setOrderResource] = useState();
  const [prevFormValues, setPrevFormValues] = useState();
  const [customerResourceSelectList, setCustomerResourceSelectList] =
    useState();

  const updateApi = useUpdateApi(
    OrderResourceConfigs.resourceUrl,
    OrderResourceConfigs.resourceKey,
    id,
  );

  useGetByIdApi(
    OrderResourceConfigs.resourceUrl,
    OrderResourceConfigs.resourceKey,
    id,
    (orderResource) => {
      setOrderResource(orderResource);
      const formValues = {
        code: orderResource.code,
        name: orderResource.name,
        customerResourceId: orderResource.customerResource
          ? String(orderResource.customerResource.id)
          : null,
        color: orderResource.color,
        status: String(orderResource.status),
      };
      form.setValues(formValues);
      setPrevFormValues(formValues);
    },
  );

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
    if (!MiscUtils.isEqual(prevFormValues, values)) {
      const data = {
        code: values.code,
        name: values.name,
        customerResourceId: Number(values.customerResourceId),
        color: values.color,
        status: Number(values.status),
      };
      updateApi.mutate(data);
    }
  });

  return {
    form,
    orderResource,
    customerResourceSelectList,
    statusSelectList,
    handleFormSubmit,
  };
}

export default useOrderResourceUpdateViewModel;
