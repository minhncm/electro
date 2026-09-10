import { Badge } from "@mantine/core";

function ReviewBadge({ status }) {
  switch (status) {
    case 1:
      return (
        <Badge color="gray" variant="filled" size="sm">
          Chưa duyệt
        </Badge>
      );
    case 2:
      return (
        <Badge color="teal" variant="filled" size="sm">
          Đã duyệt
        </Badge>
      );
    case 3:
      return (
        <Badge color="pink" variant="filled" size="sm">
          Không duyệt
        </Badge>
      );
    default:
      return;
  }
}

export default ReviewBadge;
