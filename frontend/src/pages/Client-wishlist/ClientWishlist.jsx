import {
  Card,
  Grid,
  Group,
  Pagination,
  Stack,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { Marquee } from "tabler-icons-react";
import ClientUserNavbar from "~/components/ClientUserNavbar/ClientUserNavbar";
import Container from "~/components/Container/Container";
import { useGetAllWishes } from "~/hooks/client/use-wish-api";
import ClientWishlistCard from "~/pages/Client-wishlist/ClientWishlistCard";

function ClientWishlist() {
  const theme = useMantineTheme();

  const { data: wishlist } = useGetAllWishes();

  let wishlistContentFragment;

  if (wishlist && wishlist.totalElements === 0) {
    wishlistContentFragment = (
      <Stack my="xl" align="center" c={theme.colors.blue[6]}>
        <Marquee size={125} strokeWidth={1} />
        <Text size="xl" fw={500}>
          Chưa có sản phẩm yêu thích nào
        </Text>
      </Stack>
    );
  }

  if (wishlist && wishlist.totalElements > 0) {
    wishlistContentFragment = (
      <>
        <Stack gap="xs">
          {wishlist.content.map((wish) => (
            <ClientWishlistCard key={wish.id} wish={wish} />
          ))}
        </Stack>

        <Group justify="space-between" mt="lg">
          <Pagination value={wishlist.page} total={wishlist.totalPages}>
            <Text component="span" fw={500}>
              Trang {wishlist.page}
            </Text>
            <span> / {wishlist.totalPages}</span>
          </Pagination>
        </Group>
      </>
    );
  }

  return (
    <main>
      <Container>
        <Grid gutter="lg">
          <Grid.Col span={3}>
            <ClientUserNavbar />
          </Grid.Col>

          <Grid.Col span={9}>
            <Card radius="md" shadow="sm" p="lg">
              <Stack>
                <Title order={2}>Sản phẩm yêu thích</Title>

                {wishlistContentFragment}
              </Stack>
            </Card>
          </Grid.Col>
        </Grid>
      </Container>
    </main>
  );
}

export default ClientWishlist;
