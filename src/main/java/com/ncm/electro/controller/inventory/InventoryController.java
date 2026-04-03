package com.ncm.electro.controller.inventory;

import com.ncm.electro.constant.AppConstants;
import com.ncm.electro.dto.ListResponse;
import com.ncm.electro.dto.inventory.ProductInventoryResponse;
import com.ncm.electro.service.inventory.ProductInventoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class InventoryController {
    private final ProductInventoryService productInventoryService;
    @GetMapping("product-inventories")
    public ResponseEntity<ListResponse<ProductInventoryResponse>> getProductInventories(
            @RequestParam(name = "page", defaultValue = AppConstants.DEFAULT_PAGE_NUMBER) int page,
            @RequestParam(name = "size", defaultValue = AppConstants.DEFAULT_PAGE_SIZE) int size) {
        return ResponseEntity.status(HttpStatus.OK).body(productInventoryService.findAll(page, size));
    }
}
