import {
  Button,
  Group,
  Image,
  LoadingOverlay,
  Radio,
  Stack,
  Text,
} from "@mantine/core";
import { Link } from "react-router-dom";
import {
  BrandPaypal,
  Cash,
  Home,
  InfoCircle,
  Marquee,
  ShoppingCart,
} from "tabler-icons-react";
import Container from "~/components/Container/Container";
import ApplicationConstant from "~/constants/ApplicationConstant";
import { useCartApi } from "~/hooks/client/use-cart-api";
import useAuthStore from "~/stores/use-auth-store";
import MiscUtils from "~/utils/MiscUtils";
import ClientCartItem from "./ClientCartItem";

function ClientCart() {
  const { user } = useAuthStore();
  const { data: cart } = useCartApi();

  let totalAmount;
  let taxCost;
  let totalPay;

  if (cart) {
    totalAmount = cart.cartVariants
      .map(
        (cartItem) =>
          cartItem.quantity *
          MiscUtils.calculateDiscountedPrice(
            cartItem.variant.price,
            cartItem.variant.product.promotion
              ? cartItem.variant.product.promotion.percent
              : 0,
          ),
      )
      .reduce((sum, current) => sum + current, 0);

    taxCost = Number(
      (totalAmount * ApplicationConstant.DEFAULT_TAX).toFixed(0),
    );

    totalPay =
      totalAmount + taxCost + ApplicationConstant.DEFAULT_SHIPPING_COST;
  }

  if (!cart) return <LoadingOverlay />;

  return (
    <main>
      <Container>
        <div className="flex flex-col items-stretch gap-5 text-c-black">
          <div className="flex flex-wrap items-center justify-start gap-2.5">
            <ShoppingCart />
            <h2 className="text-[26px] font-bold leading-[1.35]">Giỏ hàng</h2>
          </div>

          <div className="grid grid-cols-4 m-[-8px]">
            <div className="col-span-3 p-2">
              <div
                className="relative overflow-hidden rounded-lg bg-white 
                        shadow-[0_1px_3px_rgba(0,0,0,0.05),0_10px_15px_-5px_rgba(0,0,0,0.05),0_7px_7px_-5px_rgba(0,0,0,0.04)]"
              >
                <div className="overflow-y-auto max-h-[1000px]">
                  <div className="min-w-full table">
                    <table className="w-full">
                      <thead>
                        <tr>
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
                          />
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-1 p-2">
              <div className="flex flex-col items-stretch gap-4">
                <div
                  className="relative overflow-hidden bg-white pt-4 px-5 pb-5 rounded-lg 
                            shadow-[0_1px_3px_rgba(0,0,0,0.05),_0_10px_15px_-5px_rgba(0,0,0,0.05),_0_7px_7px_-5px_rgba(0,0,0,0.04)]"
                >
                  <div className="flex flex-col items-stretch gap-2.5">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <div className="text-c-muted leading-[1.55] font-medium">
                        Giao tới
                      </div>
                      <Button
                        component={Link}
                        to={"/user/setting/personal"}
                        size="compact-xs"
                        variant="light"
                      >
                        Thay đổi
                      </Button>
                    </div>
                    <div className="flex flex-col items-stretch gap-[3.5px]">
                      <div className="text-sm font-medium leading-[1.55]">
                        {user.fullname}
                        <div
                          title="Địa chỉ của người dùng đặt mua"
                          className="inline-flex items-center justify-center w-4 h-4 ml-2.5 
                                      bg-c-green text-white rounded"
                        >
                          <Home size={12} />
                        </div>
                      </div>
                      <div className="text-sm leading-[1.55] font-medium">
                        {user.phone}
                      </div>
                      <div className="text-c-muted text-sm leading-[1.55]">
                        {[
                          user.address.line,
                          user.address.ward.name,
                          user.address.district.name,
                          user.address.province.name,
                        ]
                          .filter(Boolean)
                          .join(", ")}
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="relative overflow-hidden bg-white pt-4 px-5 pb-5 rounded-lg 
                            shadow-[0_1px_3px_rgba(0,0,0,0.05),_0_10px_15px_-5px_rgba(0,0,0,0.05),_0_7px_7px_-5px_rgba(0,0,0,0.04)]"
                >
                  <div className="flex flex-col items-stretch gap-2.5">
                    <div className="text-c-muted leading-[1.55] font-medium">
                      Hình thức giao hàng
                    </div>
                    <Radio.Group defaultValue="ghn">
                      <Group>
                        <Radio
                          value="ghn"
                          label={
                            <Group>
                              <Image
                                w={150}
                                src="https://file.hstatic.net/200000472237/file/logo_b8515d08a6d14b09bce4e39221712e15.png"
                                alt="Giao hàng nhanh"
                              />
                            </Group>
                          }
                        />
                      </Group>
                    </Radio.Group>
                  </div>
                </div>
                <div
                  className="relative overflow-hidden bg-white pt-4 px-5 pb-5 rounded-lg 
                            shadow-[0_1px_3px_rgba(0,0,0,0.05),_0_10px_15px_-5px_rgba(0,0,0,0.05),_0_7px_7px_-5px_rgba(0,0,0,0.04)]"
                >
                  <div className="flex flex-col items-stretch gap-2.5">
                    <div className="text-c-muted leading-[1.55] font-medium">
                      Hình thức thanh toán
                    </div>

                    <Radio.Group defaultValue="cash">
                      <Stack>
                        <Radio
                          value="cash"
                          label={
                            <Group>
                              <Cash size={24} />
                              <Text size="sm">Tiền mặt</Text>
                            </Group>
                          }
                        />
                        <Radio
                          value="Paypal"
                          label={
                            <Group>
                              <BrandPaypal size={24} />
                              <Text size="sm">Paypal</Text>
                            </Group>
                          }
                        />
                      </Stack>
                    </Radio.Group>
                  </div>
                </div>

                <div
                  className="relative overflow-hidden bg-white pt-4 px-5 pb-5 rounded-lg 
                            shadow-[0_1px_3px_rgba(0,0,0,0.05),_0_10px_15px_-5px_rgba(0,0,0,0.05),_0_7px_7px_-5px_rgba(0,0,0,0.04)]"
                >
                  <div className="flex flex-col items-stretch gap-3">
                    <div className="flex flex-wrap items-center justify-between">
                      <div className="text-c-muted text-sm leading-[1.55]">
                        Tạm tính
                      </div>
                      <div className="text-sm">
                        {MiscUtils.toVND(totalAmount)}
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center justify-between">
                      <div className="text-c-muted text-sm leading-[1.55]">
                        Thuế(10%)
                      </div>
                      <div className="text-sm">{MiscUtils.toVND(taxCost)}</div>
                    </div>
                    <div className="flex flex-wrap items-center justify-between">
                      <div className="flex flex-wrap items-center justify-start gap-2.5">
                        <div className="text-sm leading-[1.55] font-medium">
                          Tổng tiền
                        </div>
                        <div className="flex items-center justify-center w-5 h-5 rounded text-primary bg-soft">
                          <InfoCircle size={12} />
                        </div>
                      </div>
                      <div className="text-lg text-primary font-bold">
                        {MiscUtils.toVND(totalPay)}
                      </div>
                    </div>
                  </div>
                </div>

                <Button>
                  <div className="flex items-center">
                    <ShoppingCart size={24} />
                    <span className="ml-2.5">Đặt mua</span>
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}

export default ClientCart;
