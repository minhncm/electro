import { Badge } from "@mantine/core";

function ActiveStatusBadge({ status }) {
  if (status === 1) {
    return (
      <Badge variant="outline" size="sm">
        Đang hoạt động
      </Badge>
    );
  }

  if (status === 2) {
    return (
      <Badge color="teal" variant="outline" size="sm">
        Ít hoạt động
      </Badge>
    );
  }
  return (
    <Badge color="red" variant="outline" size="sm">
      Không hoạt động
    </Badge>
  );
}

export default ActiveStatusBadge;
