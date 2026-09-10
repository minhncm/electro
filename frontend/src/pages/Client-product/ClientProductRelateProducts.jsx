import { Grid, Group, Stack, Title } from "@mantine/core";
import React from "react";
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
        {product.relateProducts.map((product) => (
          <Grid.Col key={product.id} span={3}>
            <ClientProductCart product={product} />
          </Grid.Col>
        ))}
      </Grid>
    </Stack>
  );
}

export default React.memo(ClientproductRelatedProducts);
