import { useForm } from "@mantine/form";
import { zodResolver } from "mantine-form-zod-resolver";
import { useState } from "react";
import useGetByIdApi from "~/hooks/use-get-by-id-api";
import useUpdateApi from "~/hooks/use-update-api";
import * as PageConfigs from "~/pages/PageConfig";
import MiscUtils from "~/utils/MiscUtils";
import JobTitleConfigs from "./JobTitleConfigs";

function useJobTitleUpdateViewModel(id) {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: JobTitleConfigs.initialCreateUpdateFormValues,
    validate: zodResolver(JobTitleConfigs.createUpdateFormSchema),
  });

  const [jobTitle, setJobTitle] = useState();
  const [prevFormValues, setPrevFormValues] = useState();

  const updateApi = useUpdateApi(
    JobTitleConfigs.resourceUrl,
    JobTitleConfigs.resourceKey,
    id,
  );

  useGetByIdApi(
    JobTitleConfigs.resourceUrl,
    JobTitleConfigs.resourceKey,
    id,
    (jobTitle) => {
      setJobTitle(jobTitle);
      const formValues = {
        name: jobTitle.name,
        status: String(jobTitle.status),
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
    jobTitle,
    statusSelectList,
    handleFormSubmit,
  };
}

export default useJobTitleUpdateViewModel;
