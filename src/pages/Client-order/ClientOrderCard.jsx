import { Anchor, Button, Card, Divider, Group, Image, Stack, Text, useMantineTheme } from "@mantine/core";
import { Link } from "react-router-dom";
import OrderBadge from "~/components/OrderBadge/OrderBadge";
import PaymentBadge from "~/components/PaymentBadge/PaymentBadge";
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
        backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[0],
      }}
    >
      <Stack>
        <Group justify="space-between">
          <Group>
            <Text fw={500}>Mã đơn hàng: {order.orderCode}</Text>
            <Text c="dimmed">Ngày tạo: {DateUtils.formatterDate(order.orderCreatedAt, "DD/MM/YYYY")}</Text>
          </Group>
          <Group gap="xs">
            <OrderBadge status={order.orderStatus} />
            <PaymentBadge status={order.orderPaymentStatus} />
          </Group>
        </Group>
        <Divider />

        {/* content */}
        {order.orderItems.map((orderItem) => (
          <Group key={orderItem.orderItemVariant.variantId} justify="space-between">
            <Group>
              <Image
                radius="md"
                w={55}
                h={55}
                src={orderItem.orderItemVariant.variantProduct.productThumbnail || undefined}
                alt={orderItem.orderItemVariant.variantProduct.productName}
                fallbackSrc={DefaultImage}
              />
              <Stack gap={3.5}>
                <Anchor
                  component={Link}
                  to={`/product/${orderItem.orderItemVariant.variantProduct.productSlug}`}
                  fw={500}
                  size="sm"
                >
                  {orderItem.orderItemVariant.variantProduct.productName}
                </Anchor>
                {orderItem.orderItemVariant.variantProperties && (
                  <Stack gap={1.5}>
                    {orderItem.orderItemVariant.variantProperties.content.map((variantProperty) => (
                      <Text key={variantProperty.id} size="xs" c="dimmed">
                        {variantProperty.name}: {variantProperty.value}
                      </Text>
                    ))}
                  </Stack>
                )}
              </Stack>
            </Group>

            <Group gap="xs">
              <Text>{MiscUtils.toVND(orderItem.orderItemPrice)}</Text>
              <Text c="blue" size="lg">
                ×{orderItem.orderItemQuantity}
              </Text>
            </Group>
          </Group>
        ))}

        <Divider />
        <Group justify="space-between">
          <Button radius="md" variant="outline" component={Link} to={`/order/detail/${order.orderCode}`}>
            Xem chi tiết
          </Button>

          <Group gap={5}>
            <Text>Tổng tiền: </Text>
            <Text size="lg" fw={500}>
              {MiscUtils.toVND(order.orderTotalPay)}
            </Text>
          </Group>
        </Group>
      </Stack>
    </Card>
  );
}

export default ClientOrderCard;
