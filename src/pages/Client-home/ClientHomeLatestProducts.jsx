import { Grid, Skeleton, Stack, Text, useMantineTheme } from "@mantine/core";
import { AlertTriangle, List } from "tabler-icons-react";
import ClientProductCart from "~/components/ClientProductCard/ClientProductCard";
import Button from "~/components/common/Button";

const products = {
  content: [
    {
      productId: 1,
      productName: "Dell XPS 13 9315",
      productSlug: "ealdus0",
      productThumbnail:
        "https://media-api-beta.thinkpro.vn/media/core/products/2022/5/9/xps%2013%20plus%209320%201.png?w=700&h=700",
      productPriceRange: [5500000.0, 1.25e7],
      productVariants: [
        {
          variantId: 1,
          variantPrice: 5500000.0,
          variantProperties: {
            content: [
              {
                id: 1,
                code: "size",
                name: "Kích cỡ",
                value: "S",
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
        {
          variantId: 2,
          variantPrice: 1.25e7,
          variantProperties: {
            content: [
              {
                id: 1,
                code: "size",
                name: "Kích cỡ",
                value: "M",
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
        {
          variantId: 3,
          variantPrice: 1.0e7,
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
      productId: 2,
      productName: "Microsoft Surface Pro 9",
      productSlug: "eblackaller1",
      productThumbnail:
        "https://media-api-beta.thinkpro.vn/media/core/products/2023/2/3/surface-pro-9-thinkpro-1.png",
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
      productId: 3,
      productName: "Lenovo ThinkPad X1 Nano Gen 2",
      productSlug: "fblakeborough2",
      productThumbnail:
        "https://media-api-beta.thinkpro.vn/media/core/products/2022/1/15/Lenovo_ThinkPad_X1_Nano_Gen_2.png?w=700&h=700",
      productPriceRange: [2.2e7],
      productVariants: [
        {
          variantId: 5,
          variantPrice: 2.2e7,
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
      productId: 4,
      productName: "Dell Precision 15 5560",
      productSlug: "jsauvage3",
      productThumbnail:
        "https://media-api-beta.thinkpro.vn/media/core/products/2022/9/30/dell-precision-5560-thinkpro-1.png?w=700&h=700",
      productPriceRange: [6000000.0],
      productVariants: [
        {
          variantId: 6,
          variantPrice: 6000000.0,
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
      productId: 5,
      productName: "New Inspiron 16 Plus Laptop",
      productSlug: "gphuprate4",
      productThumbnail:
        "https://media-api-beta.thinkpro.vn/media/core/products/2023/1/16/dell-inspiron-16-plus-7610-thinkpro-01.png?w=700&h=700",
      productPriceRange: [4.0e7],
      productVariants: [
        {
          variantId: 7,
          variantPrice: 4.0e7,
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
      productId: 7,
      productName: "Loa di động B&O BeoSound",
      productSlug: "beosound",
      productThumbnail:
        "https://media-api-beta.thinkpro.vn/media/core/products/2022/12/18/beosound-2-thinkpro-01.jpeg?w=700&h=700",
      productPriceRange: [1.2e7],
      productVariants: [
        {
          variantId: 9,
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
      productId: 8,
      productName: "Bàn phím không dây Logitech MX Keys",
      productSlug: "logitech",
      productThumbnail:
        "https://media-api-beta.thinkpro.vn/media/core/products/2022/1/15/mx-keys-1.png?w=700&h=700",
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
      productThumbnail:
        "https://media-api-beta.thinkpro.vn/media/core/products/2022/3/9/XboxS_05.jpg?w=700&h=700",
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
      productId: 11,
      productName: "Intel Core i9-13900K",
      productSlug: "i9-13900",
      productThumbnail:
        "https://media-api-beta.thinkpro.vn/media/core/products/2022/11/8/Intel-Core-i9-13900K-Processor.png?w=700&h=700",
      productPriceRange: [2.2e7],
      productVariants: [
        {
          variantId: 13,
          variantPrice: 2.2e7,
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
  ],
  page: 1,
  size: 12,
  totalElements: 101,
  totalPages: 9,
  last: false,
};

const isLoading = false;
const isError = false;

function ClientHomeLatestProducts() {
  const theme = useMantineTheme();

  // const {
  //   data: products,
  //   isLoading,
  //   isError,
  // } = useGetAllApi(ProductConfigs.resourceUrl, ProductConfigs.resourceKey);

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
