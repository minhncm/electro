import { List } from "tabler-icons-react";
import ClientProductCart from "~/components/ClientProductCart/ClientProductCart";
import Button from "~/components/common/Button";

function ClientHomeLatestProducts() {
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
      <div className="grid grid-cols-4 m-[-8px]">
        <div className="p-2 flex-grow-0">
          <ClientProductCart />
        </div>
        <div className="p-2 flex-grow-0">
          <ClientProductCart />
        </div>
        <div className="p-2 flex-grow-0">
          <ClientProductCart />
        </div>
        <div className="p-2 flex-grow-0">
          <ClientProductCart />
        </div>
        <div className="p-2 flex-grow-0">
          <ClientProductCart />
        </div>
        <div className="p-2 flex-grow-0">
          <ClientProductCart />
        </div>
        <div className="p-2 flex-grow-0">
          <ClientProductCart />
        </div>
        <div className="p-2 flex-grow-0">
          <ClientProductCart />
        </div>
      </div>
    </div>
  );
}

export default ClientHomeLatestProducts;
