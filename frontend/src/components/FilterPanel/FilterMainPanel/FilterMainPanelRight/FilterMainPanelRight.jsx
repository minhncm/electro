import { Box, Button, Grid, Stack, useMantineTheme } from "@mantine/core";
import FilterCriteriaRow from "./FilterCriteriaRow";

function FilterMainPanelRight() {
  const theme = useMantineTheme();
  return (
    <Grid.Col span={3}>
      <Stack gap="sm">
        <Box
          bg={theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0]}
          ta="center"
          p={theme.spacing.xs}
          bdrs={theme.radius.lg}
        >
          Lọc
        </Box>
        <FilterCriteriaRow />
        <Button variant="outline">Thêm tiêu chí lọc</Button>
      </Stack>
    </Grid.Col>
  );
}

export default FilterMainPanelRight;
