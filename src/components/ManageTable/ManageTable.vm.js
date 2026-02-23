import { Text } from "@mantine/core";
import { useModals } from "@mantine/modals";
import EntityDetailTable from "~/components/EntityDetailTable";
import useDeleteByIdApi from "~/hooks/use-delete-by-id-api";
import useAppStore from "~/stores/use-app-store";

function useManageTableViewModel({
  listResponse,
  properties,
  resourceUrl,
  resourceKey,
  entityDetailTableRowsFragment,
}) {
  const modals = useModals();
  const deleteByIdApi = useDeleteByIdApi(resourceUrl, resourceKey);
  const { selection, setSelection, activePage, setActivePage } = useAppStore();

  const tableHeads = Object.values(properties).flatMap((property) =>
    property.isShowInTable ? property.label : [],
  );

  const handleToggleAllRowsCheckBox = () =>
    setSelection((prev) =>
      prev.length === listResponse.content.length
        ? []
        : listResponse.content.map((entity) => entity.id),
    );

  const handleToggleRowsCheckBox = (entityId) =>
    setSelection((prev) =>
      prev.includes(entityId)
        ? prev.filter((item) => item !== entityId)
        : [...prev, entityId],
    );

  const handleViewEntityButton = (entity) => {
    modals.openModal({
      size: "lg",
      title: <strong>Thông tin chi tiết</strong>,
      children: (
        <EntityDetailTable
          entity={entity}
          entityDetailTableRowsFragment={entityDetailTableRowsFragment}
        />
      ),
    });
  };

  const handleDeleteEntityButton = (entityId) => {
    modals.openConfirmModal({
      size: "xs",
      closeOnClickOutside: false,
      title: <strong>Xác nhận xóa</strong>,
      children: <Text size="sm">Xóa phần tử có ID {entityId}?</Text>,
      labels: {
        cancel: "Không xóa",
        confirm: "Xóa",
      },
      confirmProps: { color: "red" },
      onConfirm: () => handleConfirmedDeleteEntityButton(entityId),
    });
  };

  const handleConfirmedDeleteEntityButton = (entityId) => {
    deleteByIdApi.mutate(entityId, {
      onSuccess: () => {
        if (listResponse.content.length === 1) {
          setActivePage(activePage - 1 || 1);
        }
      },
    });
  };
  return {
    selection,
    tableHeads,
    handleToggleAllRowsCheckBox,
    handleToggleRowsCheckBox,
    handleViewEntityButton,
    handleDeleteEntityButton,
  };
}

export default useManageTableViewModel;
