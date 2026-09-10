import { useForm } from "@mantine/form";
import { zod4Resolver } from "mantine-form-zod-resolver";
import z from "zod";
import ResourceUrl from "~/constants/ResourceURL";
import { useUpdateUser } from "~/hooks/client/use-user-api";
import useAuthStore from "~/stores/use-auth-store";

function useClientSettingPhoneViewModel() {
  const formSchema = z.object({
    phone: z
      .string()
      .regex(
        /(((\+|)84)|0)(3|5|7|8|9)+([0-9]{8})\b/,
        "Nhập số điện thoại không đúng định dạng",
      ),
  });

  const { user } = useAuthStore();

  const initialFormValues = {
    phone: user?.phone,
  };

  const form = useForm({
    initialValues: initialFormValues,
    validate: zod4Resolver(formSchema),
  });

  const updatePhoneApi = useUpdateUser(ResourceUrl.CLIENT_USER_PHONE);

  const handleFormSubmit = form.onSubmit((formValues) => {
    updatePhoneApi.mutate({ phone: formValues.phone });
  });
  return { form, handleFormSubmit };
}

export default useClientSettingPhoneViewModel;
