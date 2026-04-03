package com.ncm.electro.controller.client;

import com.ncm.electro.dto.CollectionWrapper;
import com.ncm.electro.dto.client.ClientCategoryResponse;
import com.ncm.electro.dto.client.ClientFilterResponse;
import com.ncm.electro.service.client.ClientCategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/client-api/categories")
@RequiredArgsConstructor
public class ClientCategoryController {
    private final ClientCategoryService clientCategoryService;
    @GetMapping()
    public ResponseEntity<CollectionWrapper<ClientCategoryResponse>> getAllCategories(){
        System.out.println("\n\n\n\n 111 \n\n\n\n");
        return ResponseEntity.status(HttpStatus.OK).body(clientCategoryService.findAll());
    }

    @GetMapping("/{slug}")
    public ResponseEntity<ClientCategoryResponse> getCategoryBySlug(@PathVariable String slug) {
        return ResponseEntity.status(HttpStatus.OK).body(clientCategoryService.findBySlug(slug));
    }

    @GetMapping("/{slug}/filters")
    public ResponseEntity<ClientFilterResponse> getBrandsByCategorySlug(@PathVariable String slug) {
        return ResponseEntity.status(HttpStatus.OK).body(clientCategoryService.findFilterBySlug(slug));
    }
}
