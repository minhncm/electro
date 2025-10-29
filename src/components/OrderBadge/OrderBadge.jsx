import { Badge } from "@mantine/core";


function OrderBadge({ status }) {
  switch (status) {
    case 1:
      return (
        <Badge color="gray" variant="filled" size="sm">
          Đơn hàng mới
        </Badge>
      );
    case 2:
      return (
        <Badge color="blue" variant="filled" size="sm">
          Đang xử lý
        </Badge>
      );
    case 3:
      return (
        <Badge color="violet" variant="filled" size="sm">
          Đang giao hàng
        </Badge>
      );
    case 4:
      return (
        <Badge color="green" variant="filled" size="sm">
          Đã giao hàng
        </Badge>
      );
    case 5:
      return (
        <Badge color="red" variant="filled" size="sm">
          Hủy bỏ
        </Badge>
      );
    default:
      return;
  }
}

export default OrderBadge;
