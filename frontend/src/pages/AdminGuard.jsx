import { Navigate, Outlet } from "react-router-dom";
import ManagerPath from "~/constants/ManagerPath";
import useAuthStore from "~/stores/use-auth-store";

function AdminGuard() {
  const { user } = useAuthStore();

  // Chưa đăng nhập
  if (!user) {
    return <Navigate to={ManagerPath.SIGNIN} replace />;
  }

  // Không phải admin
  const isAdminOrEmployee = user.roles?.some(
    (role) => role.code === "ADMIN" || role.code === "EMPLOYEE",
  );

  if (!isAdminOrEmployee) {
    return <Navigate to="/" replace />;
    // hoặc /403
  }

  return <Outlet />;
}

export default AdminGuard;
