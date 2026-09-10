import { Grid, Skeleton, Stack, Text, useMantineTheme } from "@mantine/core";
import { AlertTriangle, List } from "tabler-icons-react";
import ClientProductCart from "~/components/ClientProductCard/ClientProductCard";
import Button from "~/components/common/Button";
import { useGetAllProducts } from "~/hooks/client/use-product-api";

function ClientHomeLatestProducts() {
  const theme = useMantineTheme();

  const { data: products, isLoading, isError } = useGetAllProducts();

  let resultFragment;

  if (isLoading) {
    resultFragment = (
      <Stack>
        {Array(5)
          .fill(0)
          .map((_, index) => (
            <Skeleton key={index} height={50} radius="md" />
          ))}
      </Stack>
    );
  }

  if (isError) {
    resultFragment = (
      <Stack my={theme.spacing.xl} align="center" c={theme.colors.pink[6]}>
        <AlertTriangle size={125} strokeWidth={1} />
        <Text size="xl" w={500}>
          Đã có lỗi xảy ra
        </Text>
      </Stack>
    );
  }

  if (!products || products.totalElements === 0) {
    resultFragment = (
      <Stack my={theme.spacing.xl} align="center" c={theme.colors.pink[6]}>
        <AlertTriangle size={125} strokeWidth={1} />
        <Text size="xl" w={500}>
          Không có sản phẩm
        </Text>
      </Stack>
    );
  }

  if (products && products.totalElements > 0) {
    resultFragment = (
      <Grid>
        {products.content.map((product, index) => (
          <Grid.Col key={index} span={3}>
            <ClientProductCart product={product} />
          </Grid.Col>
        ))}
      </Grid>
    );
  }

  return (
    <div className="flex flex-col items-stretch gap-4">
      <div className="flex flex-wrap items-center justify-between">
        <h2 className="text-[26px] text-[#f76707] leading-[1.35] font-bold">
          Sản phẩm mới nhất
        </h2>
        <Button
          size="sm"
          icon={<List size={16} />}
          to={"/user"}
          className="bg-soft text-primary hover:bg-[#d0ebffa6]"
        >
          Xem tất cả
        </Button>
      </div>

      {resultFragment}
    </div>
  );
}

export default ClientHomeLatestProducts;
