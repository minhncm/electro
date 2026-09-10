import { Badge } from "@mantine/core";

function WaybillStatusBadge({ status }) {
  switch (status) {
    case 1:
      return (
        <Badge color="gray" variant="filled" size="sm">
          Đợi lấy hàng
        </Badge>
      );
    case 2:
      return (
        <Badge color="blue" variant="filled" size="sm">
          Đang giao hàng
        </Badge>
      );
    case 3:
      return (
        <Badge color="violet" variant="filled" size="sm">
          Đã giao hàng
        </Badge>
      );
    case 4:
      return (
        <Badge color="red" variant="filled" size="sm">
          Hủy bỏ
        </Badge>
      );
    default:
      return;
  }
}

export default WaybillStatusBadge;
