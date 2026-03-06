import { useForm } from "@mantine/form";
import { zodResolver } from "mantine-form-zod-resolver";
import { useState } from "react";
import useGetByIdApi from "~/hooks/use-get-by-id-api";
import useUpdateApi from "~/hooks/use-update-api";
import * as PageConfigs from "~/pages/PageConfig";
import MiscUtils from "~/utils/MiscUtils";
import JobLevelConfigs from "./JobLevelConfigs";

function useJobLevelUpdateViewModel(id) {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: JobLevelConfigs.initialCreateUpdateFormValues,
    validate: zodResolver(JobLevelConfigs.createUpdateFormSchema),
  });

  const [jobLevel, setJobLevel] = useState();
  const [prevFormValues, setPrevFormValues] = useState();

  const updateApi = useUpdateApi(
    JobLevelConfigs.resourceUrl,
    JobLevelConfigs.resourceKey,
    id,
  );

  useGetByIdApi(
    JobLevelConfigs.resourceUrl,
    JobLevelConfigs.resourceKey,
    id,
    (jobLevel) => {
      setJobLevel(jobLevel);
      const formValues = {
        name: jobLevel.name,
        status: String(jobLevel.status),
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
    jobLevel,
    statusSelectList,
    handleFormSubmit,
  };
}

export default useJobLevelUpdateViewModel;
