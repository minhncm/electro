import { Badge } from "@mantine/core";

function RewardStrategyStatusBadge({ status }) {
  switch (status) {
    case 1:
      return (
        <Badge color="blue" variant="filled" size="sm">
          Đang kích hoạt
        </Badge>
      );
    case 2:
      return (
        <Badge color="pink" variant="filled" size="sm">
          Không kích hoạt
        </Badge>
      );
    default:
      return;
  }
}

export default RewardStrategyStatusBadge;
