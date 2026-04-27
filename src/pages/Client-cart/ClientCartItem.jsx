import { ActionIcon, Group, Text } from "@mantine/core";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Minus, Plus, Trash } from "tabler-icons-react";
import {
  useDeleteCartItem,
  useUpdateCartItem,
} from "~/hooks/client/use-cart-api";
import useAuthStore from "~/stores/use-auth-store";
import MiscUtils from "~/utils/MiscUtils";
import onModalDelete from "~/utils/ModalsUtil";

function ClientCartItem({ cartId, cartItem }) {
  const [quantity, setQuantity] = useState(cartItem.quantity);
  const { user } = useAuthStore();

  useEffect(() => {
    setQuantity(cartItem.quantity);
  }, [cartItem.quantity]);

  const handleDecrease = () => {
    if (quantity > 1) {
      handleUpdate(quantity - 1);
    }
  };

  const handleIncrease = () => {
    if (quantity < cartItem.variant.inventory) {
      handleUpdate(quantity + 1);
    }
  };

  const updateApi = useUpdateCartItem();
  const handleUpdate = (newQuantity) => {
    setQuantity(newQuantity);
    updateApi.mutate({
      userId: user.id,
      cartItems: [{ variantId: cartItem.variant.id, quantity: newQuantity }],
      status: 1,
    });
  };
  const deleteApi = useDeleteCartItem();
  const handleDeleteCartItem = (cartId, cartItemId) => {
    const onConfirm = () =>
      deleteApi.mutate([{ cartId, variantId: cartItemId }]);
    onModalDelete("Bạn có muốn xóa mặt hàng này", onConfirm);
  };

  return (
    <tr>
      <td className="px-5 py-4 border-t border-[#dee2e6] text-sm">
        <div className="flex flex-wrap items-center justify-start gap-2.5">
          <img
            src={cartItem.variant.product.thumbnail}
            alt=""
            className="w-[65px] h-[65px] object-cover rounded-lg"
          />
          <div className="flex flex-col items-stretch gap-[3.5px] flex-grow-0">
            <Link
              to={`/product/${cartItem.variant.product.slug}`}
              className="text-primary text-sm leading-[1.55] hover:underline"
            >
              {cartItem.variant.product.name}
            </Link>
            <div className="flex flex-col items-stretch gap-[1.5px]">
              {cartItem.variant.properties.content.map((item) => (
                <div
                  key={item.code}
                  className="text-c-muted leading-[1.55] text-xs"
                >
                  {`${item.name}: ${item.value}`}
                </div>
              ))}
            </div>
          </div>
        </div>
      </td>
      <td className="px-5 py-4 border-t border-[#dee2e6] text-sm">
        <div className="flex flex-col items-stretch gap-[2.5]">
          <div className="text-sm leading-[1.55] font-medium">
            {MiscUtils.toVND(cartItem.variant.price)}
          </div>
        </div>
      </td>
      <td className="px-5 py-4 border-t border-[#dee2e6] text-sm">
        <div className="flex flex-col items-stretch gap-[3.5px]">
          <Group p={4} gap={4}>
            <ActionIcon onClick={handleDecrease} disabled={quantity <= 1}>
              <Minus size={14} />
            </ActionIcon>

            <Text
              w={40}
              h={30}
              style={{
                fontSize: 12,
                border: "1px solid #ced4da",
                borderRadius: 4,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {quantity}
            </Text>

            <ActionIcon
              onClick={handleIncrease}
              disabled={quantity >= cartItem.variant.inventory}
            >
              <Plus size={14} />
            </ActionIcon>
          </Group>
          <div className="text-c-muted text-xs leading-[1.55]">{`Tồn kho: ${cartItem.variant.inventory}`}</div>
        </div>
      </td>
      <td className="px-5 py-4 border-t border-[#dee2e6] text-sm">
        <div className="text-primary text-sm font-medium">
          {MiscUtils.toVND(quantity * cartItem.variant.price)}
        </div>
      </td>
      <td className="px-5 py-4 border-t border-[#dee2e6] text-sm text-center">
        <div
          className="text-[#fa5252] border border-solid border-[#fa5252] m-auto
                    w-6 h-6 rounded flex items-center justify-center cursor-pointer"
          onClick={() => handleDeleteCartItem(cartId, cartItem.variant.id)}
        >
          <Trash size={16} />
        </div>
      </td>
    </tr>
  );
}

export default ClientCartItem;
