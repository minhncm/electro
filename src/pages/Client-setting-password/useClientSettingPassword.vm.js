import { useForm } from "@mantine/form";
import { zod4Resolver } from "mantine-form-zod-resolver";
import z from "zod";
import ResourceUrl from "~/constants/ResourceURL";
import { useUpdateUser } from "~/hooks/client/use-user-api";
import MessageUtils from "~/utils/MessageUtils";

function useClientSettingPasswordViewModel() {
  const formSchema = z
    .object({
      oldPassword: z.string().min(1, MessageUtils.min("Mật khẩu", 1)),
      newPassword: z
        .string()
        .min(1, MessageUtils.min("Mật khẩu", 1))
        .regex(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
          "Mật khẩu chứa tối thiểu tám ký tự, ít nhất một chữ cái viết hoa, một chữ cái viết thường, một chữ số và một ký tự đặc biệt",
        ),
      confirmPassword: z.string().min(1, MessageUtils.min("Mật khẩu", 1)),
    })
    .refine((data) => data.newPassword === data.confirmPassword, {
      error: "Mật khẩu không trùng khớp",
      path: ["confirmPassword"],
    });

  const initialFormValues = {
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  };

  const form = useForm({
    initialValues: initialFormValues,
    validate: zod4Resolver(formSchema),
  });

  const updatePasswordApi = useUpdateUser(ResourceUrl.CLIENT_USER_PASSWORD);

  const handleFormSubmit = form.onSubmit((formValues) => {
    updatePasswordApi.mutate({
      oldPassword: formValues.oldPassword,
      newPassword: formValues.newPassword,
    });
  });
  return { form, handleFormSubmit };
}

export default useClientSettingPasswordViewModel;
