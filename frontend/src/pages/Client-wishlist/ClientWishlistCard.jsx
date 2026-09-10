import { Anchor, Button, Group, Image, Stack, Text } from "@mantine/core";
import { Link } from "react-router-dom";
import { Trash } from "tabler-icons-react";
import onModalDelete from "~/utils/ModalsUtil";
import defaultImage from "~/images/image_default.png";
import { useDeleteWishes } from "~/hooks/client/use-wish-api";

function ClientWishlistCard({ wish }) {
  const deleteApi = useDeleteWishes();
  const handleDeleteButton = (id) => {
    const onConfirm = () => deleteApi.mutate([id]);
    onModalDelete("Xóa sản phẩm này ra khỏi danh sách yêu thích", onConfirm);
  };
  return (
    <Group justify="space-between">
      <Group>
        <Image
          radius="md"
          w={55}
          h={55}
          src={wish.product.thumbnail || undefined}
          alt={wish.product.name}
          fallbackSrc={defaultImage}
        />
        <Stack gap={3.5}>
          <Anchor
            component={Link}
            to={`/product/${wish.product.slug}`}
            fw={500}
          >
            {wish.product.name}
          </Anchor>
          <Text size="sm" c="dimmed">
            Thêm vào lúc {wish.createdAt}
          </Text>
        </Stack>
      </Group>
      <Button
        variant="outline"
        color="red"
        size="xs"
        leftSection={<Trash size={18} strokeWidth={1.5} />}
        onClick={() => handleDeleteButton(wish.id)}
      >
        Xóa
      </Button>
    </Group>
  );
}

export default ClientWishlistCard;
