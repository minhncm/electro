import {
  Grid,
  Group,
  Pagination,
  Stack,
  Text,
  useMantineTheme,
} from "@mantine/core";
import { useEffect } from "react";
import { Marquee } from "tabler-icons-react";
import ClientProductCart from "~/components/ClientProductCard";
import { useGetProductsByCategorySlug } from "~/hooks/client/use-product-api";
import useClientCategoryStore from "~/stores/use-client-category-store";

function ClientCategoryProduct({ categorySlug }) {
  const theme = useMantineTheme();

  const {
    totalProducts,
    activePage,
    activeSearch,
    updateTotalProducts,
    updateActivePage,
  } = useClientCategoryStore();

  const {
    data: products,
    isSuccess,
    isError,
  } = useGetProductsByCategorySlug(categorySlug);

  useEffect(() => {
    if (isSuccess && totalProducts !== products?.totalElements) {
      updateTotalProducts(products.totalElements);
    }
  }, [isSuccess, products, totalProducts, updateTotalProducts]);

  if (isError || (products && products.totalElements === 0)) {
    return (
      <Stack my="xl" align="center" c={theme.colors.blue[6]}>
        <Marquee size={125} strokeWidth={1} />
        <Text size="xl" fw={500}>
          Không có sản phẩm
        </Text>
      </Stack>
    );
  }

  if (products && products.totalElements > 0) {
    return (
      <>
        <Grid mt={theme.spacing.xs}>
          {products.content.map((product) => (
            <Grid.Col key={product.id} span={3}>
              <ClientProductCart product={product} search={activeSearch} />
            </Grid.Col>
          ))}
        </Grid>
        <Group justify="space-between" mt="lg">
          <Pagination
            value={activePage}
            total={products.totalPages}
            onChange={(page) => page !== activePage && updateActivePage(page)}
          />
          <Text>
            <Text component="span" fw={500}>
              Trang 1
            </Text>
            <span> / {products.totalPages}</span>
          </Text>
        </Group>
      </>
    );
  }
}

export default ClientCategoryProduct;
