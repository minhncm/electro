import {
  Anchor,
  Button,
  Group,
  Image,
  Stack,
  Table,
  Text,
} from "@mantine/core";
import { Link } from "react-router-dom";
import MiscUtils from "~/utils/MiscUtils";

function OrderItemRow({ orderItem, canReview }) {
  return (
    <Table.Tr>
      <Table.Td>
        <Group gap="xs">
          <Image
            radius="md"
            w={65}
            h={65}
            src={orderItem.variant.product.thumbnail || undefined}
            alt={orderItem.variant.product.name}
          />
          <Stack gap={3.5}>
            <Anchor
              component={Link}
              to={"/product/" + orderItem.variant.product.slug}
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

            {canReview && (
              <Button
                size="xs"
                radius="md"
                variant="outline"
                mt={5}
                w="fit-content"
                disabled={orderItem.variant.product.isReviewed}
                title={
                  orderItem.variant.product.isReviewed
                    ? "Sản phẩm đã được bạn đánh giá"
                    : ""
                }
              >
                Đánh giá
              </Button>
            )}
          </Stack>
        </Group>
      </Table.Td>
      <Table.Td>
        <Text size="sm">{MiscUtils.toVND(orderItem.price)}</Text>
      </Table.Td>
      <Table.Td>
        <Text size="sm">{orderItem.quantity}</Text>
      </Table.Td>
      <Table.Td>
        <Text size="sm" fw={500} c="blue">
          {MiscUtils.toVND(orderItem.amount)}
        </Text>
      </Table.Td>
    </Table.Tr>
  );
}

export default OrderItemRow;
