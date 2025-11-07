import { List } from "tabler-icons-react";
import ClientProductCart from "~/components/ClientProductCard/ClientProductCard";
import Button from "~/components/common/Button";

const product = {
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
};

function ClientHomeLatestProducts() {
  return (
    <div className="flex flex-col items-stretch gap-4">
      <div className="flex flex-wrap items-center justify-between">
        <h2 className="text-[26px] text-[#f76707] leading-[1.35] font-bold">Sản phẩm mới nhất</h2>
        <Button size="sm" icon={<List size={16} />} to={"/user"} className="bg-soft text-primary hover:bg-[#d0ebffa6]">
          Xem tất cả
        </Button>
      </div>
      <div className="grid grid-cols-4 m-[-8px]">
        <div className="p-2 flex-grow-0">
          <ClientProductCart product={product} />
        </div>
        <div className="p-2 flex-grow-0">
          <ClientProductCart product={product} />
        </div>
        <div className="p-2 flex-grow-0">
          <ClientProductCart product={product} />
        </div>
        <div className="p-2 flex-grow-0">
          <ClientProductCart product={product} />
        </div>
        <div className="p-2 flex-grow-0">
          <ClientProductCart product={product} />
        </div>
        <div className="p-2 flex-grow-0">
          <ClientProductCart product={product} />
        </div>
        <div className="p-2 flex-grow-0">
          <ClientProductCart product={product} />
        </div>
        <div className="p-2 flex-grow-0">
          <ClientProductCart product={product} />
        </div>
      </div>
    </div>
  );
}

export default ClientHomeLatestProducts;
