package com.ncm.electro.controller.client;

import com.ncm.electro.constant.AppConstants;
import com.ncm.electro.dto.ListResponse;
import com.ncm.electro.dto.client.ClientConfirmedOrderResponse;
import com.ncm.electro.dto.client.ClientOrderResponse;
import com.ncm.electro.dto.client.ClientSimpleOrderRequest;
import com.ncm.electro.dto.client.ClientSimpleOrderResponse;
import com.ncm.electro.dto.ghn.GhnShippingFeeResponse;
import com.ncm.electro.service.client.ClientOrderService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.lang.Nullable;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/client-api/orders")
@RequiredArgsConstructor
public class ClientOrderController {
    private final ClientOrderService clientOrderService;
    @GetMapping
    public ResponseEntity<ListResponse<ClientSimpleOrderResponse>> getAllOrdersByUsername(
            Authentication authentication,
            @RequestParam(name = "page", defaultValue = AppConstants.DEFAULT_PAGE_NUMBER) int page,
            @RequestParam(name = "size", defaultValue = AppConstants.DEFAULT_PAGE_SIZE) int size,
            @RequestParam(name = "sort", defaultValue = AppConstants.DEFAULT_SORT) String sort,
            @RequestParam(name = "filter", required = false) @Nullable String filter) {
        String username = authentication.getName();
        return ResponseEntity.status(HttpStatus.OK).body(clientOrderService.findAllByUsername(username, page, size, sort, filter));
    }

    @GetMapping("/{code}")
    public ResponseEntity<ClientOrderResponse> getOrder(@PathVariable String code) {
        return ResponseEntity.status(HttpStatus.OK).body(clientOrderService.findByCode(code));
    }

    @PostMapping
    public ResponseEntity<ClientConfirmedOrderResponse> createOrder(@RequestBody ClientSimpleOrderRequest request) {
        return ResponseEntity.ok(clientOrderService.createOrder(request));
    }

    @PostMapping("/paypal/capture/{paypalOrderId}")
    public ResponseEntity<Void> captureOrder(@PathVariable String paypalOrderId) {
        clientOrderService.captureOrder(paypalOrderId);
        return ResponseEntity.ok().build();
    }

    @PutMapping("/cancel/{code}")
    public ResponseEntity<Void> cancelOrder(@PathVariable String code) {
        clientOrderService.cancelOrder(code);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/shipping-order/fee")
    public ResponseEntity<GhnShippingFeeResponse> getShippingFee(Authentication authentication) {
        String username = authentication.getName();
        return ResponseEntity.ok().body(clientOrderService.getShippingFee(username));
    }
}
