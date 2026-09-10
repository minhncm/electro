import { Badge } from "@mantine/core";

function RoleBagdeStatus({ status }) {
  if (status === 1)
    return (
      <Badge variant="outline" size="sm">
        Có hiệu lực
      </Badge>
    );
  return (
    <Badge color="red" variant="outline" size="sm">
      Vô hiệu lực
    </Badge>
  );
}

export default RoleBagdeStatus;
