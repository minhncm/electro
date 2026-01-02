import {
  ActionIcon,
  Button,
  Group,
  LoadingOverlay,
  Paper,
  Stack,
  Switch,
  Table,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { Hash, MathFunction } from "tabler-icons-react";
import RewardStartegyConfigs from "./RewardStrategyConfigs";
import RewardStrategyStatusBadge from "~/components/RewardStrategyStatusBadge";

const listResponse = {
  content: [
    {
      id: 1,
      createdAt: "2023-02-15T17:00:00Z",
      updatedAt: "2023-02-15T17:00:00Z",
      name: "Đơn hàng thành công",
      code: "SUCCESS_ORDER",
      formula: "{{ORDER_TOTAL_PAY}} / 1000",
      status: 1,
    },
    {
      id: 2,
      createdAt: "2023-02-15T17:00:00Z",
      updatedAt: "2023-02-15T17:00:00Z",
      name: "Thêm đánh giá",
      code: "ADD_REVIEW",
      formula: "50",
      status: 1,
    },
  ],
  page: 1,
  size: 2,
  totalElements: 2,
  totalPages: 1,
  last: true,
};

function RewardStrategyManage() {
  const theme = useMantineTheme();

  const entitiesTableHeadsFragment = (
    <Table.Tr>
      <Table.Th>Kích hoạt</Table.Th>
      <Table.Th>Chiến lược điểm thưởng</Table.Th>
      <Table.Th>Mã</Table.Th>
      <Table.Th>Công thức tính</Table.Th>
      <Table.Th>Trạng thái</Table.Th>
    </Table.Tr>
  );

  const entitiesTableRowsFragment = listResponse.content.map((entity, index) => (
    <Table.Tr key={entity.id}>
      <Table.Th>
        <Switch size="md" />
      </Table.Th>
      <Table.Th>{entity.name}</Table.Th>
      <Table.Th>
        <Text size="sm" fs={theme.fontFamilyMonospace}>
          {entity.code}
        </Text>
      </Table.Th>
      <Table.Th>
        <Group>
          <Text size="sm" fs={theme.fontFamilyMonospace}>
            {entity.formula}
          </Text>
          <ActionIcon color="blue" variant="outline" size="sm" title="Cập nhật công thức mới">
            <MathFunction size={15} strokeWidth={1.5} />
          </ActionIcon>
        </Group>
      </Table.Th>
      <Table.Th>
        <RewardStrategyStatusBadge status={entity.status} />
      </Table.Th>
    </Table.Tr>
  ));

  return (
    <Stack maw={850}>
      <Group gap="xs">
        <ActionIcon>
          <Hash />
        </ActionIcon>
        <Title order={3}>{RewardStartegyConfigs.manageTitle}</Title>
      </Group>

      <Paper shadow="xs" sx={{ position: "relative", height: listResponse.content.length === 0 ? 170 : "auto" }}>
        <LoadingOverlay zIndex={50} />
        <Table horizontalSpacing="sm" verticalSpacing="sm">
          <Table.Thead>{entitiesTableHeadsFragment}</Table.Thead>
          <Table.Tbody>{entitiesTableRowsFragment}</Table.Tbody>
        </Table>
      </Paper>

      <Button w={"fit-content"}>Cập nhật</Button>
    </Stack>
  );
}

export default RewardStrategyManage;
