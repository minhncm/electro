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
import { ArrowsDownUp, ChartCandle, Marquee } from "tabler-icons-react";
import ClientProductCart from "~/components/ClientProductCard";
import Container from "~/components/Container/Container";

const products = {
  content: [
    {
      productId: 2,
      productName: "Microsoft Surface Pro 9",
      productSlug: "eblackaller1",
      productThumbnail: "https://media-api-beta.thinkpro.vn/media/core/products/2023/2/3/surface-pro-9-thinkpro-1.png",
      productPriceRange: [1.2e7],
      productVariants: [
        {
          variantId: 4,
          variantPrice: 1.2e7,
          variantProperties: {
            content: [
              {
                id: 1,
                code: "size",
                name: "Kích cỡ",
                value: "L",
              },
              {
                id: 2,
                code: "color",
                name: "Màu sắc",
                value: "Đỏ",
              },
            ],
            totalElements: 2,
          },
        },
      ],
      productSaleable: true,
      productPromotion: null,
    },
    {
      productId: 6,
      productName: "Loa Harman Kardon Onyx Studio 7",
      productSlug: "harman",
      productThumbnail:
        "https://media-api-beta.thinkpro.vn/media/core/products/2022/11/18/Loa-Harman-Kardon-Onyx-Studio-7-thinkpro-01.jpeg?w=700&h=700",
      productPriceRange: [1.1e7],
      productVariants: [
        {
          variantId: 8,
          variantPrice: 1.1e7,
          variantProperties: {
            content: [
              {
                id: 1,
                code: "size",
                name: "Kích cỡ",
                value: "L",
              },
              {
                id: 2,
                code: "color",
                name: "Màu sắc",
                value: "Đỏ",
              },
            ],
            totalElements: 2,
          },
        },
      ],
      productSaleable: true,
      productPromotion: null,
    },
    {
      productId: 8,
      productName: "Bàn phím không dây Logitech MX Keys",
      productSlug: "logitech",
      productThumbnail: "https://media-api-beta.thinkpro.vn/media/core/products/2022/1/15/mx-keys-1.png?w=700&h=700",
      productPriceRange: [8000000.0],
      productVariants: [
        {
          variantId: 10,
          variantPrice: 8000000.0,
          variantProperties: {
            content: [
              {
                id: 1,
                code: "size",
                name: "Kích cỡ",
                value: "L",
              },
              {
                id: 2,
                code: "color",
                name: "Màu sắc",
                value: "Đỏ",
              },
            ],
            totalElements: 2,
          },
        },
      ],
      productSaleable: true,
      productPromotion: null,
    },
    {
      productId: 9,
      productName: "Máy chơi game Xbox S",
      productSlug: "xbox-s",
      productThumbnail: "https://media-api-beta.thinkpro.vn/media/core/products/2022/3/9/XboxS_05.jpg?w=700&h=700",
      productPriceRange: [5000000.0],
      productVariants: [
        {
          variantId: 11,
          variantPrice: 5000000.0,
          variantProperties: {
            content: [
              {
                id: 1,
                code: "size",
                name: "Kích cỡ",
                value: "L",
              },
              {
                id: 2,
                code: "color",
                name: "Màu sắc",
                value: "Đỏ",
              },
            ],
            totalElements: 2,
          },
        },
      ],
      productSaleable: true,
      productPromotion: null,
    },
    {
      productId: 10,
      productName: "Chuột Logitech MX Anywhere 2S",
      productSlug: "logi-mx",
      productThumbnail:
        "https://media-api-beta.thinkpro.vn/backend/uploads/product/color_images/2020/9/15/mx2s-01jpg?w=700&h=700",
      productPriceRange: [1.925e7],
      productVariants: [
        {
          variantId: 12,
          variantPrice: 1.925e7,
          variantProperties: {
            content: [
              {
                id: 1,
                code: "size",
                name: "Kích cỡ",
                value: "L",
              },
              {
                id: 2,
                code: "color",
                name: "Màu sắc",
                value: "Đỏ",
              },
            ],
            totalElements: 2,
          },
        },
      ],
      productSaleable: true,
      productPromotion: null,
    },
    {
      productId: 12,
      productName: "Dell Gaming G5 5000",
      productSlug: "dell-g5",
      productThumbnail:
        "https://media-api-beta.thinkpro.vn/backend/uploads/product/color_images/2021/3/3/g5-desktop-1.jpg?w=700&h=700",
      productPriceRange: [1.02e7],
      productVariants: [
        {
          variantId: 14,
          variantPrice: 1.02e7,
          variantProperties: {
            content: [
              {
                id: 1,
                code: "size",
                name: "Kích cỡ",
                value: "L",
              },
              {
                id: 2,
                code: "color",
                name: "Màu sắc",
                value: "Đỏ",
              },
            ],
            totalElements: 2,
          },
        },
      ],
      productSaleable: true,
      productPromotion: null,
    },
    {
      productId: 13,
      productName: "Túi Laptop chống sốc ReeYee 4001/4002",
      productSlug: "ree-yee",
      productThumbnail:
        "https://media-api-beta.thinkpro.vn/backend/uploads/product/color_images/2021/1/19/40014002-01.jpg?w=700&h=700",
      productPriceRange: [1.2e7],
      productVariants: [
        {
          variantId: 15,
          variantPrice: 1.2e7,
          variantProperties: {
            content: [
              {
                id: 1,
                code: "size",
                name: "Kích cỡ",
                value: "L",
              },
              {
                id: 2,
                code: "color",
                name: "Màu sắc",
                value: "Đỏ",
              },
            ],
            totalElements: 2,
          },
        },
      ],
      productSaleable: true,
      productPromotion: null,
    },
    {
      productId: 14,
      productName: "Lenovo ThinkPad T14s Gen 2 (Intel)",
      productSlug: "prod-0",
      productThumbnail: "https://media-api-beta.thinkpro.vn/media/core/products/2022/8/26/T14sG2is%202.jpg?w=500&h=500",
      productPriceRange: [2.499e7],
      productVariants: [
        {
          variantId: 16,
          variantPrice: 2.499e7,
          variantProperties: null,
        },
      ],
      productSaleable: true,
      productPromotion: null,
    },
    {
      productId: 15,
      productName: "Asus Ultra Thin 15 (LM510MA)",
      productSlug: "prod-1",
      productThumbnail:
        "https://media-api-beta.thinkpro.vn/media/core/products/2022/10/1/suface-laptop-3-thinkpro-1.png?w=500&h=500",
      productPriceRange: [3790000.0],
      productVariants: [
        {
          variantId: 17,
          variantPrice: 3790000.0,
          variantProperties: null,
        },
      ],
      productSaleable: true,
      productPromotion: null,
    },
    {
      productId: 18,
      productName: "HUAWEI MatePad T 10",
      productSlug: "prod-4",
      productThumbnail:
        "https://media-api-beta.thinkpro.vn/media/core/products/2022/8/2/LG-Gram-16-2022-ThinkPro.jpg?w=500&h=500",
      productPriceRange: [3500000.0],
      productVariants: [
        {
          variantId: 20,
          variantPrice: 3500000.0,
          variantProperties: null,
        },
      ],
      productSaleable: true,
      productPromotion: null,
    },
    {
      productId: 19,
      productName: "LG Gram 16 2022",
      productSlug: "prod-5",
      productThumbnail:
        "https://media-api-beta.thinkpro.vn/media/core/products/2022/9/30/asus-zenbook-14-q409za-thinkpro-01.jpg?w=500&h=500",
      productPriceRange: [3.099e7],
      productVariants: [
        {
          variantId: 21,
          variantPrice: 3.099e7,
          variantProperties: null,
        },
      ],
      productSaleable: true,
      productPromotion: null,
    },
    {
      productId: 21,
      productName: "GIGABYTE AORUS 15P Gaming Laptop",
      productSlug: "prod-7",
      productThumbnail:
        "https://media-api-beta.thinkpro.vn/media/core/products/2022/9/27/AERO-16-XE15-thinkpro-01.jpg?w=500&h=500",
      productPriceRange: [2.969e7],
      productVariants: [
        {
          variantId: 23,
          variantPrice: 2.969e7,
          variantProperties: null,
        },
      ],
      productSaleable: true,
      productPromotion: null,
    },
  ],
  page: 1,
  size: 12,
  totalElements: 45,
  totalPages: 4,
  last: false,
};

function ClientSearch() {
  const theme = useMantineTheme();

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
            <Grid.Col key={product.productId} span={3}>
              <ClientProductCart product={product} search={"m"} />
            </Grid.Col>
          ))}
        </Grid>
        <Group justify="space-between" mt="lg">
          <Pagination value={1} total={products.totalPages} />
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
  return (
    <main>
      <Container>
        <Stack gap={`calc(${theme.spacing.xl} * 1.5)`}>
          <Card radius="md" shadow="sm" p="lg">
            <Title order={2}>
              Kết quả tìm kiếm cho &quot;
              <Text component="span" c="yellow" inherit>
                m
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
                <RadioGroup>
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
              <Checkbox label="Chỉ tính còn hàng" />
            </Group>

            {resultFragment}
          </Stack>
        </Stack>
      </Container>
    </main>
  );
}

export default ClientSearch;
