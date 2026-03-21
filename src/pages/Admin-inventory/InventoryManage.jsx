import {
  ActionIcon,
  Anchor,
  Group,
  Stack,
  Table,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { useModals } from "@mantine/modals";
import { Hash, Plus } from "tabler-icons-react";
import ManageMain from "~/components/ManageMain/ManageMain";
import ManagePagination from "~/components/ManagePagination";
import ProductInventoryTransactionsModal from "~/components/ProductInventoryTransactionsModal";
import useGetAllApi from "~/hooks/use-get-all-api";
import useResetManagePageState from "~/hooks/use-reset-manage-page-state";
import * as PageConfigs from "~/pages/PageConfig";
import InventoryConfigs from "~/pages/Admin-inventory/InventoryConfigs";

function InventoryManage() {
  useResetManagePageState();

  const { data: listResponse = PageConfigs.initialListResponse, isLoading } =
    useGetAllApi(
      InventoryConfigs.productInventoryResourceUrl,
      InventoryConfigs.productInventoryResourceKey,
    );

  console.log(listResponse);

  const theme = useMantineTheme();
  const modals = useModals();

  const handleTransactionsAnchor = (productName, transactions) => {
    modals.openModal({
      size: 1200,
      title: (
        <strong>
          Lịch sử nhập xuất của sản phẩm &quot;{productName}&quot;
        </strong>
      ),
      children: (
        <ProductInventoryTransactionsModal transactions={transactions} />
      ),
    });
  };

  const entitiesTableHeadsFragment = (
    <Table.Tr>
      <Table.Th>Mã sản phẩm</Table.Th>
      <Table.Th>Tên sản phẩm</Table.Th>
      <Table.Th>Nhãn hiệu</Table.Th>
      <Table.Th>Nhà cung cấp</Table.Th>
      <Table.Th>Tồn thực tế</Table.Th>
      <Table.Th>Chờ xuất</Table.Th>
      <Table.Th>Có thể bán</Table.Th>
      <Table.Th>Sắp về</Table.Th>
      <Table.Th>Theo dõi</Table.Th>
      <Table.Th>Lịch sử</Table.Th>
    </Table.Tr>
  );

  const entitiesTableRowsFragment = listResponse.content.map((entity) => (
    <Table.Tr key={entity.product.id}>
      <Table.Td>{entity.product.code}</Table.Td>
      <Table.Td>{entity.product.name}</Table.Td>
      <Table.Td>{entity.product.brand?.name}</Table.Td>
      <Table.Td>{entity.product.supplier?.displayName}</Table.Td>
      <Table.Td>{entity.inventory}</Table.Td>
      <Table.Td>{entity.waitingForDelivery}</Table.Td>
      <Table.Td>{entity.available}</Table.Td>
      <Table.Td>{entity.incoming}</Table.Td>
      <Table.Td>
        <ActionIcon
          color="blue"
          variant="subtle"
          size={24}
          title="Thiết lập định mức tồn kho cho sản phẩm"
        >
          <Plus />
        </ActionIcon>
      </Table.Td>
      <Table.Td>
        <Anchor
          inherit
          onClick={() =>
            handleTransactionsAnchor(entity.product.name, entity.transactions)
          }
        >
          Giao dịch
        </Anchor>
      </Table.Td>
    </Table.Tr>
  ));
  return (
    <Stack>
      <Group gap="xs">
        <ActionIcon>
          <Hash />
        </ActionIcon>
        <Title order={3}>{InventoryConfigs.manageTitle}</Title>
      </Group>

      <ManageMain listResponse={listResponse} isLoading={isLoading}>
        <Table
          horizontalSpacing="sm"
          verticalSpacing="sm"
          highlightOnHover
          striped
        >
          <Table.Thead>{entitiesTableHeadsFragment}</Table.Thead>
          <Table.Tbody>{entitiesTableRowsFragment}</Table.Tbody>
        </Table>
      </ManageMain>

      <ManagePagination listResponse={listResponse} />
    </Stack>
  );
}

export default InventoryManage;
