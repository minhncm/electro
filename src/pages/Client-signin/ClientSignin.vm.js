import { useForm } from "@mantine/form";
import { zodResolver } from "mantine-form-zod-resolver";
import z from "zod";
import { useLoginApi } from "~/hooks/client/use-auth-api";
import useAuthStore from "~/stores/use-auth-store";
import MessageUtils from "~/utils/MessageUtils";

function useClientSigninViewModel() {
  const initialFormValues = {
    username: "",
    password: "",
  };

  const { user } = useAuthStore();

  const formSchema = z.object({
    username: z
      .string({ invalid_type_error: "Vui lòng không bỏ trống" })
      .min(2, MessageUtils.min("Tên tài khoản", 2)),
    password: z
      .string({ invalid_type_error: "Vui lòng không bỏ trống" })
      .min(1, MessageUtils.min("Mật khẩu", 1)),
  });

  const form = useForm({
    initialValues: initialFormValues,
    validate: zodResolver(formSchema),
  });

  const loginApi = useLoginApi();

  const handleFormSubmit = form.onSubmit((values) => {
    if (!user) {
      loginApi.mutate({ username: values.username, password: values.password });
    }
  });

  return { form, isSuccessLogin: loginApi.isSuccess, handleFormSubmit };
}

export default useClientSigninViewModel;
