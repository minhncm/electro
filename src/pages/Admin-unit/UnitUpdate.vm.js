import { useForm } from "@mantine/form";
import { zodResolver } from "mantine-form-zod-resolver";
import { useState } from "react";
import useGetByIdApi from "~/hooks/use-get-by-id-api";
import useUpdateApi from "~/hooks/use-update-api";
import * as PageConfigs from "~/pages/PageConfig";
import MiscUtils from "~/utils/MiscUtils";
import UnitConfigs from "./UnitConfigs";

function useUnitUpdateViewModel(id) {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: UnitConfigs.initialCreateUpdateFormValues,
    validate: zodResolver(UnitConfigs.createUpdateFormSchema),
  });

  const [unit, setUnit] = useState();
  const [prevFormValues, setPrevFormValues] = useState();

  const updateApi = useUpdateApi(
    UnitConfigs.resourceUrl,
    UnitConfigs.resourceKey,
    id,
  );

  useGetByIdApi(
    UnitConfigs.resourceUrl,
    UnitConfigs.resourceKey,
    id,
    (unit) => {
      setUnit(unit);
      const formValues = {
        name: unit.name,
        status: String(unit.status),
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
      updateApi.mutate(data);
    }
  });

  return {
    form,
    unit,
    statusSelectList,
    handleFormSubmit,
  };
}

export default useUnitUpdateViewModel;
