import { AppShell, Stack } from "@mantine/core";
import FilterPanel from "~/components/FilterPanel";
import ManageHeader from "~/components/ManageHeader";
import SearchPanel from "~/components/SearchPanel";

function AdminAddress() {
  return (
    <AppShell.Main bg="gray.0">
      <Stack>
        <ManageHeader title={"Quản lý địa chỉ"} />
        <SearchPanel />
        <FilterPanel />
      </Stack>
    </AppShell.Main>
  );
}

export default AdminAddress;
