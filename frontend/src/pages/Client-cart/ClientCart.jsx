import { Button, Checkbox, LoadingOverlay } from "@mantine/core";
import { useMemo, useState } from "react";
import { InfoCircle, Marquee, ShoppingCart } from "tabler-icons-react";
import Container from "~/components/Container/Container";
import ApplicationConstant from "~/constants/ApplicationConstant";
import { useCartApi } from "~/hooks/client/use-cart-api";
import MiscUtils from "~/utils/MiscUtils";
import ClientCartItem from "./ClientCartItem";
import NotifyUtils from "~/utils/NotifyUtils";
import { useNavigate } from "react-router-dom";

function ClientCart() {
  const { data: cart } = useCartApi();
  const [selectCartItems, setSelectCartItems] = useState([]);
  const navigate = useNavigate();

  const cartItemIds = cart?.cartVariants?.map((item) => item.variant.id) || [];

  const isAllSelected =
    selectCartItems.length > 0 && selectCartItems.length === cartItemIds.length;

  const indeterminate =
    selectCartItems.length > 0 && selectCartItems.length < cartItemIds.length;

  const handleSelectAll = (checked) => {
    if (checked) {
      setSelectCartItems(cartItemIds);
    } else {
      setSelectCartItems([]);
    }
  };

  const handleSelectItem = (variantId, checked) => {
    if (checked) {
      setSelectCartItems((prev) => [...prev, variantId]);
    } else {
      setSelectCartItems((prev) => prev.filter((id) => id !== variantId));
    }
  };

  const detailPay = useMemo(() => {
    if (!cart) return { totalAmount: 0, taxCost: 0, totalPay: 0 };

    const totalAmount = cart.cartVariants.reduce((sum, cartItem) => {
      if (!selectCartItems.includes(cartItem.variant.id)) {
        return sum;
      }
      return (
        sum +
        cartItem.quantity *
          MiscUtils.calculateDiscountedPrice(
            cartItem.variant.price,
            cartItem.variant.product.promotion?.percent || 0,
          )
      );
    }, 0);

    const taxCost = Number(
      (totalAmount * ApplicationConstant.DEFAULT_TAX).toFixed(0),
    );

    const totalPay =
      totalAmount + taxCost + ApplicationConstant.DEFAULT_SHIPPING_COST;

    return { totalAmount, taxCost, totalPay };
  }, [cart, selectCartItems]);

  const handleClickPayment = () => {
    if (selectCartItems.length === 0) {
      NotifyUtils.simpleFailed(
        "Bạn chưa chọn bất kỳ mặt hàng nào để thanh toán",
      );
    } else {
      const selectedCartVariants = cart.cartVariants.filter((item) =>
        selectCartItems.includes(item.variant.id),
      );

      navigate("/payment", {
        state: {
          cartId: cart.id,
          cartItems: selectedCartVariants,
          detailPay,
        },
      });
    }
  };

  if (!cart) return <LoadingOverlay visible />;

  return (
    <main>
      <Container>
        <div className="flex flex-col items-stretch gap-5 text-c-black">
          <div className="flex flex-wrap items-center justify-start gap-2.5">
            <ShoppingCart />
            <h2 className="text-[26px] font-bold leading-[1.35]">Giỏ hàng</h2>
          </div>

          <div className="grid grid-cols-4 m-[-8px]">
            <div className="col-span-full p-2">
              <div
                className="relative overflow-hidden rounded-lg bg-white 
                        shadow-[0_1px_3px_rgba(0,0,0,0.05),0_10px_15px_-5px_rgba(0,0,0,0.05),0_7px_7px_-5px_rgba(0,0,0,0.04)]"
              >
                <div className="overflow-y-auto max-h-[1000px]">
                  <div className="min-w-full table">
                    <table className="w-full">
                      <thead>
                        <tr>
                          <th className="max-w-[50px] px-5 py-4 text-start">
                            <Checkbox
                              checked={isAllSelected}
                              indeterminate={indeterminate}
                              onChange={(event) =>
                                handleSelectAll(event.currentTarget.checked)
                              }
                            />
                          </th>
                          <th className="min-w-[325px] px-5 py-4 text-start">
                            <div className="text-c-muted text-sm leading-[1.55] no-underline font-normal">
                              Mặt hàng
                            </div>
                          </th>
                          <th className="min-w-[125px] px-5 py-4 text-start">
                            <div className="text-c-muted text-sm leading-[1.55] no-underline font-normal">
                              Đơn giá
                            </div>
                          </th>
                          <th className="min-w-[150px] px-5 py-4 text-start">
                            <div className="text-c-muted text-sm leading-[1.55] no-underline font-normal">
                              Số lượng
                            </div>
                          </th>
                          <th className="min-w-[125px] px-5 py-4 text-start">
                            <div className="text-c-muted text-sm leading-[1.55] no-underline font-normal">
                              Thành tiền
                            </div>
                          </th>
                          <th className="min-w-[80px] px-5 py-4 text-center">
                            <div className="text-c-muted text-sm leading-[1.55] no-underline font-normal">
                              Thao tác
                            </div>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {cart.cartVariants?.length === 0 && (
                          <tr>
                            <td
                              colSpan={5}
                              className="px-5 py-4 border-t border-[#dee2e6] text-sm text-center"
                            >
                              <div className="flex flex-col items-center gap-4 my-6 text-primary">
                                <Marquee size={125} strokeWidth={1} />
                                <div className="text-xl font-medium">
                                  Chưa thêm mặt hàng nào
                                </div>
                              </div>
                            </td>
                          </tr>
                        )}
                        {cart.cartVariants?.map((cartItem) => (
                          <ClientCartItem
                            key={cartItem.variant.id}
                            cartItem={cartItem}
                            cartId={cart.id}
                            checked={selectCartItems.includes(
                              cartItem.variant.id,
                            )}
                            onCheck={handleSelectItem}
                          />
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="sticky bottom-0 left-0 w-full h-[100px] flex items-center justify-end px-5 rounded-lg bg-white 
                        shadow-[0_1px_3px_rgba(0,0,0,0.05),0_10px_15px_-5px_rgba(0,0,0,0.05),0_7px_7px_-5px_rgba(0,0,0,0.04)]"
          >
            <div className="flex">
              <div className="flex flex-wrap items-center justify-between mr-4">
                <div className="flex flex-wrap items-center justify-start gap-2.5">
                  <div className="flex items-center justify-center w-5 h-5 rounded text-primary bg-soft">
                    <InfoCircle size={12} />
                  </div>
                  <div className="text-sm leading-[1.55] font-medium">
                    Tổng ({cart.cartVariants.length} mục):
                  </div>
                </div>
                <div className="text-lg text-primary font-bold ml-2">
                  {MiscUtils.toVND(detailPay.totalAmount)}
                </div>
              </div>
              <Button onClick={handleClickPayment}>
                <div className="flex items-center">
                  <ShoppingCart size={24} />
                  <span className="ml-2.5">Thanh toán</span>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}

export default ClientCart;
