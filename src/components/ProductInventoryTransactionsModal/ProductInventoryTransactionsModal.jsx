import { Table } from "@mantine/core";
import DateUtils from "~/utils/DateUtils";
import DocketTypeBadge from "~/components/DocketTypeBadge";
import DocketStatusBadge from "~/components/DocketStatusBadge";

function ProductInventoryTransactionsModal({ transactions }) {
  return (
    <Table horizontalSpacing="xs" verticalSpacing="xs" highlightOnHover striped>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Phiếu</Table.Th>
          <Table.Th>Ngày tạo</Table.Th>
          <Table.Th>Lý do</Table.Th>
          <Table.Th>Mã đơn nhập hàng</Table.Th>
          <Table.Th>Mã đơn hàng</Table.Th>
          <Table.Th>Số lượng</Table.Th>
          <Table.Th>SKU</Table.Th>
          <Table.Th>Kho</Table.Th>
          <Table.Th>Trạng thái</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {transactions.map((transaction) => (
          <Table.Tr key={transaction.docket.code}>
            <Table.Td>
              <DocketTypeBadge type={transaction.docket.type} />
            </Table.Td>
            <Table.Td>{DateUtils.formatterDate(transaction.docket.createdAt)}</Table.Td>
            <Table.Td>{transaction.docket.reason.name}</Table.Td>
            <Table.Td>{transaction.docket.purchaseOrder?.code}</Table.Td>
            <Table.Td>{transaction.docket.order?.code}</Table.Td>
            <Table.Td>{transaction.quantity}</Table.Td>
            <Table.Td>{transaction.variant.sku}</Table.Td>
            <Table.Td>{transaction.docket.warehouse.name}</Table.Td>
            <Table.Td>
              <DocketStatusBadge status={transaction.docket.status} />
            </Table.Td>
          </Table.Tr>
        ))}
      </Table.Tbody>
    </Table>
  );
}

export default ProductInventoryTransactionsModal;
