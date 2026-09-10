import { Badge } from "@mantine/core";

function PurchaseOrderStatusBadge({ status }) {
  switch (status) {
    case 1:
      return (
        <Badge color="gray" variant="outline" size="sm">
          Đơn hàng mới
        </Badge>
      );
    case 2:
      return (
        <Badge color="yellow" variant="outline" size="sm">
          Đang chờ duyệt
        </Badge>
      );
    case 3:
      return (
        <Badge color="violet" variant="outline" size="sm">
          Đã duyệt
        </Badge>
      );
    case 4:
      return (
        <Badge color="blue" variant="outline" size="sm">
          Đang xử lý
        </Badge>
      );
    case 5:
      return (
        <Badge color="green" variant="outline" size="sm">
          Hoàn thành
        </Badge>
      );
    case 6:
      return (
        <Badge color="orange" variant="outline" size="sm">
          Không duyệt
        </Badge>
      );
    case 7:
      return (
        <Badge color="red" variant="outline" size="sm">
          Hủy bỏ
        </Badge>
      );
    default:
      return <></>;
  }
}

export default PurchaseOrderStatusBadge;
