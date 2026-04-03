import {
  ActionIcon,
  Anchor,
  Group,
  Highlight,
  Stack,
  Table,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { useModals } from "@mantine/modals";
import { Check, Hash, Message2, Search, Trash } from "tabler-icons-react";
import CheckReviewModal from "~/components/CheckReviewModal";
import ManageMain from "~/components/ManageMain/ManageMain";
import ManagePagination from "~/components/ManagePagination";
import ReplyReviewModal from "~/components/ReplyReviewModal";
import ReviewBadge from "~/components/ReviewBadge";
import ReviewSearchPanel from "~/components/ReviewSearchPanel";
import ReviewStar from "~/components/ReviewStar";
import DateUtils from "~/utils/DateUtils";
import ReviewConfigs from "./ReviewConfigs";
import useGetAllApi from "~/hooks/admin/use-get-all-api";
import useResetManagePageState from "~/hooks/use-reset-manage-page-state";
import * as PageConfigs from "~/pages/PageConfig";

function ReviewManage() {
  useResetManagePageState();

  const { data: listResponse = PageConfigs.initialListResponse, isLoading } =
    useGetAllApi(ReviewConfigs.resourceUrl, ReviewConfigs.resourceKey);

  const theme = useMantineTheme();
  const modals = useModals();

  const handleDeleteEntityButton = (entityId) => {
    modals.openConfirmModal({
      size: "xs",
      overlayColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2],
      overlayOpacity: 0.55,
      overlayBlur: 3,
      closeOnClickOutside: false,
      title: <strong>Xác nhận xóa</strong>,
      children: <Text size="sm">Xóa phần tử có ID {entityId}?</Text>,
      labels: {
        cancel: "Không xóa",
        confirm: "Xóa",
      },
      confirmProps: { color: "red" },
    });
  };

  const handleCheckReviewButton = (review) => {
    modals.openModal({
      size: "xl",
      overlayColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2],
      overlayOpacity: 0.55,
      overlayBlur: 3,
      title: <strong>Xem xét Đánh giá ID {review.id}</strong>,
      children: <CheckReviewModal review={review} />,
    });
  };

  const handleReplyReviewButton = (review) => {
    modals.openModal({
      size: "xl",
      overlayColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2],
      overlayOpacity: 0.55,
      overlayBlur: 3,
      title: <strong>Phản hồi Đánh giá ID {review.id}</strong>,
      children: <ReplyReviewModal review={review} />,
    });
  };

  const entitiesTableHeadsFragment = (
    <Table.Tr>
      <Table.Th>ID</Table.Th>
      <Table.Th>Ngày tạo</Table.Th>
      <Table.Th>Người dùng</Table.Th>
      <Table.Th>Sản phẩm</Table.Th>
      <Table.Th>Số sao</Table.Th>
      <Table.Th>Tóm lược nội dung</Table.Th>
      <Table.Th>Có phản hồi?</Table.Th>
      <Table.Th w={100}>Trạng thái</Table.Th>
      <Table.Th w={120}>Thao tác</Table.Th>
    </Table.Tr>
  );

  const entitiesTableRowsFragment = listResponse.content.map((entity) => (
    <Table.Tr key={entity.id}>
      <Table.Td>{entity.id}</Table.Td>
      <Table.Td>{DateUtils.formatterDate(entity.createdAt)}</Table.Td>
      <Table.Td>
        <Stack gap={0}>
          <Highlight inherit>{entity.user.fullname}</Highlight>
          <Highlight size="xs" color="dimmed">
            {entity.user.username}
          </Highlight>
        </Stack>
      </Table.Td>
      <Table.Td>
        <Anchor
          href={"/product/" + entity.product.slug}
          target="_blank"
          inherit
        >
          <Highlight inherit>{entity.product.name}</Highlight>
        </Anchor>
      </Table.Td>
      <Table.Td>
        <ReviewStar score={entity.ratingScore} />
      </Table.Td>
      <Table.Td maw={300}>
        <Highlight inherit>
          {entity.content.length > 120
            ? entity.content.substring(0, 120).concat("...")
            : entity.content}
        </Highlight>
      </Table.Td>
      <Table.Td>
        {entity.reply && <Check color={theme.colors.teal[5]} />}
      </Table.Td>
      <Table.Td>
        <ReviewBadge status={entity.status} />
      </Table.Td>
      <Table.Td>
        <Group gap="xs">
          <ActionIcon
            color="blue"
            variant="outline"
            size={24}
            title="Xem xét"
            onClick={() => handleCheckReviewButton(entity)}
          >
            <Search size={16} />
          </ActionIcon>
          <ActionIcon
            color="grape"
            variant="outline"
            size={24}
            title="Phản hồi"
            onClick={() => handleReplyReviewButton(entity)}
            disabled={entity.status === 1}
          >
            <Message2 size={16} />
          </ActionIcon>
          <ActionIcon
            color="pink"
            variant="outline"
            size={24}
            title="Xóa"
            onClick={() => handleDeleteEntityButton(entity.id)}
          >
            <Trash size={16} />
          </ActionIcon>
        </Group>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <Stack>
      <Group gap="xs">
        <ActionIcon>
          <Hash />
        </ActionIcon>
        <Title order={3}>{ReviewConfigs.manageTitle}</Title>
      </Group>

      <ReviewSearchPanel />

      <ManageMain listResponse={listResponse} isLoading={isLoading}>
        <Table
          horizontalSpacing="sm"
          verticalSpacing="sm"
          highlightOnHover
          striped
          style={{
            borderRadius: theme.radius.sm,
            overflow: "hidden",
          }}
        >
          <Table.Thead>{entitiesTableHeadsFragment}</Table.Thead>
          <Table.Tbody>{entitiesTableRowsFragment}</Table.Tbody>
        </Table>
      </ManageMain>

      <ManagePagination listResponse={listResponse} />
    </Stack>
  );
}

export default ReviewManage;
