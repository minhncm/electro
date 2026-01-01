import { Badge } from "@mantine/core";

function OrderStatusBadge({ status }) {
  switch (status) {
    case 1:
      return (
        <Badge color="gray" variant="outline" size="sm">
          Đơn hàng mới
        </Badge>
      );
    case 2:
      return (
        <Badge color="blue" variant="outline" size="sm">
          Đang xử lý
        </Badge>
      );
    case 3:
      return (
        <Badge color="violet" variant="outline" size="sm">
          Đang giao hàng
        </Badge>
      );
    case 4:
      return (
        <Badge color="green" variant="outline" size="sm">
          Đã giao hàng
        </Badge>
      );
    case 5:
      return (
        <Badge color="red" variant="outline" size="sm">
          Hủy bỏ
        </Badge>
      );
    default:
      return <></>;
  }
}

export default OrderStatusBadge;
