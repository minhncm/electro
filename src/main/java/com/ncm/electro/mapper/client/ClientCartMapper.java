package com.ncm.electro.mapper.client;

import com.ncm.electro.dto.client.ClientCartRequest;
import com.ncm.electro.dto.client.ClientCartResponse;
import com.ncm.electro.dto.client.ClientCartVariantResponse;
import com.ncm.electro.dto.client.ClientPromotionResponse;
import com.ncm.electro.entity.cart.Cart;
import com.ncm.electro.entity.cart.CartVariant;
import com.ncm.electro.entity.general.Image;
import com.ncm.electro.entity.product.Product;
import com.ncm.electro.entity.product.Variant;
import com.ncm.electro.entity.promotion.Promotion;
import com.ncm.electro.mapper.GenericMapper;
import com.ncm.electro.utils.InventoryUtils;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.ReportingPolicy;
import org.springframework.beans.factory.annotation.Autowired;

import java.time.Instant;
import java.util.Comparator;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE, uses = {ClientCartVariantMapper.class})
public abstract class ClientCartMapper implements GenericMapper<Cart, ClientCartRequest, ClientCartResponse> {
    @Autowired
    protected ClientPromotionMapper clientPromotionMapper;

    @Mapping(target = "cartVariants", expression = "java(mapToSetClientCartVariantResponse(entity.getCartVariants()))")
    public abstract ClientCartResponse entityToResponse (Cart entity);

    @Mapping(target = "inventory", expression = "java(mapInventory(variant))")
    protected abstract ClientCartVariantResponse.ClientVariantResponse entityToResponse(Variant variant);

    @Mapping(target = "thumbnail", expression = "java(mapThumbnail(product))")
    @Mapping(target = "promotions", expression = "java(entityToResponse(product.getPromotions()))")
    protected abstract ClientCartVariantResponse.ClientVariantResponse.ClientProductResponse entityToResponse(Product product);

    @Mapping(source = "userId", target = "user.id")
    @Mapping(target = "cartVariants", ignore = true)
    public abstract Cart requestToEntity(ClientCartRequest request);

    protected Set<ClientCartVariantResponse> mapToSetClientCartVariantResponse(Set<CartVariant> cartVariants) {
        return cartVariants.stream()
                .sorted(Comparator.comparing(CartVariant::getCreatedAt))
                .map(this::cartVariantToClientCartVariantResponse)
                .collect(Collectors.toSet());
    }

    protected abstract ClientCartVariantResponse cartVariantToClientCartVariantResponse(CartVariant cartVariant);

    protected String mapThumbnail(Product product) {
        if(product.getImages() == null || product.getImages().isEmpty()) {
            return null;
        }
        return product.getImages().stream()
                .filter(Image::getIsThumbnail)
                .findAny()
                .map(Image::getPath)
                .orElse(null);
    }

    protected Integer mapInventory(Variant variant) {
        return InventoryUtils.calculateInventoryIndices(variant.getDocketVariants()).get("available");
    }

    protected List<ClientPromotionResponse> entityToResponse(Set<Promotion> promotions) {
        if(promotions == null || promotions.isEmpty()) return null;

        Instant now = Instant.now();
        return promotions.stream()
                .filter(promotion -> promotion.getStatus() == 1)
                .filter(promotion -> now.isAfter(promotion.getStartDate()) && now.isBefore(promotion.getEndDate()))
                .map(clientPromotionMapper::entityToResponse)
                .toList();
    }

}
