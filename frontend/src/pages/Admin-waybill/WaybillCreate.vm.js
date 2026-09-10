import { useForm } from "@mantine/form";
import { zodResolver } from "mantine-form-zod-resolver";
import { useState } from "react";
import useCreateApi from "~/hooks/admin/use-create-api";
import useGetAllApi from "~/hooks/admin/use-get-all-api";
import { RequiredNote } from "~/pages/PageConfig";
import OrderConfigs from "../Admin-order/OrderConfigs";
import WaybillConfigs from "./WaybillConfigs";

function useWaybillCreateViewModel() {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: WaybillConfigs.initialCreateUpdateFormValues,
    validate: zodResolver(WaybillConfigs.createUpdateFormSchema),
  });

  const [orderSelectList, setOrderSelectList] = useState([]);

  const createApi = useCreateApi(WaybillConfigs.resourceUrl);

  const handleFormSubmit = form.onSubmit((values) => {
    const data = {
      orderId: Number(values.orderId),
      shippingDate: values.shippingDate,
      weight: values.weight,
      length: values.length,
      width: values.width,
      height: values.height,
      note: values.note.trim() || null,
      ghnRequiredNote: values.ghnRequiredNote,
    };
    createApi.mutate(data);
  });

  const { isFetching: isFetchingOrderListResponse } = useGetAllApi(
    OrderConfigs.resourceUrl,
    OrderConfigs.resourceKey,
    { size: 5, filter: "status==1" },
    (orderListResponse) => {
      const selectList = orderListResponse.content.map((item) => ({
        value: String(item.id),
        label: item.code,
      }));
      setOrderSelectList(selectList);
    },
  );

  const ghnRequiredNoteSelectList = [
    {
      value: RequiredNote.CHOTHUHANG,
      label: WaybillConfigs.ghnRequiredNoteMap[RequiredNote.CHOTHUHANG],
    },
    {
      value: RequiredNote.CHOXEMHANGKHONGTHU,
      label: WaybillConfigs.ghnRequiredNoteMap[RequiredNote.CHOXEMHANGKHONGTHU],
    },
    {
      value: RequiredNote.KHONGCHOXEMHANG,
      label: WaybillConfigs.ghnRequiredNoteMap[RequiredNote.KHONGCHOXEMHANG],
    },
  ];

  return {
    form,
    ghnRequiredNoteSelectList,
    orderSelectList,
    isFetchingOrderListResponse,
    handleFormSubmit,
  };
}

export default useWaybillCreateViewModel;
