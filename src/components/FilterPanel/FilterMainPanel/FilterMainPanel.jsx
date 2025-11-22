import { Grid } from "@mantine/core";
import FilterMainPanelLeft from "./FilterMainPanelLeft/FilterMainPanelLeft";
import FilterMainPanelRight from "./FilterMainPanelRight";

function FilterMainPanel() {
  return (
    <Grid grow p="sm" gutter="sm">
      <FilterMainPanelLeft />
      <FilterMainPanelRight />
    </Grid>
  );
}

export default FilterMainPanel;
