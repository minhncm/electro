import { Navigate, Outlet } from "react-router-dom";
import useAuthStore from "~/stores/use-auth-store";

function AdminGuard() {
  const { user } = useAuthStore();

  // Chưa đăng nhập
  if (!user) {
    return <Navigate to="/signin" replace />;
  }

  // Không phải admin
  const isAdmin = user.roles?.some((role) => role.code === "ADMIN");

  if (!isAdmin) {
    return <Navigate to="/" replace />;
    // hoặc /403
  }

  return <Outlet />;
}

export default AdminGuard;
