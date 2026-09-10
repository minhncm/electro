import { Button, Group, Image, Radio, Stack, Text } from "@mantine/core";
import { useModals } from "@mantine/modals";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  BrandPaypal,
  Cash,
  Home,
  InfoCircle,
  Marquee,
  ShoppingCart,
} from "tabler-icons-react";
import Container from "~/components/Container/Container";
import {
  useCaptureOrder,
  useCreateOrder,
  useGetShippingFee,
} from "~/hooks/client/use-order-api";
import * as PageConfigs from "~/pages/PageConfig";
import useAuthStore from "~/stores/use-auth-store";
import MiscUtils from "~/utils/MiscUtils";

function ClientPayment() {
  const { user } = useAuthStore();
  const [paymentMethod, setPaymentMethod] = useState("cash");
  const modals = useModals();
  const location = useLocation();
  const navigate = useNavigate();

  const { data: shippingFee } = useGetShippingFee();

  useEffect(() => {
    if (cartItems.length === 0) {
      navigate("/cart");
    }
  }, []);

  const cartId = location.state?.cartId;
  const cartItems = location.state?.cartItems || [];
  const detailPay = location.state?.detailPay || {
    totalAmount: 0,
    taxCost: 0,
    totalPay: 0,
  };

  const createOrderApi = useCreateOrder();
  const captureOrderApi = useCaptureOrder();
  const handleOrderButton = () => {
    const PaymentMethodIcon =
      PageConfigs.paymentMethodIconMap[paymentMethod.toUpperCase()];

    modals.openConfirmModal({
      size: "md",
      closeOnConfirm: false,
      withCloseButton: false,
      title: <strong>Thông báo xác nhận đặt mua</strong>,
      children: (
        <Stack>
          <Text>
            Bạn có muốn đặt mua những sản phẩm đã chọn với hình thức thanh toán
            sau?
          </Text>
          <Group gap="xs">
            <PaymentMethodIcon />
            <Text size="sm">
              {PageConfigs.paymentMethodNameMap[paymentMethod.toUpperCase()]}
            </Text>
          </Group>
        </Stack>
      ),
      labels: {
        cancel: "Hủy",
        confirm: "Xác nhận đặt mua",
      },
      confirmProps: { color: "blue" },
      onConfirm: () => {
        if (paymentMethod === "paypal") {
          modals.openModal({
            size: "lg",
            children: (
              <PayPalScriptProvider
                options={{
                  "client-id": process.env.REACT_APP_PAYPAL_CLIENT_ID,
                  buyerCountry: "VN",
                  currency: "USD",
                }}
              >
                <PayPalButtons
                  style={{
                    shape: "rect",
                    layout: "vertical",
                    color: "blue",
                    label: "paypal",
                  }}
                  createOrder={async () => {
                    const cartItemIds = cartItems.map((item) => ({
                      cartId,
                      variantId: item.variant.id,
                    }));
                    const response = await createOrderApi.mutateAsync({
                      cartItemIds,
                      paymentMethodType: paymentMethod.toUpperCase(),
                    });

                    return response.paypalOrderId;
                  }}
                  onApprove={async (data) => {
                    await captureOrderApi.mutateAsync(data.orderID);
                  }}
                />
              </PayPalScriptProvider>
            ),
          });
        }
      },
    });
  };

  if (!shippingFee) return null;
  return (
    <main>
      <Container>
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
                <div className="flex items-stretch gap-[3.5px]">
                  <div className="text-sm font-bold leading-[1.55]">
                    {user.fullname}
                  </div>
                  <div className="text-sm font-bold leading-[1.55] ml-4">
                    {user.phone}
                  </div>
                  <div className="flex items-center justify-center">
                    <div
                      title="Địa chỉ của người dùng đặt mua"
                      className="inline-flex items-center justify-center w-4 h-4 ml-4 mr-2
                                      bg-c-green text-white rounded"
                    >
                      <Home size={12} />
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
            </div>

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
                </tr>
              </thead>
              <tbody>
                {cartItems?.length === 0 && (
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
                {cartItems?.map((cartItem) => (
                  <tr key={cartItem.variant.id}>
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
                            {cartItem.quantity}
                          </Text>
                        </Group>
                      </div>
                    </td>
                    <td className="px-5 py-4 border-t border-[#dee2e6] text-sm">
                      <div className="text-primary text-sm font-medium">
                        {MiscUtils.toVND(
                          cartItem.quantity * cartItem.variant.price,
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

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

                <Radio.Group value={paymentMethod} onChange={setPaymentMethod}>
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
                      value="paypal"
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
                <div className="flex items-center justify-end gap-8">
                  <div className="w-32 text-c-muted text-sm leading-[1.55]">
                    Tạm tính
                  </div>
                  <div className="text-sm w-24 text-right">
                    {MiscUtils.toVND(detailPay.totalAmount)}
                  </div>
                </div>

                <div className="flex items-center justify-end gap-8">
                  <div className="w-32 text-c-muted text-sm leading-[1.55]">
                    Thuế(10%)
                  </div>
                  <div className="text-sm w-24 text-right">
                    {MiscUtils.toVND(detailPay.taxCost)}
                  </div>
                </div>

                <div className="flex items-center justify-end gap-8">
                  <div className="w-32 text-c-muted text-sm leading-[1.55]">
                    Phí giao hàng
                  </div>
                  <div className="text-sm w-24 text-right">
                    {MiscUtils.toVND(shippingFee.data.total)}
                  </div>
                </div>

                <div className="flex items-center justify-end gap-8 border-t border-dashed border-gray-200 pt-3 mt-1">
                  <div className="w-32 flex items-center justify-start gap-2.5">
                    <div className="text-sm leading-[1.55] font-medium">
                      Tổng tiền
                    </div>
                    <div className="flex items-center justify-center w-5 h-5 rounded text-primary bg-soft">
                      <InfoCircle size={12} />
                    </div>
                  </div>
                  <div className="text-lg text-primary font-bold w-24 text-right">
                    {MiscUtils.toVND(detailPay.totalPay)}
                  </div>
                </div>
                <div className="flex items-center justify-end gap-8 border-t border-dashed border-gray-200 pt-3 mt-1">
                  <Button onClick={handleOrderButton} w={250}>
                    <div className="flex items-center">
                      <ShoppingCart size={24} />
                      <span className="ml-2.5">Đặt mua</span>
                    </div>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}

export default ClientPayment;
