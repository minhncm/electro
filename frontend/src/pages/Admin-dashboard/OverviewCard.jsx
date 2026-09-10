import { Card, Group, Stack, Text, useMantineTheme } from "@mantine/core";

function OverviewCard({ title, number, color, icon }) {
  const theme = useMantineTheme();

  const Icon = icon;

  return (
    <Card
      bg={theme.colors[color][theme.colorScheme === "dark" ? 9 : 1]}
      c={theme.colorScheme === "dark" ? theme.white : theme.black}
    >
      <Group>
        <Icon size={40} strokeWidth={1.25} />
        <Stack gap={2.5}>
          <Text>{title}</Text>
          <Text size="xl" weight={500}>
            {number}
          </Text>
        </Stack>
      </Group>
    </Card>
  );
}

export default OverviewCard;
