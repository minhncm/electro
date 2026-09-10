import { Group, Highlight, Stack, Text, ThemeIcon, useMantineTheme } from "@mantine/core";
import { Check } from "tabler-icons-react";

function VariantResult({ variant, keyword, disabled }) {
  const theme = useMantineTheme();
  return (
    <Group
      justify="space-between"
      styles={{
        root: {
          padding: "5px 12px",
          borderRadius: theme.radius.sm,
          opacity: disabled ? 0.5 : 1,
          "&:hover": {
            backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[1],
          },
        },
      }}
    >
      <Stack gap={2}>
        <Highlight highlight={keyword} size="sm">
          {variant.product.name}
        </Highlight>
        <Group gap="xs">
          {variant.properties &&
            variant.properties.content.map((property) => (
              <Text key={property.code} size="xs" c="blue">
                {property.name}: {property.value}
              </Text>
            ))}
          <Text size="xs" c="dimmed">
            SKU:{" "}
            <Highlight component="span" highlight={keyword} inherit>
              {variant.sku}
            </Highlight>
          </Text>
        </Group>
      </Stack>
      {disabled && (
        <Group gap={5}>
          <ThemeIcon radius="lg" color="green" size="xs">
            <Check size={12} />
          </ThemeIcon>
          <Text weight={500} c="green" size="xs">
            Đã thêm
          </Text>
        </Group>
      )}
    </Group>
  );
}

export default VariantResult;
