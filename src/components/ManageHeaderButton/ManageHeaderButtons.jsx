import { Button, Group } from "@mantine/core";
import React from "react";
import { Link } from "react-router-dom";
import { Plus, Trash } from "tabler-icons-react";
import useManageHeaderButtonsViewModel from "./ManageHeaderButtons.vm";

function ManageHeaderButtons({ listResponse, resourceUrl, resourceKey }) {
  const { handleDeleteBatchEntitiesButton } = useManageHeaderButtonsViewModel(
    listResponse,
    resourceUrl,
    resourceKey,
  );

  return (
    <Group gap="xs">
      <Button
        component={Link}
        to="create"
        variant="outline"
        leftSection={<Plus />}
      >
        Thêm mới
      </Button>
      <Button
        variant="outline"
        color="red"
        leftSection={<Trash />}
        onClick={handleDeleteBatchEntitiesButton}
      >
        Xóa hàng loạt
      </Button>
    </Group>
  );
}

export default React.memo(ManageHeaderButtons);
