import { Link } from "react-router-dom";
import { HeartPlus, ShoppingCart } from "tabler-icons-react";

function ClientProductCart() {
  return (
    <Link
      to={`/product/`}
      className="group block text-c-black rounded-lg bg-white p-5 
                shadow-[0_1px_3px_rgba(0,0,0,0.05),_0_10px_15px_-5px_rgba(0,0,0,0.05),_0_7px_7px_-5px_rgba(0,0,0,0.04)]"
    >
      <div className="flex flex-col items-stretch gap-2.5">
        <div className="relative">
          <img
            src="https://media-api-beta.thinkpro.vn/media/core/products/2022/5/9/xps%2013%20plus%209320%201.png?w=700&h=700"
            alt=""
            className="w-full h-auto object-cover"
          />

          <div
            className="absolute left-[50%] translate-x-[-50%] bottom-0 
                        flex flex-wrap items-center justify-start gap-2.5 opacity-0
                        group-hover:opacity-100 transition-all duration-200 ease-linear"
          >
            <button
              title="Thêm vào danh sách yêu thích"
              className="bg-c-pink text-white relative w-[34px] h-[34px] rounded-[32px] 
                                flex items-center justify-center cursor-pointer"
            >
              <HeartPlus size={18} />
            </button>
            <button
              title="Thêm vào giỏ hàng"
              className="bg-primary text-white relative w-[34px] h-[34px] rounded-[32px] 
                                flex items-center justify-center cursor-pointer"
            >
              <ShoppingCart size={18} />
            </button>
          </div>
        </div>

        <div className="flex flex-col item gap-[5px]">
          <div className="flex flex-wrap items-center justify-start gap-2.5">
            <span className="font-medium leading-[1.55]">Dell XPS 13 9315</span>
          </div>
          <div className="text-c-pink font-medium">5.500.000–12.500.000 ₫</div>
          <div className="text-c-muted text-sm">3 phiên bản</div>
        </div>
      </div>
    </Link>
  );
}

export default ClientProductCart;
