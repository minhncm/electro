import { useForm } from "@mantine/form";
import CategoryConfigs from "./CategoryConfigs";
import { zodResolver } from "mantine-form-zod-resolver";
import * as PageConfigs from "~/pages/PageConfig";
import useGetAllApi from "~/hooks/use-get-all-api";
import { useState } from "react";
import useCreateApi from "~/hooks/use-create-api";

function useCategoryCreateViewModel() {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: CategoryConfigs.initialCreateUpdateFormValues,
    validate: zodResolver(CategoryConfigs.createUpdateFormSchema),
  });

  const [categorySelectList, setCategorySelectList] = useState();

  const createApi = useCreateApi(CategoryConfigs.resourceUrl);

  useGetAllApi(
    CategoryConfigs.resourceUrl,
    CategoryConfigs.resourceKey,
    {
      all: 1,
    },
    (categories) => {
      const selectList = categories.content.map((category) => ({
        value: String(category.id),
        label: category.name,
      }));
      setCategorySelectList(selectList);
    },
  );

  const statusSelectList = PageConfigs.statusSelectList;

  const handleFormSubmit = form.onSubmit((values) => {
    const data = {
      name: values.name,
      slug: values.slug,
      description: values.description,
      thumbnail: values.thumbnail,
      status: Number(values.status),
      parentCategoryId: Number(values.parentCategoryId),
    };

    createApi.mutate(data);
  });

  return {
    form,
    categorySelectList,
    statusSelectList,
    handleFormSubmit,
  };
}

export default useCategoryCreateViewModel;
