import { Box, Group, Stack, Table, Title, useMantineTheme } from "@mantine/core";
import { Apps } from "tabler-icons-react";

function ClientProductSpecification({ product }) {
  const theme = useMantineTheme();
  return (
    <Stack>
      <Group gap="xs">
        <Apps />
        <Title order={2}>Thông số kỹ thuật</Title>
      </Group>
      <Box
        style={{
          border: `1px solid ${theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]}`,
          borderRadius: theme.radius.md,
          width: 500,
        }}
      >
        <Table>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Thông số</Table.Th>
              <Table.Th>Giá trị</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {product.productSpecifications?.content.map((specification) => (
              <Table.Tr key={specification.id}>
                <Table.Td>{specification.name}</Table.Td>
                <Table.Td>{specification.value}</Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      </Box>
    </Stack>
  );
}

export default ClientProductSpecification;
