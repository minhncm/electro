import { Table } from "@mantine/core";

const entity = {
  id: 34,
  createdAt: "2025-11-16T08:46:19Z",
  updatedAt: "2025-11-16T08:46:19Z",
  line: "Thon Phu My",
  province: {
    id: 62,
    createdAt: "2023-02-14T17:00:00Z",
    updatedAt: "2023-02-14T17:00:00Z",
    name: "Sóc Trăng",
    code: "94",
  },
  district: {
    id: 688,
    createdAt: "2023-02-14T17:00:00Z",
    updatedAt: "2023-02-14T17:00:00Z",
    name: "Huyện Trần Đề",
    code: "951",
  },
  ward: {
    id: 10444,
    createdAt: "2023-02-14T17:00:00Z",
    updatedAt: "2023-02-14T17:00:00Z",
    name: "Xã Tài Văn",
    code: "31687",
  },
};

function EntityDetailTable({ entityId, resourceUrl, resourceKey, entityDetailTableRowsFragment }) {
  return (
    <Table striped highlightOnHover>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Thuộc tính</Table.Th>
          <Table.Th>Giá trị</Table.Th>
        </Table.Tr>
      </Table.Thead>
      {/* TODO: call api (entiryId) để lấy entity */}
      <Table.Tbody>{entityDetailTableRowsFragment(entity)}</Table.Tbody>
    </Table>
  );
}

export default EntityDetailTable;
