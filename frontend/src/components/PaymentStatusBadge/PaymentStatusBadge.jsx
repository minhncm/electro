import { Badge } from "@mantine/core";

function PaymentStatusBadge({ status }) {
  switch (status) {
    case 1:
      return (
        <Badge color="gray" variant="filled" size="sm">
          Chưa thanh toán
        </Badge>
      );
    case 2:
      return (
        <Badge color="green" variant="filled" size="sm">
          Đã thanh toán
        </Badge>
      );
    default:
      return;
  }
}

export default PaymentStatusBadge;
