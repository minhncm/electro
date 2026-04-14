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

    //TODO: doi param username sau khi lam auth
    @GetMapping
    public ResponseEntity<ListResponse<ClientReviewResponse>> getAllReviewsByUser(
            @RequestParam(name = "username") String username,
            @RequestParam(name = "page", defaultValue = AppConstants.DEFAULT_PAGE_NUMBER) int page,
            @RequestParam(name = "size", defaultValue = AppConstants.DEFAULT_PAGE_SIZE) int size,
            @RequestParam(name = "sort", defaultValue = AppConstants.DEFAULT_SORT) String sort,
            @RequestParam @Nullable String filter) {
        return ResponseEntity.status(HttpStatus.OK).body(clientReviewService.finaAllByUsername(username, page, size, sort, filter));
    }

    @PostMapping
    public ResponseEntity<ClientReviewResponse> createReview(@RequestBody ClientReviewRequest request) {
        return ResponseEntity.status(HttpStatus.OK).body(clientReviewService.save(request));
    }

    @DeleteMapping
    public ResponseEntity<Void> deleteReviews(@RequestBody List<Long> ids) {
        clientReviewService.deleteAllByIds(ids);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }

}
