import { Anchor, Button, Group, Image, Stack, Text } from "@mantine/core";
import { Link } from "react-router-dom";
import { BellOff, Trash } from "tabler-icons-react";
import PreorderBadge from "~/components/PreorderBadge/PreorderBadge";
import DefaultImage from "~/images/image_default.png";
import DateUtils from "~/utils/DateUtils";

function ClientPreorderCard({ preorder }) {
  return (
    <Group justify="space-between">
      <Group>
        <Image
          radius="md"
          w={55}
          h={55}
          src={preorder.preorderProduct.productThumbnail || undefined}
          alt={preorder.preorderProduct.productName}
          fallbackSrc={DefaultImage}
        />
        <Stack gap={3.5}>
          <Group gap="sm">
            <Anchor component={Link} to={`/product//${preorder.preorderProduct.productSlug}`} fw={500}>
              {preorder.preorderProduct.productName}
            </Anchor>
            <PreorderBadge status={preorder.preorderStatus} />
          </Group>
          <Text c="dimmed" size="sm">
            Cập nhật lúc {DateUtils.formatterDate(preorder.preorderUpdatedAt)}
          </Text>
        </Stack>
      </Group>

      <Group gap="xs">
        <Button
          variant="outline"
          color="orange"
          title="Hủy thông báo"
          leftSection={<BellOff size={18} strokeWidth={1.5} />}
          disabled={preorder.preorderStatus !== 1} // need to update status
        >
          Hủy
        </Button>
        <Button variant="outline" color="red" leftSection={<Trash size={18} strokeWidth={1.5} />}>
          Xóa
        </Button>
      </Group>
    </Group>
  );
}

export default ClientPreorderCard;
