import { Box, Button, Grid, Stack, useMantineTheme } from "@mantine/core";
import SortCriteriaRow from "./SortCriteriaRow";

function FilterMainPanelLeft() {
  const theme = useMantineTheme();
  return (
    <Grid.Col span={1}>
      <Stack gap="sm">
        <Box
          bg={theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0]}
          ta="center"
          p={theme.spacing.xs}
          bdrs={theme.radius.lg}
        >
          Sắp xếp
        </Box>
        <SortCriteriaRow />
        <Button variant="outline">Thêm tiêu chí sắp xếp</Button>
      </Stack>
    </Grid.Col>
  );
}

export default FilterMainPanelLeft;
