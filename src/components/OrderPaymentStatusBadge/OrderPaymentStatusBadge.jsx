import { Badge } from "@mantine/core";

function OrderPaymentStatusBadge({ status }) {
  switch (status) {
    case 1:
      return (
        <Badge color="gray" variant="outline" size="sm">
          Chưa thanh toán
        </Badge>
      );
    case 2:
      return (
        <Badge color="green" variant="outline" size="sm">
          Đã thanh toán
        </Badge>
      );
    default:
      return <></>;
  }
}

export default OrderPaymentStatusBadge;
