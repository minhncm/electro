import {
  Card,
  Checkbox,
  Grid,
  Group,
  Pagination,
  Radio,
  RadioGroup,
  Stack,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ArrowsDownUp, ChartCandle, Marquee } from "tabler-icons-react";
import ClientProductCart from "~/components/ClientProductCard";
import Container from "~/components/Container/Container";
import { useGetAllProducts } from "~/hooks/client/use-product-api";

function ClientSearch() {
  const theme = useMantineTheme();
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("q");
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState("latest");
  const [saleable, setSaleable] = useState(false);
  const { data: products } = useGetAllProducts({
    page,
    size: 12,
    sort,
    search: searchQuery,
    saleable,
  });

  let resultFragment;

  if (products && products.totalElements === 0) {
    resultFragment = (
      <Stack my="xl" align="center" c={theme.colors.blue[6]}>
        <Marquee size={125} strokeWidth={1} />
        <Text size="xl" fw={500}>
          Không có sản phẩm
        </Text>
      </Stack>
    );
  }

  if (products && products.totalElements > 0) {
    resultFragment = (
      <>
        <Grid mt={theme.spacing.xs}>
          {products.content.map((product) => (
            <Grid.Col key={product.id} span={3}>
              <ClientProductCart product={product} search={searchQuery} />
            </Grid.Col>
          ))}
        </Grid>
        <Group justify="space-between" mt="lg">
          <Pagination
            value={page}
            total={products.totalPages}
            onChange={(value) => setPage(value)}
          />
          <Text>
            <Text component="span" fw={500}>
              Trang {page}
            </Text>
            <span> / {products.totalPages}</span>
          </Text>
        </Group>
      </>
    );
  }
  return (
    <main>
      <Container>
        <Stack gap={`calc(${theme.spacing.xl} * 1.5)`}>
          <Card radius="md" shadow="sm" p="lg">
            <Title order={2}>
              Kết quả tìm kiếm cho &quot;
              <Text component="span" c="yellow" inherit>
                {searchQuery}
              </Text>
              &quot;
            </Title>
          </Card>

          <Stack gap="lg">
            <Group justify="space-between">
              <Group gap="xs">
                <ArrowsDownUp size={20} />
                <Text fw={500} mr={theme.spacing.xs}>
                  Sắp xếp theo
                </Text>
                <RadioGroup onChange={(value) => setSort(value)}>
                  <Group>
                    <Radio value="" label="Mới nhất" />
                    <Radio value="lowest-price" label="Giá thấp → cao" />
                    <Radio value="highest-price" label="Giá cao → thấp" />
                  </Group>
                </RadioGroup>
              </Group>
              <Text>{products?.totalElements || 0} Sản phẩm</Text>
            </Group>

            <Group gap="xs">
              <ChartCandle size={20} />
              <Text fw={500} mr={theme.spacing.xs}>
                Lọc theo
              </Text>
              <Checkbox
                label="Chỉ tính còn hàng"
                onChange={(e) => setSaleable(e.target.checked)}
              />
            </Group>

            {resultFragment}
          </Stack>
        </Stack>
      </Container>
    </main>
  );
}

export default ClientSearch;
