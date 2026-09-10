import { useForm } from "@mantine/form";
import OrderConfigs from "./OrderConfigs";
import { zodResolver } from "mantine-form-zod-resolver";
import { useState } from "react";
import useCreateApi from "~/hooks/admin/use-create-api";
import useGetAllApi from "~/hooks/admin/use-get-all-api";
import OrderCancellationReasonConfigs from "../Admin-order-cancellation-reason/OrderCancellationReasonConfigs";
import PaymentMethodConfigs from "../Admin-payment-method/PaymentMethodConfigs";
import { produce } from "immer";
import OrderResourceConfigs from "../Admin-order-resourse/OrderResourceConfigs";

function useOrderCreateViewModel() {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: OrderConfigs.initialCreateUpdateFormValues,
    validate: zodResolver(OrderConfigs.createUpdateFormSchema),
  });
  const [orderResourceSelectList, setOrderResourceSelectList] = useState([]);
  const [
    orderCancellationReasonSelectList,
    setOrderCancellationReasonSelectList,
  ] = useState([]);
  const [paymentMethodSelectList, setPaymentMethodSelectList] = useState([]);
  const [variants, setVariants] = useState([]);

  const createApi = useCreateApi(OrderConfigs.resourceUrl);
  useGetAllApi(
    OrderResourceConfigs.resourceUrl,
    OrderResourceConfigs.resourceKey,
    { sort: "id,asc", all: 1 },
    (orderResourceResponse) => {
      const selectList = orderResourceResponse.content.map((item) => ({
        value: String(item.id),
        label: item.name,
      }));
      setOrderResourceSelectList(selectList);
    },
  );

  useGetAllApi(
    OrderCancellationReasonConfigs.resourceUrl,
    OrderCancellationReasonConfigs.resourceKey,
    { sort: "id,asc", all: 1 },
    (orderCancellationReasonResponse) => {
      const selectList = orderCancellationReasonResponse.content.map(
        (item) => ({
          value: String(item.id),
          label: item.name,
        }),
      );
      setOrderCancellationReasonSelectList(selectList);
    },
  );

  useGetAllApi(
    PaymentMethodConfigs.resourceUrl,
    PaymentMethodConfigs.resourceKey,
    { sort: "id,asc", all: 1 },
    (paymentMethodResponse) => {
      const selectList = paymentMethodResponse.content.map((item) => ({
        value: String(item.id),
        label: item.name,
      }));
      setPaymentMethodSelectList(selectList);
    },
  );

  const handleFormSubmit = form.onSubmit((formValues) => {
    const requestBody = {
      code: formValues.code,
      status: Number(formValues.status),
      toName: formValues.toName,
      toPhone: formValues.toPhone,
      toAddress: formValues.toAddress,
      toWardName: formValues.toWardName,
      toDistrictName: formValues.toDistrictName,
      toProvinceName: formValues.toProvinceName,
      orderResourceId: Number(formValues.orderResourceId),
      orderCancellationReasonId:
        Number(formValues.orderCancellationReasonId) || null,
      note: formValues.note || null,
      userId: Number(formValues.userId),
      orderVariants: formValues.orderVariants,
      totalAmount: formValues.totalAmount,
      tax: formValues.tax,
      shippingCost: formValues.shippingCost,
      totalPay: formValues.totalPay,
      paymentMethodType: formValues.paymentMethodType,
      paymentStatus: Number(formValues.paymentStatus),
    };
    createApi.mutate(requestBody);
  });

  const handleClickVariantResultItem = (variant) => {
    const orderVariantRequest = {
      variantId: variant.id,
      price: variant.price,
      quantity: 1,
      amount: variant.price,
    };
    const currentOrderVariantRequests = [
      ...form.values.orderVariants,
      orderVariantRequest,
    ];
    form.setFieldValue("orderVariants", currentOrderVariantRequests);
    const totalAmount = calculateTotalAmount(currentOrderVariantRequests);
    form.setFieldValue("totalAmount", totalAmount);
    form.setFieldValue("totalPay", calculateTotalPay({ totalAmount }));
    setVariants((variants) => [...variants, variant]);
  };

  const handleQuantityInput = (quantity, index) => {
    const currentOrderVariantRequests = produce(
      form.values.orderVariants,
      (draft) => {
        const variant = draft[index];
        variant.quantity = quantity;
        variant.amount = variant.price * quantity;
      },
    );
    form.setFieldValue("orderVariants", currentOrderVariantRequests);
    const totalAmount = calculateTotalAmount(currentOrderVariantRequests);
    form.setFieldValue("totalAmount", totalAmount);
    form.setFieldValue("totalPay", calculateTotalPay({ totalAmount }));
  };

  const handleDeleteVariantButton = (index) => {
    const currentOrderVariantRequests = form.values.orderVariants.filter(
      (_, i) => i !== index,
    );
    form.setFieldValue("orderVariants", currentOrderVariantRequests);
    const totalAmount = calculateTotalAmount(currentOrderVariantRequests);
    form.setFieldValue("totalAmount", totalAmount);
    form.setFieldValue("totalPay", calculateTotalPay({ totalAmount }));
    setVariants((variants) => variants.filter((_, i) => i !== index));
  };

  const handleShippingCostInput = (shippingCost) => {
    form.setFieldValue("shippingCost", shippingCost);
    form.setFieldValue("totalPay", calculateTotalPay({ shippingCost }));
  };

  const resetForm = () => {
    form.reset();
    setVariants([]);
  };

  const calculateTotalAmount = (orderVariantRequests) =>
    orderVariantRequests.map((item) => item.amount).reduce((a, b) => a + b, 0);

  const calculateTotalPay = ({
    totalAmount = form.values.totalAmount,
    shippingCost = form.values.shippingCost,
  }) =>
    Number(
      (totalAmount + totalAmount * form.values.tax + shippingCost).toFixed(0),
    );

  const statusSelectList = [
    {
      value: "1",
      label: "Đơn hàng mới",
    },
    {
      value: "2",
      label: "Đang xử lý",
    },
    {
      value: "3",
      label: "Đang giao hàng",
    },
    {
      value: "4",
      label: "Đã giao hàng",
    },
    {
      value: "5",
      label: "Hủy bỏ",
    },
  ];

  const paymentStatusSelectList = [
    {
      value: "1",
      label: "Chưa thanh toán",
    },
    {
      value: "2",
      label: "Đã thanh toán",
    },
  ];

  return {
    form,
    orderResourceSelectList,
    orderCancellationReasonSelectList,
    paymentMethodSelectList,
    statusSelectList,
    paymentStatusSelectList,
    variants,
    handleFormSubmit,
    handleClickVariantResultItem,
    handleQuantityInput,
    handleDeleteVariantButton,
    handleShippingCostInput,
    resetForm,
  };
}
export default useOrderCreateViewModel;
