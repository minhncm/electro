import { useForm } from "@mantine/form";
import { zodResolver } from "mantine-form-zod-resolver";
import useUpdateApi from "~/hooks/admin/use-update-api";
import DepartmentConfigs from "./DepartmentConfigs";
import { useState } from "react";
import useGetByIdApi from "~/hooks/admin/use-get-by-id-api";
import MiscUtils from "~/utils/MiscUtils";

function useDepartmentUpdateViewModel(id) {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: DepartmentConfigs.initialCreateUpdateFormValues,
    validate: zodResolver(DepartmentConfigs.createUpdateFormSchema),
  });

  const [department, setDepartment] = useState();
  const [prevFormValues, setPrevFormValues] = useState();

  const statusSelectList = [
    {
      value: "1",
      label: "Đang hoạt động",
    },
    {
      value: "2",
      label: "Ít hoạt động",
    },
    {
      value: "3",
      label: "Không hoạt động",
    },
  ];

  const updateApi = useUpdateApi(
    DepartmentConfigs.resourceUrl,
    DepartmentConfigs.resourceKey,
    id,
  );

  useGetByIdApi(
    DepartmentConfigs.resourceUrl,
    DepartmentConfigs.resourceKey,
    id,
    (department) => {
      setDepartment(department);
      const formValues = {
        name: department.name,
        status: String(department.status),
      };
      form.setValues(formValues);
      setPrevFormValues(formValues);
    },
  );

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
    department,
    statusSelectList,
    handleFormSubmit,
  };
}

export default useDepartmentUpdateViewModel;
