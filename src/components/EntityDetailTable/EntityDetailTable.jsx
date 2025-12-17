import { Table } from "@mantine/core";

function EntityDetailTable({ entity, entityDetailTableRowsFragment }) {
  return (
    <Table striped highlightOnHover>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Thuộc tính</Table.Th>
          <Table.Th>Giá trị</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{entityDetailTableRowsFragment(entity)}</Table.Tbody>
    </Table>
  );
}

export default EntityDetailTable;
