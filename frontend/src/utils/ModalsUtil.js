import { Text } from "@mantine/core";
import { modals } from "@mantine/modals";

function onModalDelete(content, onConfirm) {
  modals.openConfirmModal({
    size: "xs",
    title: <strong>Xác nhận xóa</strong>,
    children: <Text size="sm">{content}</Text>,
    labels: {
      cancel: "Không xóa",
      confirm: "Xóa",
    },
    confirmProps: { color: "red" },
    onConfirm: onConfirm,
  });
}

export default onModalDelete;
