import { Button, CloseButton, Group, Popover, Table, Text, useMantineTheme } from "@mantine/core";
import { useState } from "react";
import MiscUtils from "~/utils/MiscUtils";
import EnableStatusBadge from "~/components/EnableStatusBadge";

function VariantTablePopover({ variants, productProperties }) {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);

  if (variants.length === 0) {
    return <em>không có</em>;
  }

  return (
    <Popover
      opened={opened}
      onChange={() => setOpened(false)}
      position="bottom-end"
      withArrow
      arrowSize={10}
      arrowOffset={50}
      transitionProps="pop-top-right"
      shadow="md"
    >
      <Popover.Target>
        <Button size="xs" color="teal" compact onClick={() => setOpened((o) => !o)}>
          {variants.length + " phiên bản"}
        </Button>
      </Popover.Target>

      <Popover.Dropdown>
        <Group justify="space-between">
          <Text size="sm">Thông tin phiên bản</Text>
          <CloseButton onClick={() => setOpened(false)} />
        </Group>

        <Table horizontalSpacing="sm" verticalSpacing="sm" highlightOnHover striped>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>#</Table.Th>
              {productProperties &&
                productProperties.content.map((property, index) => (
                  <Table.Th key={index} color={theme.colors[theme.primaryColor][theme.colorScheme === "dark" ? 5 : 7]}>
                    {property.name}
                  </Table.Th>
                ))}
              <Table.Th>SKU</Table.Th>
              <Table.Th>Giá vốn</Table.Th>
              <Table.Th>Giá bán</Table.Th>
              <Table.Th>Trạng thái</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {variants.map((variant, index) => (
              <Table.Tr key={index}>
                <Table.Td>{index + 1}</Table.Td>
                {variant.properties &&
                  variant.properties.content.map((property, index) => (
                    <Table.Td key={index}>{property.value}</Table.Td>
                  ))}
                <Table.Td>{variant.sku}</Table.Td>
                <Table.Td ta="right">{MiscUtils.toVND(variant.cost)}</Table.Td>
                <Table.Td ta="right">{MiscUtils.toVND(variant.price)}</Table.Td>
                <Table.Td>
                  <EnableStatusBadge status={variant.status} />
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      </Popover.Dropdown>
    </Popover>
  );
}

export default VariantTablePopover;
