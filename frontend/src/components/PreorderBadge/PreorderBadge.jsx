import { Badge } from "@mantine/core";

function PreorderBadge({ status }) {
  switch (status) {
    case 1:
      return (
        <Badge color="gray" variant="outline" size="sm">
          Chưa thông báo
        </Badge>
      );
    case 2:
      return (
        <Badge color="green" variant="outline" size="sm">
          Đã thông báo
        </Badge>
      );
    case 3:
      return (
        <Badge color="pink" variant="outline" size="sm">
          Hủy thông báo
        </Badge>
      );
    default:
      return;
  }
}

export default PreorderBadge;
