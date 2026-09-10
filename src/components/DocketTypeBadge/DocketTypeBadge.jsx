import { Badge } from "@mantine/core";

function DocketTypeBadge({ type }) {
  if (type === 1) {
    return (
      <Badge color="blue" variant="filled" size="sm">
        Nhập
      </Badge>
    );
  }
  return (
    <Badge color="orange" variant="filled" size="sm">
      Xuất
    </Badge>
  );
}

export default DocketTypeBadge;
