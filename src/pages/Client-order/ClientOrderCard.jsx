import {
  Anchor,
  Button,
  Card,
  Divider,
  Group,
  Image,
  Stack,
  Text,
  useMantineTheme,
} from "@mantine/core";
import { Link } from "react-router-dom";
import OrderBadge from "~/components/OrderStatusBadge/OrderStatusBadge";
import PaymentBadge from "~/components/PaymentStatusBadge/PaymentStatusBadge";
import DateUtils from "~/utils/DateUtils";
import DefaultImage from "~/images/image_default.png";
import MiscUtils from "~/utils/MiscUtils";

function ClientOrderCard({ order }) {
  const theme = useMantineTheme();

  return (
    <Card
      p="md"
      radius="md"
      style={{
        backgroundColor:
          theme.colorScheme === "dark"
            ? theme.colors.dark[5]
            : theme.colors.gray[0],
      }}
    >
      <Stack>
        <Group justify="space-between">
          <Group>
            <Text fw={500}>Mã đơn hàng: {order.code}</Text>
            <Text c="dimmed">
              Ngày tạo: {DateUtils.formatterDate(order.createdAt, "DD/MM/YYYY")}
            </Text>
          </Group>
          <Group gap="xs">
            <OrderBadge status={order.status} />
            <PaymentBadge status={order.paymentStatus} />
          </Group>
        </Group>
        <Divider />

        {/* content */}
        {order.orderVariants.map((orderItem) => (
          <Group key={orderItem.variant.id} justify="space-between">
            <Group>
              <Image
                radius="md"
                w={55}
                h={55}
                src={orderItem.variant.product.thumbnail || undefined}
                alt={orderItem.variant.product.name}
                fallbackSrc={DefaultImage}
              />
              <Stack gap={3.5}>
                <Anchor
                  component={Link}
                  to={`/product/${orderItem.variant.product.slug}`}
                  fw={500}
                  size="sm"
                >
                  {orderItem.variant.product.name}
                </Anchor>
                {orderItem.variant.properties && (
                  <Stack gap={1.5}>
                    {orderItem.variant.properties.content.map((property) => (
                      <Text key={property.id} size="xs" c="dimmed">
                        {property.name}: {property.value}
                      </Text>
                    ))}
                  </Stack>
                )}
              </Stack>
            </Group>

            <Group gap="xs">
              <Text>{MiscUtils.toVND(orderItem.price)}</Text>
              <Text c="blue" size="lg">
                ×{orderItem.quantity}
              </Text>
            </Group>
          </Group>
        ))}

        <Divider />
        <Group justify="space-between">
          <Button
            radius="md"
            variant="outline"
            component={Link}
            to={`/order/detail/${order.code}`}
          >
            Xem chi tiết
          </Button>

          <Group gap={5}>
            <Text>Tổng tiền: </Text>
            <Text size="lg" fw={500}>
              {MiscUtils.toVND(order.totalPay)}
            </Text>
          </Group>
        </Group>
      </Stack>
    </Card>
  );
}

export default ClientOrderCard;
