package com.ncm.electro.controller.client;

import com.ncm.electro.constant.AppConstants;
import com.ncm.electro.dto.ListResponse;
import com.ncm.electro.dto.client.ClientOrderResponse;
import com.ncm.electro.dto.client.ClientSimpleOrderResponse;
import com.ncm.electro.service.client.ClientOrderService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.lang.Nullable;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/client-api/orders")
@RequiredArgsConstructor
public class ClientOrderController {
    private final ClientOrderService clientOrderService;
    @GetMapping
    public ResponseEntity<ListResponse<ClientSimpleOrderResponse>> getAllOrders(
            @RequestParam(name = "page", defaultValue = AppConstants.DEFAULT_PAGE_NUMBER) int page,
            @RequestParam(name = "size", defaultValue = AppConstants.DEFAULT_PAGE_SIZE) int size,
            @RequestParam(name = "sort", defaultValue = AppConstants.DEFAULT_SORT) String sort,
            @RequestParam(name = "filter") @Nullable String filter) {
        return ResponseEntity.status(HttpStatus.OK).body(clientOrderService.findAll(page, size, sort, filter));
    }

    @GetMapping("/{code}")
    public ResponseEntity<ClientOrderResponse> getOrder(@PathVariable String code) {
        return ResponseEntity.status(HttpStatus.OK).body(clientOrderService.findByCode(code));
    }


}
