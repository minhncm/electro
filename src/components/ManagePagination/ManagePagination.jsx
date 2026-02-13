import { Group, Pagination, Select, Text } from "@mantine/core";
import React from "react";
import useManagePaginationViewModel from "~/components/ManagePagination/ManagePagination.vm";
import * as PageConfigs from "~/pages/PageConfig";

function ManagePagination({ listResponse }) {
  const {
    activePage,
    activePageSize,
    handlePageSizeSelect,
    handlePaginationButton,
  } = useManagePaginationViewModel();

  if (!listResponse || listResponse.totalElements === 0) return null;

  const pageSizeSelectList = PageConfigs.initialListSelectList.map(
    (pageSize) =>
      Number(pageSize.value) > listResponse.totalElements
        ? { ...pageSize, disabled: true }
        : pageSize,
  );

  return (
    <Group justify="space-between">
      <Text>
        <Text component="span" fw={500}>
          Trang {activePage}
        </Text>
        <span> / {listResponse.totalPages}</span>
        <Text component="span" c="gray" size="sm">
          ({listResponse.totalElements})
        </Text>
      </Text>
      <Pagination
        total={listResponse.totalPages}
        value={activePage}
        onChange={handlePaginationButton}
      />
      <Group>
        <Text size="sm">Số hàng trên trang </Text>
        <Select
          w={72}
          variant="filled"
          value={String(activePageSize)}
          data={pageSizeSelectList}
          onChange={handlePageSizeSelect}
        />
      </Group>
    </Group>
  );
}

export default React.memo(ManagePagination);
