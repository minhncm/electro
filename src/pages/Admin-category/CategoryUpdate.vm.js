import { useForm } from "@mantine/form";
import { zodResolver } from "mantine-form-zod-resolver";
import { useState } from "react";
import useGetAllApi from "~/hooks/use-get-all-api";
import useUpdateApi from "~/hooks/use-update-api";
import * as PageConfigs from "~/pages/PageConfig";
import CategoryConfigs from "./CategoryConfigs";
import useGetByIdApi from "~/hooks/use-get-by-id-api";
import MiscUtils from "~/utils/MiscUtils";

function useCategoryUpdateViewModel(id) {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: CategoryConfigs.initialCreateUpdateFormValues,
    validate: zodResolver(CategoryConfigs.createUpdateFormSchema),
  });

  const [category, setCategory] = useState();
  const [prevFormValues, setPrevFormValues] = useState();
  const [categorySelectList, setCategorySelectList] = useState();

  const updateApi = useUpdateApi(
    CategoryConfigs.resourceUrl,
    CategoryConfigs.resourceKey,
    id,
  );

  useGetByIdApi(
    CategoryConfigs.resourceUrl,
    CategoryConfigs.resourceKey,
    id,
    (category) => {
      setCategory(category);
      const formValues = {
        name: category.name,
        slug: category.slug,
        description: category.description,
        thumbnail: category.thumbnail,
        status: String(category.status),
        parentCategoryId: String(category.parentCategoryId),
      };
      form.setValues(formValues);
      setPrevFormValues(formValues);
    },
  );

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
    if (!MiscUtils.isEqual(prevFormValues, values)) {
      const data = {
        name: values.name,
        slug: values.slug,
        description: values.description,
        thumbnail: values.thumbnail,
        status: Number(values.status),
        parentCategoryId: Number(values.parentCategoryId),
      };
      updateApi.mutate(data);
    }
  });

  return {
    form,
    category,
    categorySelectList,
    statusSelectList,
    handleFormSubmit,
  };
}

export default useCategoryUpdateViewModel;
