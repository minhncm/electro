import { AppShell } from "@mantine/core";
import { Outlet } from "react-router-dom";
import AdminHeader from "~/components/AdminHeader";
import AdminNavbar from "~/components/AdminNavbar";

function Admin() {
  return (
    <AppShell padding="md" header={{ height: 56 }} navbar={{ width: 250, breakpoint: "sm" }}>
      <AdminHeader />
      <Outlet />
      <AdminNavbar />
    </AppShell>
  );
}

export default Admin;
