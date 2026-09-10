import { useForm } from "@mantine/form";
import { zod4Resolver } from "mantine-form-zod-resolver";
import z from "zod";
import ResourceUrl from "~/constants/ResourceURL";
import { useUpdateUser } from "~/hooks/client/use-user-api";
import useAuthStore from "~/stores/use-auth-store";

function useClientSettingEmailViewModel() {
  const formSchema = z.object({
    email: z.email({
      pattern: z.regexes.email,
      error: "Nhập email không đúng định dạng ",
    }),
  });

  const { user } = useAuthStore();

  const initialFormValues = {
    email: user?.email,
  };

  const form = useForm({
    initialValues: initialFormValues,
    validate: zod4Resolver(formSchema),
  });

  const updateEmailApi = useUpdateUser(ResourceUrl.CLIENT_USER_EMAIL);

  const handleFormSubmit = form.onSubmit((formValues) => {
    updateEmailApi.mutate({ email: formValues.email });
  });
  return { form, handleFormSubmit };
}

export default useClientSettingEmailViewModel;
