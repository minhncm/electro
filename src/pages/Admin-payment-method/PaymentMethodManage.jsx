import {
  Alert,
  Button,
  Group,
  LoadingOverlay,
  Paper,
  Stack,
  Switch,
  Table,
  Text,
} from "@mantine/core";
import * as PageConfigs from "~/pages/PageConfig";
import { AlertCircle } from "tabler-icons-react";
import PaymentMethodStatusBadge from "~/components/PaymentMethodStatusBadge";
import useGetAllApi from "~/hooks/admin/use-get-all-api";
import useResetManagePageState from "~/hooks/use-reset-manage-page-state";
import PaymentMethodConfigs from "./PaymentMethodConfigs";

function PaymentMethodManage() {
  const { data: listResponse } = useGetAllApi(
    PaymentMethodConfigs.resourceUrl,
    PaymentMethodConfigs.resourceKey,
  );
  const entitiesTableHeadsFragment = (
    <Table.Tr>
      <Table.Th>Kích hoạt</Table.Th>
      <Table.Th>Hình thức thanh toán</Table.Th>
      <Table.Th>Mã</Table.Th>
      <Table.Th>Trạng thái</Table.Th>
    </Table.Tr>
  );

  const entitiesTableRowsFragment = listResponse.content.map(
    (entity, index) => {
      const PaymentMethodIcon = PageConfigs.paymentMethodIconMap[entity.code];

      return (
        <Table.Tr key={entity.id}>
          <Table.Td>
            <Switch size="md" />
          </Table.Td>
          <Table.Td>
            <Group gap="xs">
              <PaymentMethodIcon />
              <Text>{entity.name}</Text>
            </Group>
          </Table.Td>
          <Table.Td>{entity.code}</Table.Td>
          <Table.Td>
            <PaymentMethodStatusBadge status={entity.status} />
          </Table.Td>
        </Table.Tr>
      );
    },
  );

  return (
    <Stack maw={800}>
      <Alert
        icon={<AlertCircle size={16} />}
        title="Thông báo"
        color="pink"
        radius="md"
      >
        Kích hoạt một vài hoặc tất cả các hình thức thanh toán, luôn phải có ít
        nhất một hình thức thanh toán được chọn.
      </Alert>

      <Paper
        shadow="xs"
        sx={{
          position: "relative",
          height: listResponse.content.length === 0 ? 170 : "auto",
        }}
      >
        <LoadingOverlay zIndex={50} />
        <Table horizontalSpacing="sm" verticalSpacing="sm">
          <Table.Thead>{entitiesTableHeadsFragment}</Table.Thead>
          <Table.Tbody>{entitiesTableRowsFragment}</Table.Tbody>
        </Table>
      </Paper>

      <Button w="fit-content">Cập nhật</Button>
    </Stack>
  );
}

export default PaymentMethodManage;
