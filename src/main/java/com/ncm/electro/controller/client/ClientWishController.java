package com.ncm.electro.controller.client;

import com.ncm.electro.constant.AppConstants;
import com.ncm.electro.dto.ListResponse;
import com.ncm.electro.dto.client.ClientWishRequest;
import com.ncm.electro.dto.client.ClientWishResponse;
import com.ncm.electro.service.client.ClientWishService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.lang.Nullable;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/client-api/wishes")
@RequiredArgsConstructor
public class ClientWishController {
    private final ClientWishService clientWishService;
    @GetMapping
    public ResponseEntity<ListResponse<ClientWishResponse>> getAllWishes(
            Authentication authentication,
            @RequestParam(name = "page", defaultValue = AppConstants.DEFAULT_PAGE_NUMBER) int page,
            @RequestParam(name = "size", defaultValue = AppConstants.DEFAULT_PAGE_SIZE) int size,
            @RequestParam(name = "sort", defaultValue = AppConstants.DEFAULT_SORT) String sort,
            @RequestParam(name = "filter") @Nullable String filter) {
        String username = authentication.getName();
        return ResponseEntity.status(HttpStatus.OK).body(clientWishService.findAllByUsername(username, page, size, sort, filter));
    }

    @PostMapping
    public ResponseEntity<ClientWishResponse> addWishItem(@RequestBody ClientWishRequest request) {
        return ResponseEntity.status(HttpStatus.OK).body(clientWishService.addWishItem(request));
    }

    @DeleteMapping
    public ResponseEntity<Void> deleteWishes(@RequestBody List<Long> ids) {
        clientWishService.delete(ids);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }
}
