package com.ncm.electro.mapper.client;

import com.ncm.electro.dto.client.ClientCartVariantRequest;
import com.ncm.electro.dto.client.ClientCartVariantResponse;
import com.ncm.electro.entity.cart.CartVariant;
import com.ncm.electro.mapper.GenericMapper;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.ReportingPolicy;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public abstract class ClientCartVariantMapper implements GenericMapper<CartVariant, ClientCartVariantRequest, ClientCartVariantResponse> {
    @Mapping(source = "cartId", target = "cartVariantKey.cartId")
    @Mapping(source = "request.variantId", target = "cartVariantKey.variantId")
    @Mapping(source = "request.variantId", target = "variant.id")
    @Mapping(source = "cartId", target = "cart.id")
    public abstract CartVariant requestToEntity(Long cartId, ClientCartVariantRequest request);

    public Set<CartVariant> requestToEntity(Long cartId, List<ClientCartVariantRequest> requests) {
        return requests.stream().map(request -> requestToEntity(cartId, request))
                .collect(Collectors.toSet());
    }
}
