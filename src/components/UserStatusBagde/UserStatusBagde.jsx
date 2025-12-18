import { Badge } from "@mantine/core";

function UserStatusBagde({ status }) {
  if (status === 1)
    return (
      <Badge color="blue" variant="outline" size="sm">
        Đã kích hoạt
      </Badge>
    );

  return (
    <Badge color="red" variant="outline" size="sm">
      Chưa kích hoạt
    </Badge>
  );
}

export default UserStatusBagde;
