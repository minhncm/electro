import { Group, Stack, Text, Title } from "@mantine/core";
import { Receipt } from "tabler-icons-react";

function ClientProductDescription({ product }) {
  return (
    <Stack>
      <Group gap="xs">
        <Receipt />
        <Title order={2}>Mô tả sản phẩm</Title>
      </Group>
      <Text>{product.description}</Text>
    </Stack>
  );
}

export default ClientProductDescription;
