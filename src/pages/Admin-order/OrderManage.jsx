import {
  ActionIcon,
  ColorSwatch,
  Group,
  Highlight,
  Stack,
  Table,
  Text,
  useMantineTheme,
} from "@mantine/core";
import { Clipboard, Plus } from "tabler-icons-react";
import FilterPanel from "~/components/FilterPanel";
import ManageHeader from "~/components/ManageHeader";
import ManageMain from "~/components/ManageMain/ManageMain";
import ManagePagination from "~/components/ManagePagination";
import ManageTable from "~/components/ManageTable";
import OrderStatusBadge from "~/components/OrderStatusBadge";
import PaymentStatusBadge from "~/components/PaymentStatusBadge";
import SearchPanel from "~/components/SearchPanel";
import useGetAllApi from "~/hooks/use-get-all-api";
import useResetManagePageState from "~/hooks/use-reset-manage-page-state";
import * as PageConfigs from "~/pages/PageConfig";
import DocketConfigs from "~/pages/Admin-docket/DocketConfigs";
import OrderConfigs from "~/pages/Admin-order/OrderConfigs";
import DateUtils from "~/utils/DateUtils";
import MiscUtils from "~/utils/MiscUtils";
import NotifyUtils from "~/utils/NotifyUtils";

function OrderManage() {
  useResetManagePageState();

  const { data: listResponse = PageConfigs.initialListResponse, isLoading } =
    useGetAllApi(OrderConfigs.resourceUrl, OrderConfigs.resourceKey);

  const theme = useMantineTheme();
  const ShowedPropertiesFragment = ({ entity }) => {
    const PaymentMethodIcon =
      PageConfigs.paymentMethodIconMap[entity.paymentMethodType];

    return (
      <>
        <Table.Td>{entity.id}</Table.Td>
        <Table.Td>{DateUtils.formatterDate(entity.createdAt)}</Table.Td>
        <Table.Td>
          <Group gap="xs">
            <Highlight size="sm" fs={theme.fontFamilyMonospace}>
              {entity.code}
            </Highlight>
            <ActionIcon
              color="blue"
              variant="outline"
              size="sm"
              title="Sao chép mã đơn hàng này"
              onClick={() => {
                void navigator.clipboard.writeText(entity.code);
                NotifyUtils.simple(
                  <Text inherit>
                    Đã sao chép mã đơn hàng <strong>{entity.code}</strong>
                  </Text>,
                );
              }}
            >
              <Clipboard size={15} strokeWidth={1.5} />
            </ActionIcon>
          </Group>
        </Table.Td>
        <Table.Td>
          <Group gap="xs">
            <ColorSwatch color={entity.orderResource.color} />
            <Highlight size="sm">{entity.orderResource.name}</Highlight>
          </Group>
        </Table.Td>
        <Table.Td>
          <Stack gap={0}>
            <Highlight size="sm">{entity.user.fullname}</Highlight>
            <Highlight size="xs" color="dimmed">
              {entity.user.username}
            </Highlight>
          </Stack>
        </Table.Td>
        <Table.Td>
          <Stack gap={0}>
            <Highlight size="sm">{entity.toName}</Highlight>
            <Highlight size="xs">{entity.toPhone}</Highlight>
            <Highlight size="xs" color="dimmed">
              {entity.toAddress}
            </Highlight>
            <Highlight size="xs" color="dimmed">
              {[entity.toWardName, entity.toDistrictName].join(", ")}
            </Highlight>
            <Highlight size="xs" color="dimmed">
              {entity.toProvinceName}
            </Highlight>
          </Stack>
        </Table.Td>
        <Table.Td style={{ textAlign: "right" }}>
          <Stack align="end" gap={5}>
            <Text weight={500} size="sm">
              {MiscUtils.toVND(entity.totalPay) + " ₫"}
            </Text>
            <PaymentMethodIcon color={theme.colors.gray[5]} />
          </Stack>
        </Table.Td>
        <Table.Td>
          <ActionIcon
            color="blue"
            variant="subtle"
            size={24}
            title="Tạo phiếu xuất kho"
            component="a"
            href={DocketConfigs.managerPath + "/create"}
            target="_blank"
          >
            <Plus />
          </ActionIcon>
        </Table.Td>
        <Table.Td>
          <Stack gap="xs" sx={{ alignItems: "start" }}>
            <OrderStatusBadge status={entity.status} />
            <PaymentStatusBadge status={entity.paymentStatus} />
          </Stack>
        </Table.Td>
      </>
    );
  };

  return (
    <Stack>
      <ManageHeader title={OrderConfigs.manageTitle} />

      <SearchPanel />
      <FilterPanel />

      <ManageMain listResponse={listResponse} isLoading={isLoading}>
        <ManageTable
          listResponse={listResponse}
          properties={OrderConfigs.properties}
          showedPropertiesFragment={(entity) => (
            <ShowedPropertiesFragment entity={entity} />
          )}
          entityDetailTableRowsFragment={(entity) => (
            <OrderConfigs.EntityDetailTableRowsFragment entity={entity} />
          )}
        ></ManageTable>
      </ManageMain>

      <ManagePagination listResponse={listResponse} />
    </Stack>
  );
}

export default OrderManage;
