import { Anchor, Button, Card, Divider, Group, Image, Stack, Text, useMantineTheme } from "@mantine/core";
import { Link } from "react-router-dom";
import OrderBadge from "~/components/OrderBadge/OrderBadge";
import PaymentBadge from "~/components/PaymentBadge/PaymentBadge";

function ClientOrderCard() {
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
            <Text fw={500}>Mã đơn hàng: 1R9LFP7EEFMJ</Text>
            <Text c="dimmed">Ngày tạo: 29/10/2025</Text>
          </Group>
          <Group gap="xs">
            <OrderBadge status={1} />
            <PaymentBadge status={1} />
          </Group>
        </Group>
        <Divider />

        {/* content */}
        <Group justify="space-between">
          <Group>
            <Image
              radius="md"
              w={55}
              h={55}
              src="https://media-api-beta.thinkpro.vn/media/core/products/2022/12/18/beosound-2-thinkpro-01.jpeg?w=700&h=700"
              alt=""
            />
            <Stack gap={3.5}>
              <Anchor component={Link} to="/product/" fw={500} size="sm">
                Loa di động B&O BeoSound
              </Anchor>

              <Stack gap={1.5}>
                <Text size="xs" c="dimmed">
                  Kích cỡ: L
                </Text>
                <Text size="xs" c="dimmed">
                  Màu sắc: Đỏ
                </Text>
              </Stack>
            </Stack>
          </Group>

          <Group gap="xs">
            <Text>12.000.000 ₫</Text>
            <Text c="blue" size="lg">
              x1
            </Text>
          </Group>
        </Group>

        <Divider />
        <Group justify="space-between">
          <Button radius="md" variant="outline" component={Link} to={`/order/detail/${"1R9LFP7EEFMJ"}`}>
            Xem chi tiết
          </Button>

          <Group gap={5}>
            <Text>Tổng tiền: </Text>
            <Text size="lg" fw={500}>
              69.300.000 ₫
            </Text>
          </Group>
        </Group>
      </Stack>
    </Card>
  );
}

export default ClientOrderCard;
