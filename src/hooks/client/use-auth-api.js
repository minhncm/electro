import { useMutation, useQueryClient } from "@tanstack/react-query";
import ResourceUrl from "~/constants/ResourceURL";
import useAuthStore from "~/stores/use-auth-store";
import FetchUtils from "~/utils/FetchUtils";
import NotifyUtils from "~/utils/NotifyUtils";

export const useLoginApi = () => {
  const { setUser } = useAuthStore();
  return useMutation({
    mutationFn: (data) => FetchUtils.post(ResourceUrl.LOGIN, data),
    onError: () => NotifyUtils.simpleFailed("Đăng nhập thất bại"),
    onSuccess: (data) => {
      setUser(data);
      NotifyUtils.simpleSuccess("Đăng nhập thành công");
    },
  });
};

export const useLogoutApi = () => {
  const { resetAuthState } = useAuthStore();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => FetchUtils.post(ResourceUrl.LOGOUT),
    onSuccess: () => {
      resetAuthState();
      queryClient.clear();
    },
  });
};

export const useRegisterUser = () => {
  return useMutation({
    mutationKey: ["client-api", "registerUser"],
    mutationFn: (data) =>
      FetchUtils.post(ResourceUrl.CLIENT_REGISTRATION, data),
  });
};

export const useConfirmRegistration = () => {
  return useMutation({
    mutationKey: ["client-api", "confirmRegistration"],
    mutationFn: (data) =>
      FetchUtils.post(ResourceUrl.CLIENT_CONFIRM_REGISTRATION, data),
  });
};

export const useResendTokenRegistration = () => {
  return useMutation({
    mutationKey: ["client-api", "resendTokenRegistration"],
    mutationFn: ({ userId }) =>
      FetchUtils.post(ResourceUrl.CLIENT_RESEND_TOKEN_REGISTRATION(userId)),
  });
};
