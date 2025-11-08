import Container from "~/components/Container/Container";
import ClientProductIntro from "./ClientProductIntro";
import { Stack, useMantineTheme } from "@mantine/core";
import ClientProductSpecification from "./ClientProductSpecification";
import ClientProductDescription from "./ClientProductDescription";
import ClientProductReview from "./ClientProductReview";
import ClientProductRelateProducts from "./ClientProductRelateProducts";

const product = {
  productId: 1,
  productName: "Dell XPS 13 9315",
  productSlug: "ealdus0",
  productShortDescription: "Pellentesque ultrices mattis odio. Donec vitae nisi.",
  productDescription:
    "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
  productImages: [
    {
      id: 1,
      name: "233x100.png",
      path: "https://media-api-beta.thinkpro.vn/media/core/products/2022/5/9/xps%2013%20plus%209320%201.png?w=700&h=700",
      contentType: "image/png",
      size: 300,
      group: "P",
      isThumbnail: true,
      isEliminated: false,
    },
    {
      id: 2,
      name: "185x100.png",
      path: "https://media-api-beta.thinkpro.vn/media/core/products/2022/5/9/xps%2013%20plus%209320%203.png?w=700&h=700",
      contentType: "image/png",
      size: 200,
      group: "P",
      isThumbnail: false,
      isEliminated: false,
    },
    {
      id: 3,
      name: "144x100.png",
      path: "https://media-api-beta.thinkpro.vn/media/core/products/2022/5/9/xps%2013%20plus%209320%202.png?w=700&h=700",
      contentType: "image/png",
      size: 100,
      group: "P",
      isThumbnail: false,
      isEliminated: false,
    },
  ],
  productCategory: {
    categoryName: "Laptop",
    categorySlug: "laptop",
    categoryChildren: [],
  },
  productBrand: {
    brandId: 3,
    brandName: "Lehner-O'Hara",
  },
  productSpecifications: {
    content: [
      {
        id: 1,
        code: "screen-size",
        name: "Cỡ màn hình",
        value: "15 inch",
      },
      {
        id: 2,
        code: "cpu",
        name: "CPU",
        value: "Intel Core i7",
      },
    ],
    totalElements: 2,
  },
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
      variantInventory: 2,
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
      variantInventory: 1,
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
      variantInventory: 0,
    },
  ],
  productSaleable: true,
  productAverageRatingScore: 4,
  productCountReviews: 1,
  productRelatedProducts: [
    {
      productId: 77,
      productName: "Acer Nitro 5 Tiger (Intel Gen 12th)",
      productSlug: "prod-63",
      productThumbnail:
        "https://media-api-beta.thinkpro.vn/media/core/products/2022/5/27/Dell%20Inspiron%2014%205420%201.png?w=500&h=500",
      productPriceRange: [2.499e7],
      productVariants: [
        {
          variantId: 79,
          variantPrice: 2.499e7,
          variantProperties: null,
        },
      ],
      productSaleable: true,
      productPromotion: null,
    },
    {
      productId: 65,
      productName: "Dell XPS 17 9720 (Intel Gen 12th)",
      productSlug: "prod-51",
      productThumbnail:
        "https://media-api-beta.thinkpro.vn/media/core/products/2022/4/9/Dell_XPS_9720_17_inch_2022_Thinkpro%204.png?w=500&h=500",
      productPriceRange: [2.169e7],
      productVariants: [
        {
          variantId: 67,
          variantPrice: 2.169e7,
          variantProperties: null,
        },
      ],
      productSaleable: true,
      productPromotion: null,
    },
    {
      productId: 100,
      productName: "Dell Precision 5540",
      productSlug: "prod-86",
      productThumbnail:
        "https://media-api-beta.thinkpro.vn/media/core/products/2022/9/30/Lenovo-Thinkpad-T14-thinkpro-01.jpg?w=500&h=500",
      productPriceRange: [9990000.0],
      productVariants: [
        {
          variantId: 102,
          variantPrice: 9990000.0,
          variantProperties: null,
        },
      ],
      productSaleable: true,
      productPromotion: null,
    },
    {
      productId: 28,
      productName: "Asus Zenbook Flip 13 UX363 OLED",
      productSlug: "prod-14",
      productThumbnail:
        "https://media-api-beta.thinkpro.vn/media/core/products/2022/9/30/Asus-TUF-FX706H-thinkpro-01.jpg?w=500&h=500",
      productPriceRange: [2.269e7],
      productVariants: [
        {
          variantId: 30,
          variantPrice: 2.269e7,
          variantProperties: null,
        },
      ],
      productSaleable: true,
      productPromotion: null,
    },
  ],
  productPromotion: null,
};

function ClientProduct() {
  const theme = useMantineTheme();
  return (
    <main>
      <Container>
        <Stack gap={`calc(${theme.spacing.lg} * 2)`}>
          <ClientProductIntro product={product} />
          <ClientProductSpecification product={product} />
          <ClientProductDescription product={product} />
          <ClientProductReview />
          <ClientProductRelateProducts product={product} />
        </Stack>
      </Container>
    </main>
  );
}

export default ClientProduct;
