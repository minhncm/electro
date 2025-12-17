import { Text } from "@mantine/core";
import { useModals } from "@mantine/modals";
import { useState } from "react";
import EntityDetailTable from "~/components/EntityDetailTable";

function useManageTableViewModel({
  listResponse,
  properties,
  resourceUrl,
  resourceKey,
  entityDetailTableRowsFragment,
}) {
  const modals = useModals();

  const [selection, setSelection] = useState([]);
  // TODO: hàm deleteById;

  const tableHeads = Object.values(properties).flatMap((property) => (property.isShowInTable ? property.label : []));

  const handleToggleAllRowsCheckBox = () =>
    setSelection((prev) =>
      prev.length === listResponse.content.length ? [] : listResponse.content.map((entity) => entity.id)
    );

  const handleToggleRowsCheckBox = (entityId) =>
    setSelection((prev) => (prev.includes(entityId) ? prev.filter((item) => item !== entityId) : [...prev, entityId]));

  const handleViewEntityButton = (entityId) => {
    modals.openModal({
      size: "lg",
      title: <strong>Thông tin chi tiết</strong>,
      children: (
        <EntityDetailTable
          entityId={entityId}
          resourceUrl={resourceUrl}
          resourceKey={resourceKey}
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
      // TODO: hàm confirm delete
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
