import { Paper, Stack } from "@mantine/core";
import FilterHeaderPanel from "~/components/FilterPanel/FilterHeaderPanel";
import FilterMainPanel from "./FilterMainPanel";

function FilterPanel() {
  return (
    <Paper shadow="xs" p="sm">
      <Stack gap={0}>
        <FilterHeaderPanel />
        <FilterMainPanel />
      </Stack>
    </Paper>
  );
}

export default FilterPanel;
