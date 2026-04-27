package com.ncm.electro.controller.client;

import com.ncm.electro.dto.client.ClientCartRequest;
import com.ncm.electro.dto.client.ClientCartResponse;
import com.ncm.electro.dto.client.ClientCartVariantKeyRequest;
import com.ncm.electro.service.client.ClientCartService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/client-api/carts")
@RequiredArgsConstructor
public class ClientCartController {
    private final ClientCartService clientCartService;

    @GetMapping
    public ResponseEntity<ClientCartResponse> getCart(Authentication authentication) {
        String username = authentication.getName();
        return ResponseEntity.status(HttpStatus.OK).body(clientCartService.findByUsername(username));
    }

    @PostMapping
    public ResponseEntity<ClientCartResponse> addCartItem(@RequestBody ClientCartRequest request) {
        return ResponseEntity.status(HttpStatus.OK).body(clientCartService.addCartItem(request));
    }

    @PutMapping
    public ResponseEntity<ClientCartResponse> updateCartItem(@RequestBody ClientCartRequest request) {
        return ResponseEntity.status(HttpStatus.OK).body(clientCartService.updateCartItem(request));
    }

    @DeleteMapping
    public ResponseEntity<Void> deleteCartItems(@RequestBody List<ClientCartVariantKeyRequest> idRequests) {
        clientCartService.deleteCartItems(idRequests);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }
}
