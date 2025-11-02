import { Anchor, Button, Group, Image, Stack, Text } from "@mantine/core";
import { Link } from "react-router-dom";
import { Trash } from "tabler-icons-react";
import onModalDelete from "~/utils/ModalsUtil";
import defaultImage from "~/images/image_default.png";

function ClientWishlistCard({ wish }) {
  const handleDeleteButton = () => {
    const onConfirm = () => alert("Comfirm");
    onModalDelete("Xóa sản phẩm này ra khỏi danh sách yêu thích", onConfirm);
  };
  return (
    <Group justify="space-between">
      <Group>
        <Image
          radius="md"
          w={55}
          h={55}
          src={wish.wishProduct.productThumbnail || undefined}
          alt={wish.wishProduct.productName}
          fallbackSrc={defaultImage}
        />
        <Stack gap={3.5}>
          <Anchor component={Link} to={`/product/${wish.wishProduct.productSlug}`} fw={500}>
            {wish.wishProduct.productName}
          </Anchor>
          <Text size="sm" c="dimmed">
            Thêm vào lúc {wish.wishCreatedAt}
          </Text>
        </Stack>
      </Group>
      <Button
        variant="outline"
        color="red"
        size="xs"
        leftSection={<Trash size={18} strokeWidth={1.5} />}
        onClick={handleDeleteButton}
      >
        Xóa
      </Button>
    </Group>
  );
}

export default ClientWishlistCard;
