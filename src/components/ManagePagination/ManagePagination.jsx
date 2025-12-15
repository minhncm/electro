import { Group, Pagination, Select, Text } from "@mantine/core";

function ManagePagination() {
  return (
    // TODO: need to complete logic
    <Group justify="space-between">
      <Text>
        <Text component="span" fw={500}>
          Trang 1
        </Text>
        <span> / 7</span>
        <Text component="span" c="gray" size="sm">
          (34)
        </Text>
      </Text>
      <Pagination total={7} value={1} />
      <Group>
        <Text size="sm">Số hàng trên trang </Text>
        <Select w={72} variant="filled" value={5} />
      </Group>
    </Group>
  );
}

export default ManagePagination;
