import { Anchor, Button, Group, Image, Stack, Table, Text } from "@mantine/core";
import { Link } from "react-router-dom";

function OrderItemRow() {
  return (
    <Table.Tr>
      <Table.Td>
        <Group gap="xs">
          <Image
            radius="md"
            w={65}
            h={65}
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

            <Button size="xs" radius="md" variant="outline" mt={5} w="fit-content">
              Đánh giá
            </Button>
          </Stack>
        </Group>
      </Table.Td>
      <Table.Td>
        <Text size="sm">12.000.000 ₫</Text>
      </Table.Td>
      <Table.Td>
        <Text size="sm">1</Text>
      </Table.Td>
      <Table.Td>
        <Text size="sm" fw={500} c="blue">
          12.000.000 ₫
        </Text>
      </Table.Td>
    </Table.Tr>
  );
}

export default OrderItemRow;
