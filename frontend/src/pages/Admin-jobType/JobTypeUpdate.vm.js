import { useForm } from "@mantine/form";
import { zodResolver } from "mantine-form-zod-resolver";
import useUpdateApi from "~/hooks/admin/use-update-api";
import * as PageConfigs from "~/pages/PageConfig";
import JobTypeConfigs from "./JobTypeConfigs";
import useGetByIdApi from "~/hooks/admin/use-get-by-id-api";
import { useState } from "react";
import MiscUtils from "~/utils/MiscUtils";

function useJobTypeUpdateViewModel(id) {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: JobTypeConfigs.initialCreateUpdateFormValues,
    validate: zodResolver(JobTypeConfigs.createUpdateFormSchema),
  });

  const [jobType, setJobType] = useState();
  const [prevFormValues, setPrevFormValues] = useState();

  const updateApi = useUpdateApi(
    JobTypeConfigs.resourceUrl,
    JobTypeConfigs.resourceKey,
    id,
  );

  useGetByIdApi(
    JobTypeConfigs.resourceUrl,
    JobTypeConfigs.resourceKey,
    id,
    (jobType) => {
      setJobType(jobType);
      const formValues = {
        name: jobType.name,
        status: String(jobType.status),
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
    jobType,
    statusSelectList,
    handleFormSubmit,
  };
}

export default useJobTypeUpdateViewModel;
