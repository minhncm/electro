import { Button, Stack } from "@mantine/core";
import { Link, useLocation } from "react-router-dom";
import { Alarm, Award, Bell, FileBarcode, Heart, MessageCircle, Settings, Star, User } from "tabler-icons-react";

function ClientUserNavbar() {
  const location = useLocation();
  const navButton = (name, path, Icon, childPaths = []) => (
    <Button
      component={Link}
      to={path}
      size="md"
      radius="md"
      leftSection={<Icon size={18} strokeWidth={1.5} />}
      variant={location.pathname === path || childPaths?.some((child) => location.pathname.startsWith(child)) ? "light" : "subtle"}
      fullWidth
      px={12}
      justify="start"
    >
      {name}
    </Button>
  );
  return (
    <Stack gap={5}>
      {navButton("Tài khoản", "/user", User)}
      {navButton("Thiết đặt", "/user/setting", Settings, ["/user/setting/personal", "/user/setting/phone", "/user/setting/email", "/user/setting/password"])}
      {navButton("Thông báo", "/user/notification", Bell)}
      {navButton("Quản lý đơn hàng", "/order", FileBarcode, ["/order/detail"])}
      {navButton("Đánh giá sản phẩm", "/user/review", Star)}
      {navButton("Sản phẩm yêu thích", "/user/wishlist", Heart)}
      {navButton("Điểm thưởng", "/user/reward", Award)}
      {navButton("Đặt trước sản phẩm", "/user/preorder", Alarm)}
      {navButton("Yêu cầu tư vấn", "/user/chat", MessageCircle)}
    </Stack>
  );
}

export default ClientUserNavbar;
