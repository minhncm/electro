import { Text } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useModals } from "@mantine/modals";
import { zod4Resolver } from "mantine-form-zod-resolver";
import {
  useConfirmRegistration,
  useResendTokenRegistration,
} from "~/hooks/client/use-auth-api";
import useAuthStore from "~/stores/use-auth-store";
import NotifyUtils from "~/utils/NotifyUtils";
import ClientSignupConfigs from "./ClientSignupConfigs";

function useClientSignupStepTwoViewModel(nextStep) {
  const modals = useModals();
  const { currentSignupUserId, updateCurrentSignupUserId } = useAuthStore();

  const form = useForm({
    initialValues: ClientSignupConfigs.initialFormValuesOfStepTwo,
    validate: zod4Resolver(ClientSignupConfigs.formSchemaOfStepTwo),
  });

  const confirmRegistrationApi = useConfirmRegistration();

  const handleFormSubmit = form.onSubmit((formValues) => {
    if (currentSignupUserId) {
      const requestBody = {
        userId: currentSignupUserId,
        token: formValues.token,
      };

      confirmRegistrationApi.mutate(requestBody, {
        onSuccess: () => {
          NotifyUtils.simpleSuccess("Xác nhận tài khoản thành công");
          nextStep();
          updateCurrentSignupUserId(null);
        },
        onError: () =>
          NotifyUtils.simpleFailed("Xác nhận tài khoản không thành công"),
      });
    }
  });

  const resendRegistrationTokenApi = useResendTokenRegistration();

  const handleResendTokenButton = () => {
    if (currentSignupUserId) {
      modals.openConfirmModal({
        size: "xs",
        closeOnClickOutside: false,
        closeOnConfirm: false,
        title: <strong>Gửi lại mã xác nhận</strong>,
        children: (
          <Text size="sm">
            Bạn có muốn gửi lại mã xác nhận đến email đã nhập trước đó?
          </Text>
        ),
        labels: {
          cancel: "Đóng",
          confirm: "Gửi",
        },
        confirmProps: {
          color: "blue",
          disabled: resendRegistrationTokenApi.isLoading,
        },
        onConfirm: () =>
          resendRegistrationTokenApi.mutate(
            { userId: currentSignupUserId },
            {
              onSuccess: () => NotifyUtils("Gửi mã xác nhận thành công"),
            },
          ),
      });
    }
  };

  return {
    form,
    handleFormSubmit,
    handleResendTokenButton,
  };
}

export default useClientSignupStepTwoViewModel;
