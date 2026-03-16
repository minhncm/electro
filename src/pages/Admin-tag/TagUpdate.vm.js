import { useForm } from "@mantine/form";
import { zodResolver } from "mantine-form-zod-resolver";
import useUpdateApi from "~/hooks/use-update-api";
import * as PageConfigs from "~/pages/PageConfig";
import TagConfigs from "./TagConfigs";
import useGetByIdApi from "~/hooks/use-get-by-id-api";
import { useState } from "react";
import MiscUtils from "~/utils/MiscUtils";

function useTagUpdateViewModel(id) {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: TagConfigs.initialCreateUpdateFormValues,
    validate: zodResolver(TagConfigs.createUpdateFormSchema),
  });

  const [tag, setTag] = useState();
  const [prevFormValues, setPrevFormValues] = useState();

  const updateApi = useUpdateApi(
    TagConfigs.resourceUrl,
    TagConfigs.resourceKey,
    id,
  );

  useGetByIdApi(TagConfigs.resourceUrl, TagConfigs.resourceKey, id, (tag) => {
    setTag(tag);
    const formValues = {
      name: tag.name,
      slug: tag.slug,
      status: String(tag.status),
    };
    form.setValues(formValues);
    setPrevFormValues(formValues);
  });

  const statusSelectList = PageConfigs.statusSelectList;

  const handleFormSubmit = form.onSubmit((values) => {
    if (!MiscUtils.isEqual(prevFormValues, values)) {
      const data = {
        name: values.name,
        slug: values.slug,
        status: Number(values.status),
      };
      updateApi.mutate(data);
    }
  });

  return {
    form,
    tag,
    statusSelectList,
    handleFormSubmit,
  };
}

export default useTagUpdateViewModel;
