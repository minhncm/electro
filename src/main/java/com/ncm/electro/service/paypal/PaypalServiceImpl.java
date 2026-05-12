package com.ncm.electro.service.paypal;

import com.ncm.electro.exception.PaypalException;
import com.paypal.sdk.Environment;
import com.paypal.sdk.PaypalServerSdkClient;
import com.paypal.sdk.authentication.ClientCredentialsAuthModel;
import com.paypal.sdk.controllers.OrdersController;
import com.paypal.sdk.exceptions.ApiException;
import com.paypal.sdk.http.response.ApiResponse;
import com.paypal.sdk.models.*;
import org.slf4j.event.Level;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.Arrays;

@Service
public class PaypalServiceImpl implements PaypalService{
    @Value("${paypal.client-id}")
    private String PAYPAL_CLIENT_ID;
    @Value("${paypal.secret}")
    private String PAYPAL_SECRET;

    private PaypalServerSdkClient paypalClient() {
        return new PaypalServerSdkClient.Builder()
                .loggingConfig(builder -> builder
                        .level(Level.DEBUG)
                        .requestConfig(logConfigBuilder -> logConfigBuilder.body(true))
                        .responseConfig(logConfigBuilder -> logConfigBuilder.headers(true)))
                .httpClientConfig(configBuilder -> configBuilder.timeout(0))
                .environment(Environment.SANDBOX)
                .clientCredentialsAuth(new ClientCredentialsAuthModel.Builder(
                        PAYPAL_CLIENT_ID,
                        PAYPAL_SECRET
                        ).build()
                )
                .build();
    }

    @Override
    public Order createOrder(com.ncm.electro.entity.order.Order order) {
        try{
            BigDecimal usdTotalPay = order.getTotalPay()
                    .divide(BigDecimal.valueOf(26309), 2, RoundingMode.HALF_UP);

            CreateOrderInput createOrderInput = new CreateOrderInput.Builder(
                    null,
                    new OrderRequest.Builder(
                            CheckoutPaymentIntent.fromString("CAPTURE"),
                            Arrays.asList(
                                    new PurchaseUnitRequest.Builder(
                                            new AmountWithBreakdown.Builder(
                                                    "USD",
                                                    usdTotalPay.toString()
                                            ).build()
                                    ).build()
                            )
                    ).build()
            ).build();
            OrdersController ordersController = paypalClient().getOrdersController();
            ApiResponse<Order> apiResponse = ordersController.createOrder(createOrderInput);
            return apiResponse.getResult();
        }
        catch (IOException | ApiException exception) {
            throw new PaypalException("Paypal create order failed: " + exception.getMessage());
        }
    }

    @Override
    public void captureOrder(String paypalOrderId) {
        try{
            CaptureOrderInput ordersCaptureInput = new CaptureOrderInput.Builder(
                    paypalOrderId,
                    null)
                    .build();
            OrdersController ordersController = paypalClient().getOrdersController();
            ordersController.captureOrder(ordersCaptureInput);
        }catch (IOException | ApiException exception) {
            throw new  PaypalException("Paypal capture order failed: " + exception.getMessage());
        }
    }
}
