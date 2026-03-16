import { useForm } from "@mantine/form";
import { zodResolver } from "mantine-form-zod-resolver";
import useUpdateApi from "~/hooks/use-update-api";
import * as PageConfigs from "~/pages/PageConfig";
import DocketReasonConfigs from "./DocketReasonConfigs";
import useGetByIdApi from "~/hooks/use-get-by-id-api";
import { useState } from "react";
import MiscUtils from "~/utils/MiscUtils";

function useDocketReasonUpdateViewModel(id) {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: DocketReasonConfigs.initialCreateUpdateFormValues,
    validate: zodResolver(DocketReasonConfigs.createUpdateFormSchema),
  });

  const [docketReason, setDocketReason] = useState();
  const [prevFormValues, setPrevFormValues] = useState();

  const update = useUpdateApi(
    DocketReasonConfigs.resourceUrl,
    DocketReasonConfigs.resourceKey,
    id,
  );

  useGetByIdApi(
    DocketReasonConfigs.resourceUrl,
    DocketReasonConfigs.resourceKey,
    id,
    (docketReason) => {
      setDocketReason(docketReason);
      const formValues = {
        name: docketReason.name,
        status: String(docketReason.status),
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
        status: Number(values.status),
      };
      update.mutate(data);
    }
  });
  return {
    form,
    docketReason,
    statusSelectList,
    handleFormSubmit,
  };
}

export default useDocketReasonUpdateViewModel;
