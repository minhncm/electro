import {
  Badge,
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
import OrderBadge from "~/components/OrderStatusBadge/OrderStatusBadge";
import PaymentBadge from "~/components/PaymentStatusBadge/PaymentStatusBadge";
import { Cash, Plus } from "tabler-icons-react";
import OrderItemRow from "./OrderIteRow";

function OrderContent() {
  const theme = useMantineTheme();

  const cardStyle = {
    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[0],
    height: "100%",
  };

  const PaymentMethodIcon = Cash;
  return (
    <Stack>
      <Card p="md" radius="md" style={cardStyle}>
        <Group justify="space-between">
          <Group>
            <Text fw={500}>Mã đơn hàng: 1R9LFP7EEFMJ</Text>
            <Text c="dimmed"> Ngày tạo: 14:07:06 29/10/2025</Text>
          </Group>
          <Group gap="xs">
            <OrderBadge status={1} />
            <PaymentBadge status={1} />
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
                  Nguyễn Công Minh
                </Text>
                <Text size="sm">0702772847</Text>
                <Text size="sm">Thôn Phú Mỹ, Xã Quế Xuân 2, Huyện Quế Sơn, Quảng Nam</Text>
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
                src={"https://file.hstatic.net/200000472237/file/logo_b8515d08a6d14b09bce4e39221712e15.png"}
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
                <Text size="sm">Tiền mặt</Text>
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

          {/* có vận đơn với show */}
          {false && (
            <Grid>
              <Grid.Col span={3}>
                <Stack>
                  <Stack align="flex-start" gap={5}>
                    <Text size="sm" fw={500}>
                      Mã vận đơn
                    </Text>
                    <Badge radius="md" size="lg" variant="filled" color="grape">
                      L4G68H
                    </Badge>
                  </Stack>

                  <Stack align="flex-start" gap={5}>
                    <Text size="sm" fw={500}>
                      Giao hàng dự kiến
                    </Text>
                    <Text size="sm">01/11/2025</Text>
                  </Stack>
                </Stack>
              </Grid.Col>

              <Grid.Col span={9}>
                <Stack align="flex-start" gap="xs">
                  <Text size="sm" fw={500}>
                    Lịch sử vận đơn
                  </Text>
                  <Stack gap={5}>
                    <Group gap="sm" wrap="nowrap">
                      <ThemeIcon color="blue" size="sm" variant="filled" radius="xl">
                        <Plus size={12} />
                      </ThemeIcon>
                      <Text size="xs" c="dimmed">
                        20:44:35 29/10/2025
                      </Text>
                      <Text size="xs">Đơn hàng được duyệt và vận đơn được tạo</Text>
                    </Group>
                  </Stack>
                </Stack>
              </Grid.Col>
            </Grid>
          )}
          <Text size="sm">Hiện đơn hàng chưa có vận đơn</Text>
        </Stack>
      </Card>

      <Card p={0} radius="md" style={cardStyle}>
        <ScrollArea>
          <Table verticalSpacing="sm" horizontalSpacing="lg">
            <Table.Thead>
              <Table.Tr>
                <Table.Th style={{ minWidth: 325 }}>
                  <Text fw="normal" size="sm" c="dimmed" ta="start">
                    Mặt hàng
                  </Text>
                </Table.Th>
                <Table.Th style={{ minWidth: 125 }}>
                  <Text fw="normal" size="sm" c="dimmed" ta="start">
                    Đơn giá
                  </Text>
                </Table.Th>
                <Table.Th style={{ minWidth: 150 }}>
                  <Text fw="normal" size="sm" c="dimmed" ta="start">
                    Số lượng
                  </Text>
                </Table.Th>

                <Table.Th style={{ minWidth: 125 }}>
                  <Text fw="normal" size="sm" c="dimmed" ta="start">
                    Thành tiền
                  </Text>
                </Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              <OrderItemRow />
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
                40.000.000 ₫
              </Text>
            </Group>
            <Group justify="space-between">
              <Text size="sm" c="dimmed">
                Thuế(10%)
              </Text>
              <Text size="sm" ta="right">
                4.000.000 ₫
              </Text>
            </Group>
            <Group justify="space-between">
              <Text size="sm" c="dimmed">
                Phí vận chuyển
              </Text>
              <Text size="sm" ta="right">
                0
              </Text>
            </Group>
            <Group justify="space-between">
              <Text size="sm" fw={500}>
                Tổng tiền
              </Text>
              <Text size="lg" fw={700} c="blue" ta="right">
                44.000.000 ₫
              </Text>
            </Group>
          </Stack>
        </Grid.Col>
      </Grid>
    </Stack>
  );
}

export default OrderContent;
