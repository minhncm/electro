import { useForm } from "@mantine/form";
import { zodResolver } from "mantine-form-zod-resolver";
import { useState } from "react";
import useGetAllApi from "~/hooks/admin/use-get-all-api";
import useGetByIdApi from "~/hooks/admin/use-get-by-id-api";
import useUpdateApi from "~/hooks/admin/use-update-api";
import { RequiredNote } from "~/pages/PageConfig";
import MiscUtils from "~/utils/MiscUtils";
import OrderConfigs from "../Admin-order/OrderConfigs";
import WaybillConfigs from "./WaybillConfigs";

function useWaybillUpdateViewModel(id) {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: WaybillConfigs.initialCreateUpdateFormValues,
    validate: zodResolver(WaybillConfigs.createUpdateFormSchema),
  });

  const [orderSelectList, setOrderSelectList] = useState([]);
  const [waybill, setWaybill] = useState();
  const [prevFormValues, setPrevFormValues] = useState();

  const updateApi = useUpdateApi(
    WaybillConfigs.resourceUrl,
    WaybillConfigs.resourceKey,
    id,
  );

  useGetByIdApi(
    WaybillConfigs.resourceUrl,
    WaybillConfigs.resourceKey,
    id,
    (waybillResponse) => {
      setWaybill(waybillResponse);
      const formValues = {
        orderId: String(waybillResponse.order.id),
        shippingDate: new Date(waybillResponse.shippingDate),
        weight: waybillResponse.weight,
        length: waybillResponse.length,
        width: waybillResponse.width,
        height: waybillResponse.height,
        note: waybillResponse.note || "",
        ghnRequiredNote: waybillResponse.ghnRequiredNote,
      };
      form.setValues(formValues);
      setPrevFormValues(formValues);
    },
  );

  const handleFormSubmit = form.onSubmit((formValues) => {
    if (!MiscUtils.isEqual(prevFormValues)) {
      const data = {
        orderId: Number(formValues.orderId),
        shippingDate: formValues.shippingDate,
        weight: formValues.weight,
        length: formValues.length,
        width: formValues.width,
        height: formValues.height,
        note: formValues.note.trim() || null,
        ghnRequiredNote: formValues.ghnRequiredNote,
      };
      updateApi.mutate(data);
    }
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
    waybill,
    ghnRequiredNoteSelectList,
    orderSelectList,
    isFetchingOrderListResponse,
    handleFormSubmit,
  };
}

export default useWaybillUpdateViewModel;
