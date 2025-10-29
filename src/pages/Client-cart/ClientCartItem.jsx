import { Link } from "react-router-dom";
import { Trash } from "tabler-icons-react";
import onModalDelete from "~/utils/ModalsUtil";

function ClientCartItem({ cartItem }) {
  const handleDeleteCartItem = () => {
    const onConfirm = () => alert("confirm");
    onModalDelete("Bạn có muốn xóa mặt hàng này", onConfirm);
  };

  return (
    <tr>
      <td className="px-5 py-4 border-t border-[#dee2e6] text-sm">
        <div className="flex flex-wrap items-center justify-start gap-2.5">
          <img
            src={cartItem.cartItemVariant.variantProduct.productThumbnail}
            alt=""
            className="w-[65px] h-[65px] object-cover rounded-lg"
          />
          <div className="flex flex-col items-stretch gap-[3.5px] flex-grow-0">
            <Link
              to={`/product/${cartItem.cartItemVariant.variantProduct.productSlug}`}
              className="text-primary text-sm leading-[1.55] hover:underline"
            >
              {cartItem.cartItemVariant.variantProduct.productName}
            </Link>
            <div className="flex flex-col items-stretch gap-[1.5px]">
              {cartItem.cartItemVariant.variantProperties.content.map((item) => (
                <div key={item.code} className="text-c-muted leading-[1.55] text-xs">
                  {`${item.name}: ${item.value}`}
                </div>
              ))}
            </div>
          </div>
        </div>
      </td>
      <td className="px-5 py-4 border-t border-[#dee2e6] text-sm">
        <div className="flex flex-col items-stretch gap-[2.5]">
          <div className="text-sm leading-[1.55] font-medium">{`${cartItem.cartItemVariant.variantPrice} ₫`}</div>
        </div>
      </td>
      <td className="px-5 py-4 border-t border-[#dee2e6] text-sm">
        <div className="flex flex-col items-stretch gap-[3.5px]">
          <div className="flex flex-wrap items-center justify-start gap-[5px]">
            <button
              className="bg-white border border-solid border-[#ced4da] flex items-center justify-center
                            h-[30px] w-[30px] rounded cursor-pointer"
            >
              –
            </button>
            <div className="leading-[1.55]">
              <input
                value={1}
                min={1}
                max={cartItem.cartItemVariant.variantInventory}
                className="border border-solid border-[#ced4da] w-[45px] h-[30px] 
                            px-2.5 rounded text-center text-xs leading-7 outline-none focus:border-primary"
              />
            </div>
            <button
              className="bg-white border border-solid border-[#ced4da] flex items-center justify-center
                            h-[30px] w-[30px] rounded cursor-pointer"
            >
              +
            </button>
          </div>
          <div className="text-c-muted text-xs leading-[1.55]">{`Tồn kho: ${cartItem.cartItemVariant.variantInventory}`}</div>
        </div>
      </td>
      <td className="px-5 py-4 border-t border-[#dee2e6] text-sm">
        <div className="text-primary text-sm font-medium">44.000.000 ₫</div>
      </td>
      <td className="px-5 py-4 border-t border-[#dee2e6] text-sm text-center">
        <div
          className="text-[#fa5252] border border-solid border-[#fa5252] m-auto
                    w-6 h-6 rounded flex items-center justify-center cursor-pointer"
          onClick={handleDeleteCartItem}
        >
          <Trash size={16} />
        </div>
      </td>
    </tr>
  );
}

export default ClientCartItem;
