import { Stack, useMantineTheme } from "@mantine/core";
import { useParams } from "react-router-dom";
import Container from "~/components/Container/Container";
import { useGetProductBySlug } from "~/hooks/client/use-product-api";
import ClientProductDescription from "./ClientProductDescription";
import ClientProductIntro from "./ClientProductIntro";
import ClientProductRelateProducts from "./ClientProductRelateProducts";
import ClientProductReview from "./ClientProductReview";
import ClientProductSpecification from "./ClientProductSpecification";

function ClientProduct() {
  const theme = useMantineTheme();

  const { slug } = useParams();
  const { data: product } = useGetProductBySlug(slug);

  if (!product) return null;

  return (
    <main>
      <Container>
        <Stack gap={`calc(${theme.spacing.lg} * 2)`}>
          <ClientProductIntro product={product} />
          <ClientProductSpecification product={product} />
          <ClientProductDescription product={product} />
          <ClientProductReview productSlug={product.slug} />
          <ClientProductRelateProducts product={product} />
        </Stack>
      </Container>
    </main>
  );
}

export default ClientProduct;
