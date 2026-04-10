package com.ncm.electro.service.client;

import com.ncm.electro.constant.FieldName;
import com.ncm.electro.dto.client.ClientCartRequest;
import com.ncm.electro.dto.client.ClientCartResponse;
import com.ncm.electro.dto.client.ClientCartVariantKeyRequest;
import com.ncm.electro.entity.cart.Cart;
import com.ncm.electro.entity.cart.CartVariant;
import com.ncm.electro.entity.cart.CartVariantKey;
import com.ncm.electro.exception.InsufficientInventoryException;
import com.ncm.electro.exception.ResourceNotFoundException;
import com.ncm.electro.mapper.client.ClientCartMapper;
import com.ncm.electro.mapper.client.ClientCartVariantMapper;
import com.ncm.electro.repository.cart.CartRepository;
import com.ncm.electro.repository.cart.CartVariantRepository;
import com.ncm.electro.repository.inventory.DocketVariantRepository;
import com.ncm.electro.utils.InventoryUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ClientCartServiceImpl implements ClientCartService{
    private final CartRepository cartRepository;
    private final ClientCartMapper clientCartMapper;
    private final ClientCartVariantMapper clientCartVariantMapper;
    private final CartVariantRepository cartVariantRepository;
    private final DocketVariantRepository docketVariantRepository;
    @Override
    public ClientCartResponse findByUsername(String username) {
        return cartRepository.findByUsername(username)
                .map(clientCartMapper::entityToResponse)
                .orElse(new ClientCartResponse());
    }

    @Override
    @Transactional
    public ClientCartResponse addCartItem(ClientCartRequest request) {
        Cart cart = cartRepository.findByUserId(request.getUserId())
                .orElseGet(() -> cartRepository.save(clientCartMapper.requestToEntity(request)));

        Set<CartVariant> newCartVariants = clientCartVariantMapper.requestToEntity(cart.getId(), request.getCartItems());

        Map<Long, CartVariant> existingMap = cart.getCartVariants().stream().collect(Collectors.toMap(
                cartVariant -> cartVariant.getVariant().getId(),
                cartVariant -> cartVariant
        ));

        for (CartVariant newCartVariant : newCartVariants) {
            Long variantId = newCartVariant.getVariant().getId();
            if(existingMap.containsKey(variantId)) {
                CartVariant existing = existingMap.get(variantId);
                existing.setQuantity(existing.getQuantity() + newCartVariant.getQuantity());
                validateInventory(existing);
            } else {
                validateInventory(newCartVariant);
                newCartVariant.setCart(cart);
                cart.getCartVariants().add(newCartVariant);
            }
        }

        cartRepository.save(cart);

        return clientCartMapper.entityToResponse(cart);
    }
    @Override
    public ClientCartResponse updateCartItem(ClientCartRequest request) {
        Cart cart = cartRepository.findByUserId(request.getUserId())
                .orElseThrow(() -> new ResourceNotFoundException(Cart.class.getSimpleName(), "user." + FieldName.ID, request.getUserId()));

        Set<CartVariant> updateCartVariants = clientCartVariantMapper.requestToEntity(cart.getId(), request.getCartItems());
        Map<Long, CartVariant> existingMap = cart.getCartVariants().stream().collect(Collectors.toMap(
                cartVariant -> cartVariant.getVariant().getId(),
                cartVariant -> cartVariant
        ));
        for (CartVariant updateCartVariant : updateCartVariants) {
            Long variantId = updateCartVariant.getVariant().getId();
            if(existingMap.containsKey(variantId)) {
                validateInventory(updateCartVariant);
                CartVariant existing = existingMap.get(variantId);
                existing.setQuantity(updateCartVariant.getQuantity());
            }
        }
        return clientCartMapper.entityToResponse(cart);
    }

    @Override
    public void deleteCartItems(List<ClientCartVariantKeyRequest> idRequests) {
        List<CartVariantKey> ids = idRequests.stream()
                .map(idRequest -> new CartVariantKey(idRequest.getCartId(), idRequest.getVariantId()))
                .toList();
        cartVariantRepository.deleteAllById(ids);
    }

    private void validateInventory(CartVariant cartVariant) {
        Integer inventory = InventoryUtils
                .calculateInventoryIndices(
                        docketVariantRepository.findByVariantId(cartVariant.getCartVariantKey().getVariantId()))
                .get("available");

        if(cartVariant.getQuantity() > inventory) {
            throw new InsufficientInventoryException("Variant quantity cannot greater than Variant inventory");
        }
    }
}
