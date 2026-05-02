import {
  Badge,
  Button,
  Card,
  Grid,
  Group,
  Image,
  ScrollArea,
  Stack,
  Table,
  Text,
  ThemeIcon,
  useMantineTheme,
} from "@mantine/core";
import { ArrowRight, Check, Circle, Plus, X } from "tabler-icons-react";
import OrderBadge from "~/components/OrderStatusBadge/OrderStatusBadge";
import PaymentBadge from "~/components/PaymentStatusBadge/PaymentStatusBadge";
import * as PageConfig from "~/pages/PageConfig";
import DateUtils from "~/utils/DateUtils";
import MiscUtils from "~/utils/MiscUtils";
import OrderItemRow from "./OrderItemRow";

function OrderContent({ order }) {
  const theme = useMantineTheme();

  const cardStyle = {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[5]
        : theme.colors.gray[0],
    height: "100%",
  };

  const getWaybillLogInfo = (waybillLog) => {
    const waybillLogMap = {
      0: {
        icon: Circle,
        color: "gray",
        text: "Trạng thái vận đơn không rõ",
      },
      1: {
        icon: Plus,
        color: "blue",
        text: "Đơn hàng được duyệt và vận đơn được tạo",
      },
      2: {
        icon: ArrowRight,
        color: "orange",
        text: "Đang giao hàng",
      },
      3: {
        icon: Check,
        color: "teal",
        text: "Giao hàng thành công",
      },
      4: {
        icon: X,
        color: "pink",
        text: "Vận đơn bị hủy",
      },
    };

    return waybillLogMap[waybillLog.currentStatus || 0];
  };

  const PaymentMethodIcon =
    PageConfig.paymentMethodIconMap[order.paymentMethodType];
  return (
    <Stack>
      <Card p="md" radius="md" style={cardStyle}>
        <Group justify="space-between">
          <Group>
            <Text fw={500}>Mã đơn hàng: {order.code}</Text>
            <Text c="dimmed">
              {" "}
              Ngày tạo: {DateUtils.formatterDate(order.createdAt)}
            </Text>
          </Group>
          <Group gap="xs">
            <OrderBadge status={order.status} />
            <PaymentBadge status={order.paymentStatus} />
          </Group>
        </Group>
      </Card>

      <Grid>
        <Grid.Col span={4}>
          <Card p="md" radius="md" style={cardStyle}>
            <Stack gap="xs">
              <Text fw={500} c="dimmed">
                Thông tin người nhận
              </Text>
              <Stack gap={5}>
                <Text size="sm" fw={500}>
                  {order.toName}
                </Text>
                <Text size="sm">{order.toPhone}</Text>
                <Text size="sm">
                  {[
                    order.toAddress,
                    order.toWardName,
                    order.toDistrictName,
                    order.toProvinceName,
                  ]
                    .filter(Boolean)
                    .join(", ")}
                </Text>
              </Stack>
            </Stack>
          </Card>
        </Grid.Col>

        <Grid.Col span={4}>
          <Card p="md" radius="md" style={cardStyle}>
            <Stack gap="xs">
              <Text fw={500} c="dimmed">
                Hình thức giao hàng
              </Text>
              <Image
                src={
                  "https://file.hstatic.net/200000472237/file/logo_b8515d08a6d14b09bce4e39221712e15.png"
                }
                maw={170}
              />
            </Stack>
          </Card>
        </Grid.Col>

        <Grid.Col span={4}>
          <Card p="md" radius="md" style={cardStyle}>
            <Stack gap="xs">
              <Text fw={500} c="dimmed">
                Hình thức thanh toán
              </Text>
              <Group gap="xs">
                <PaymentMethodIcon color={theme.colors.gray[5]} />
                <Text size="sm">
                  {PageConfig.paymentMethodNameMap[order.paymentMethodType]}
                </Text>
              </Group>
            </Stack>
          </Card>
        </Grid.Col>
      </Grid>

      <Card style={cardStyle}>
        <Stack gap="xs">
          <Text fw={500} c="dimmed">
            Theo dõi vận đơn
          </Text>

          {order.waybill ? (
            <Grid>
              <Grid.Col span={3}>
                <Stack>
                  <Stack align="flex-start" gap={5}>
                    <Text size="sm" fw={500}>
                      Mã vận đơn
                    </Text>
                    <Badge radius="md" size="lg" variant="filled" color="grape">
                      {order.waybill.code}
                    </Badge>
                  </Stack>

                  <Stack align="flex-start" gap={5}>
                    <Text size="sm" fw={500}>
                      Giao hàng dự kiến
                    </Text>
                    <Text size="sm">
                      {DateUtils.formatterDate(
                        order.waybill.expectedDeliveryTime,
                        "DD/MM/YYYY",
                      )}
                    </Text>
                  </Stack>
                </Stack>
              </Grid.Col>

              <Grid.Col span={9}>
                <Stack align="flex-start" gap="xs">
                  <Text size="sm" fw={500}>
                    Lịch sử vận đơn
                  </Text>
                  <Stack gap={5}>
                    {[...order.waybill.waybillLogs].reverse().map((log) => {
                      const waybillLogInfo = getWaybillLogInfo(log);

                      return (
                        <Group key={log.id} gap="sm" wrap="nowrap">
                          <ThemeIcon
                            color={waybillLogInfo.color}
                            size="sm"
                            variant="filled"
                            radius="xl"
                          >
                            <waybillLogInfo.icon size={12} />
                          </ThemeIcon>
                          <Text size="xs" c="dimmed">
                            {DateUtils.formatterDate(log.createdAt)}
                          </Text>
                          <Text size="xs">{waybillLogInfo.text}</Text>
                        </Group>
                      );
                    })}
                  </Stack>
                </Stack>
              </Grid.Col>
            </Grid>
          ) : (
            <Text size="sm">Hiện đơn hàng chưa có vận đơn</Text>
          )}
        </Stack>
      </Card>

      <Card p={0} radius="md" style={cardStyle}>
        <ScrollArea>
          <Table verticalSpacing="sm" horizontalSpacing="lg">
            <Table.Thead>
              <Table.Tr>
                <Table.Th miw={325}>
                  <Text fw="normal" size="sm" c="dimmed" ta="start">
                    Mặt hàng
                  </Text>
                </Table.Th>
                <Table.Th miw={125}>
                  <Text fw="normal" size="sm" c="dimmed" ta="start">
                    Đơn giá
                  </Text>
                </Table.Th>
                <Table.Th miw={150}>
                  <Text fw="normal" size="sm" c="dimmed" ta="start">
                    Số lượng
                  </Text>
                </Table.Th>

                <Table.Th miw={125}>
                  <Text fw="normal" size="sm" c="dimmed" ta="start">
                    Thành tiền
                  </Text>
                </Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {order.orderVariants.map((orderItem) => (
                <OrderItemRow
                  key={orderItem.variant.id}
                  orderItem={orderItem}
                  canReview={order.status === 4 && order.paymentStatus === 2}
                />
              ))}
            </Table.Tbody>
          </Table>
        </ScrollArea>
      </Card>

      <Grid>
        <Grid.Col span={8} />
        <Grid.Col span={4}>
          <Stack gap="xs">
            <Group justify="space-between">
              <Text size="sm" c="dimmed">
                Tạm tính
              </Text>
              <Text size="sm" ta="right">
                {MiscUtils.toVND(order.totalAmount)}
              </Text>
            </Group>
            <Group justify="space-between">
              <Text size="sm" c="dimmed">
                Thuế(10%)
              </Text>
              <Text size="sm" ta="right">
                {MiscUtils.toVND(order.totalAmount * 0.1)}
              </Text>
            </Group>
            <Group justify="space-between">
              <Text size="sm" c="dimmed">
                Phí vận chuyển
              </Text>
              <Text size="sm" ta="right">
                {MiscUtils.toVND(order.shippingCost)}
              </Text>
            </Group>
            <Group justify="space-between">
              <Text size="sm" fw={500}>
                Tổng tiền
              </Text>
              <Text size="lg" fw={700} c="blue" ta="right">
                {MiscUtils.toVND(order.totalPay)}
              </Text>
            </Group>
          </Stack>
        </Grid.Col>
      </Grid>

      <Button
        color="pink"
        radius="md"
        w="fit-content"
        disabled={![1, 2].includes(order.status)}
      >
        Hủy đơn hàng
      </Button>
    </Stack>
  );
}

export default OrderContent;
