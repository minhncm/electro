import { Badge } from "@mantine/core";

function DocketStatusBadge({ status }) {
  switch (status) {
    case 1:
      return (
        <Badge color="gray" variant="outline" size="sm">
          Mới
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
        <Badge color="green" variant="outline" size="sm">
          Hoàn thành
        </Badge>
      );
    case 4:
      return (
        <Badge color="red" variant="outline" size="sm">
          Hủy bỏ
        </Badge>
      );
    default:
      return <></>;
  }
}

export default DocketStatusBadge;
