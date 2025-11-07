import { Grid, Group, Stack, Title } from "@mantine/core";
import { CircleSquare } from "tabler-icons-react";
import ClientProductCart from "~/components/ClientProductCard/ClientProductCard";

function ClientproductRelatedProducts({ product }) {
  return (
    <Stack>
      <Group gap="xs">
        <CircleSquare />
        <Title order={2}>Sản phẩm liên quan</Title>
      </Group>
      <Grid>
        {product.productRelatedProducts.map((product) => (
          <Grid.Col key={product.productId} span={3}>
            <ClientProductCart product={product} />
          </Grid.Col>
        ))}
      </Grid>
    </Stack>
  );
}

export default ClientproductRelatedProducts;
