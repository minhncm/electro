import { Configs } from "~/types";
import ManagerPath from "~/constants/ManagerPath";
import ResourceUrl from "~/constants/ResourceURL";
import * as PageConfigs from "~/pages/PageConfig";
import { ColorSwatch, Group, Stack, Table, Text } from "@mantine/core";
import DateUtils from "~/utils/DateUtils";
import OrderStatusBadge from "~/components/OrderStatusBadge";
import MiscUtils from "~/utils/MiscUtils";
import PaymentStatusBadge from "~/components/PaymentStatusBadge";

class OrderConfigs extends Configs {
  static managerPath = ManagerPath.ORDER;
  static resourceUrl = ResourceUrl.ORDER;
  static resourceKey = "orders";
  static createTitle = "Thêm đơn hàng";
  static updateTitle = "Cập nhật đơn hàng";
  static manageTitle = "Quản lý đơn hàng";

  static _rawProperties = {
    ...PageConfigs.getProperties(true, true),
    code: {
      label: "Mã đơn hàng",
      isShowInTable: true,
    },
    "orderResource.name": {
      label: "Tên nguồn đơn hàng",
      isShowInTable: true,
    },
    user: {
      label: "Người đặt hàng",
      isShowInTable: true,
    },
    to: {
      label: "Người nhận hàng",
      isShowInTable: true,
    },
    totalPay: {
      label: "Tổng tiền trả",
      isShowInTable: true,
    },
    warehouse: {
      label: "Kho",
      isShowInTable: true,
    },
    status: {
      label: "Trạng thái đơn hàng",
      isShowInTable: true,
    },
  };

  static EntityDetailTableRowsFragment = ({ entity }) => {
    const PaymentMethodIcon = PageConfigs.paymentMethodIconMap[entity.paymentMethodType];

    return (
      <>
        <Table.Tr>
          <Table.Td>{OrderConfigs.properties.id.label}</Table.Td>
          <Table.Td>{entity.id}</Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td>{OrderConfigs.properties.createdAt.label}</Table.Td>
          <Table.Td>{DateUtils.formatterDate(entity.createdAt)}</Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td>{OrderConfigs.properties.updatedAt.label}</Table.Td>
          <Table.Td>{DateUtils.formatterDate(entity.updatedAt)}</Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td>{OrderConfigs.properties.code.label}</Table.Td>
          <Table.Td>{entity.code}</Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td>{OrderConfigs.properties.status.label}</Table.Td>
          <Table.Td>
            <OrderStatusBadge status={entity.status} />
          </Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td>{OrderConfigs.properties["orderResource.name"].label}</Table.Td>
          <Table.Td>
            <Group gap="xs">
              <ColorSwatch color={entity.orderResource.color} />
              {entity.orderResource.name}
            </Group>
          </Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td>Tên lý do hủy đơn hàng</Table.Td>
          <Table.Td>{entity.orderCancellationReason?.name}</Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td>Ghi chú đơn hàng</Table.Td>
          <Table.Td style={{ maxWidth: 300 }}>{entity.note}</Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td>Người đặt hàng</Table.Td>
          <Table.Td>
            <Stack gap={0}>
              <Text size="sm">{entity.user.fullname}</Text>
              <Text size="xs" c="dimmed">
                {entity.user.username}
              </Text>
            </Stack>
          </Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td>Người nhận hàng</Table.Td>
          <Table.Td>
            <Stack gap={0}>
              <Text size="sm">{entity.toName}</Text>
              <Text size="xs">{entity.toPhone}</Text>
              <Text size="xs" c="dimmed">
                {[entity.toAddress, entity.toWardName, entity.toDistrictName, entity.toProvinceName].join(", ")}
              </Text>
            </Stack>
          </Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td>Số mặt hàng</Table.Td>
          <Table.Td>{entity.orderVariants.length} SKU</Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td>Tổng thành tiền</Table.Td>
          <Table.Td>{MiscUtils.toVND(entity.totalAmount)}</Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td>Thuế</Table.Td>
          <Table.Td>{entity.tax * 100 + "%"}</Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td>Phí vận chuyển</Table.Td>
          <Table.Td>{MiscUtils.toVND(entity.shippingCost)}</Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td>{OrderConfigs.properties.totalPay.label}</Table.Td>
          <Table.Td>{MiscUtils.toVND(entity.totalPay)}</Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td>Hình thức thanh toán</Table.Td>
          <Table.Td>
            <PaymentMethodIcon />
          </Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td>Trạng thái thanh toán</Table.Td>
          <Table.Td>
            <PaymentStatusBadge status={entity.paymentStatus} />
          </Table.Td>
        </Table.Tr>
      </>
    );
  };

  static properties = this._rawProperties;
  static initialCreateUpdateFormValues = {};
  static createUpdateFormSchema = {};
}

export default OrderConfigs;
