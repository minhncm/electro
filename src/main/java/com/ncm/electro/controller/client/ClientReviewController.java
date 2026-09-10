package com.ncm.electro.controller.client;

import com.ncm.electro.constant.AppConstants;
import com.ncm.electro.dto.ListResponse;
import com.ncm.electro.dto.client.ClientReviewByProductResponse;
import com.ncm.electro.dto.client.ClientReviewRequest;
import com.ncm.electro.dto.client.ClientReviewResponse;
import com.ncm.electro.service.client.ClientReviewService;
import jakarta.annotation.Nullable;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/client-api/reviews")
@RequiredArgsConstructor
public class ClientReviewController {
    private final ClientReviewService clientReviewService;
    @GetMapping("/products/{slug}")
    public ResponseEntity<ListResponse<ClientReviewByProductResponse>> getAllReviewsByProduct(
            @PathVariable String slug,
            @RequestParam(name = "page", defaultValue = AppConstants.DEFAULT_PAGE_NUMBER) int page,
            @RequestParam(name = "size", defaultValue = AppConstants.DEFAULT_PAGE_SIZE) int size,
            @RequestParam(name = "sort", defaultValue = AppConstants.DEFAULT_SORT) String sort,
            @RequestParam @Nullable String filter) {
        return ResponseEntity.status(HttpStatus.OK).body(clientReviewService.findAllByProductSlug(slug, page, size, sort, filter));
    }

    @GetMapping
    public ResponseEntity<ListResponse<ClientReviewResponse>> getAllReviewsByUser(
            Authentication authentication,
            @RequestParam(name = "page", defaultValue = AppConstants.DEFAULT_PAGE_NUMBER) int page,
            @RequestParam(name = "size", defaultValue = AppConstants.DEFAULT_PAGE_SIZE) int size,
            @RequestParam(name = "sort", defaultValue = AppConstants.DEFAULT_SORT) String sort,
            @RequestParam @Nullable String filter) {
        String username = authentication.getName();
        return ResponseEntity.status(HttpStatus.OK).body(clientReviewService.finaAllByUsername(username, page, size, sort, filter));
    }

    @PostMapping
    public ResponseEntity<ClientReviewResponse> createReview(@RequestBody ClientReviewRequest request) {
        return ResponseEntity.status(HttpStatus.CREATED).body(clientReviewService.createReview(request));
    }

    @PutMapping("/{id}")
    public ResponseEntity<ClientReviewResponse> updateReview(@PathVariable Long id, @RequestBody ClientReviewRequest request) {
        return ResponseEntity.status(HttpStatus.OK).body(clientReviewService.updateReview(id, request));
    }

    @DeleteMapping
    public ResponseEntity<Void> deleteReviews(@RequestBody List<Long> ids) {
        clientReviewService.deleteAllByIds(ids);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }

}
