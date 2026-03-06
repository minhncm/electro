import { Text } from "@mantine/core";
import { useModals } from "@mantine/modals";
import useDeleteByIdsApi from "~/hooks/use-delete-by-ids-api";
import useAppStore from "~/stores/use-app-store";
import NotifyUtils from "~/utils/NotifyUtils";

function useManageHeaderButtonsViewModel(
  listResponse,
  resourceUrl,
  resourceKey,
) {
  const { selection, setSelection, activePage, setActivePage } = useAppStore();
  const modals = useModals();
  const deleteByIdsApi = useDeleteByIdsApi(resourceUrl, resourceKey);

  const handleDeleteBatchEntitiesButton = () => {
    if (selection.length > 0) {
      modals.openConfirmModal({
        size: "xs",
        closeOnClickOutside: false,
        title: <strong>Xác nhận xóa</strong>,
        children: (
          <Text size="sm">Xóa (các) phần tử có ID {selection.join(",")}?</Text>
        ),
        labels: {
          cancel: "Không xóa",
          confirm: "Xóa",
        },
        confirmProps: { color: "red" },
        onConfirm: () => handleConfirmedDeleteBatchEntitiesButton(selection),
      });
    } else {
      NotifyUtils.simple("Vui lòng chọn ít nhất 1 phần tử để xóa");
    }
  };

  const handleConfirmedDeleteBatchEntitiesButton = (entityIds) => {
    if (entityIds.length > 0) {
      deleteByIdsApi.mutate(entityIds, {
        onSuccess: () => {
          if (listResponse.content.length === selection.length) {
            setActivePage(activePage - 1 || 1);
          }
          setSelection([]);
        },
      });
    }
  };

  return { handleDeleteBatchEntitiesButton };
}

export default useManageHeaderButtonsViewModel;
