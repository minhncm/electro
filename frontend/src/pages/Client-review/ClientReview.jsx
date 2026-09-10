import {
  Card,
  ColorSwatch,
  Grid,
  Group,
  Pagination,
  Stack,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
import ClientUserNavbar from "~/components/ClientUserNavbar/ClientUserNavbar";
import Container from "~/components/Container/Container";
import ClientReviewCard from "./ClientReviewCard";
import { Marquee } from "tabler-icons-react";
import { useGetAllReviewsByUser } from "~/hooks/client/use-review-api";
import { useState } from "react";

function ClientReview() {
  const theme = useMantineTheme();
  const [activePage, setActivePage] = useState();

  const { data: reviews } = useGetAllReviewsByUser(activePage);

  let reviewContentFragment;

  if (reviews && reviews.totalElements === 0) {
    reviewContentFragment = (
      <Stack my="xl" align="center" c={theme.colors.blue[6]}>
        <Marquee size={125} strokeWidth={1} />
        <Text size="xl" fw={500}>
          Chưa có đánh giá nào
        </Text>
      </Stack>
    );
  }

  if (reviews && reviews.totalElements > 0) {
    reviewContentFragment = (
      <>
        <Stack gap="xs">
          {reviews.content.map((review) => (
            <ClientReviewCard key={review.id} review={review} />
          ))}
        </Stack>

        <Group justify="space-between" mt="lg">
          <Pagination
            value={activePage}
            total={reviews.totalPages}
            onChange={(page) => page !== activePage && setActivePage(page)}
          />
          <Text>
            <Text component="span" fw={500}>
              Trang {activePage}
            </Text>
            <span> / {reviews.totalPages}</span>
          </Text>
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
                <Title order={2}>Đánh giá sản phẩm</Title>

                <Card
                  p="sm"
                  radius="md"
                  withBorder
                  style={{
                    maxWidth: "fit-content",
                    borderColor:
                      theme.colorScheme === "dark"
                        ? theme.colors.dark[4]
                        : theme.colors.gray[2],
                  }}
                >
                  <Group gap="lg">
                    <Group gap="xs">
                      <ColorSwatch color={theme.colors.gray[5]} size={20} />
                      <Text size="sm">Chưa duyệt</Text>
                    </Group>
                    <Group gap="xs">
                      <ColorSwatch color={theme.colors.teal[5]} size={20} />
                      <Text size="sm">Đã duyệt</Text>
                    </Group>
                    <Group gap="xs">
                      <ColorSwatch color={theme.colors.pink[5]} size={20} />
                      <Text size="sm">Không duyệt</Text>
                    </Group>
                  </Group>
                </Card>
                {reviewContentFragment}
              </Stack>
            </Card>
          </Grid.Col>
        </Grid>
      </Container>
    </main>
  );
}

export default ClientReview;
