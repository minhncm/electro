package com.ncm.electro.controller.client;


import com.ncm.electro.constant.AppConstants;
import com.ncm.electro.dto.ListResponse;
import com.ncm.electro.dto.client.ClientListedProductResponse;
import com.ncm.electro.dto.client.ClientProductResponse;
import com.ncm.electro.service.client.ClientProductService;
import jakarta.annotation.Nullable;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/client-api/products")
@RequiredArgsConstructor
public class ClientProductController {
    private final ClientProductService clientProductService;
    @GetMapping
    public ResponseEntity<ListResponse<ClientListedProductResponse>> getAllProducts(
            @RequestParam(name = "page", defaultValue = AppConstants.DEFAULT_PAGE_NUMBER) int page,
            @RequestParam(name = "size", defaultValue = AppConstants.DEFAULT_PAGE_SIZE) int size,
            @RequestParam(name = "filter", required = false) @Nullable String filter,
            @RequestParam(name = "sort", required = false) @Nullable String sort,
            @RequestParam(name = "search", required = false) @Nullable String search,
            @RequestParam(name = "saleable", required = false) boolean saleable
    ) {
        return ResponseEntity.status(HttpStatus.OK).body(clientProductService.findAll(page, size, filter, sort, search, saleable));
    }

    @GetMapping("/{slug}")
    public ResponseEntity<ClientProductResponse> getProduct(@PathVariable String slug) {
        return ResponseEntity.status(HttpStatus.OK).body(clientProductService.findBySlug(slug));
    }
}
