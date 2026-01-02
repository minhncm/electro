import { Badge } from "@mantine/core";

function PaymentMethodStatusBadge({ status }) {
  switch (status) {
    case 1:
      return (
        <Badge color="blue" variant="filled" size="sm">
          Đang sử dụng
        </Badge>
      );
    case 2:
      return (
        <Badge color="pink" variant="filled" size="sm">
          Không sử dụng
        </Badge>
      );
    default:
      return <></>;
  }
}

export default PaymentMethodStatusBadge;
