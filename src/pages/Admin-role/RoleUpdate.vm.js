import { useForm } from "@mantine/form";
import { zodResolver } from "mantine-form-zod-resolver";
import { useState } from "react";
import useGetByIdApi from "~/hooks/use-get-by-id-api";
import useUpdateApi from "~/hooks/use-update-api";
import MiscUtils from "~/utils/MiscUtils";
import RoleConfigs from "./RoleConfigs";

function useRoleUpdateViewModel(id) {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: RoleConfigs.initialCreateUpdateFormValues,
    validate: zodResolver(RoleConfigs.createUpdateFormSchema),
  });

  const [role, setRole] = useState();
  const [prevFormValues, setPrevFormValues] = useState();

  const updateApi = useUpdateApi(
    RoleConfigs.resourceUrl,
    RoleConfigs.resourceKey,
    id,
  );

  const statusSelectList = [
    { value: "1", label: "Có hiệu lực" },
    { value: "2", label: "Vô hiệu lực" },
  ];

  useGetByIdApi(
    RoleConfigs.resourceUrl,
    RoleConfigs.resourceKey,
    id,
    (role) => {
      setRole(role);
      const formValues = {
        name: role.name,
        code: role.code,
        status: String(role.status),
      };

      form.setValues(formValues);
      setPrevFormValues(formValues);
    },
  );

  const handleFormSubmit = form.onSubmit((values) => {
    if (!MiscUtils.isEqual(prevFormValues, values)) {
      const data = {
        name: values.name,
        code: values.code,
        status: Number(values.status),
      };
      updateApi.mutate(data);
    }
  });

  return {
    form,
    role,
    statusSelectList,
    handleFormSubmit,
  };
}

export default useRoleUpdateViewModel;
