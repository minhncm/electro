package com.ncm.electro.mapper.client;

import com.ncm.electro.dto.client.ClientCartRequest;
import com.ncm.electro.dto.client.ClientCartResponse;
import com.ncm.electro.dto.client.ClientCartVariantResponse;
import com.ncm.electro.dto.client.ClientPromotionResponse;
import com.ncm.electro.entity.cart.Cart;
import com.ncm.electro.entity.general.Image;
import com.ncm.electro.entity.product.Product;
import com.ncm.electro.entity.product.Variant;
import com.ncm.electro.entity.promotion.Promotion;
import com.ncm.electro.utils.InventoryUtils;
import com.ncm.electro.utils.MapperUtils;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.ReportingPolicy;
import org.springframework.beans.factory.annotation.Autowired;

import java.time.Instant;
import java.util.List;
import java.util.Set;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE, uses = {ClientCartVariantMapper.class})
public abstract class ClientCartMapper {
    @Autowired
    protected ClientPromotionMapper clientPromotionMapper;
    public abstract ClientCartResponse entityToResponse(Cart cart);

    @Mapping(target = "inventory", expression = "java(mapInventory(variant))")
    protected abstract ClientCartVariantResponse.ClientVariantResponse entityToResponse(Variant variant);

    @Mapping(target = "thumbnail", expression = "java(mapThumbnail(product))")
    @Mapping(target = "promotions", expression = "java(entityToResponse(product.getPromotions()))")
    protected abstract ClientCartVariantResponse.ClientVariantResponse.ClientProductResponse entityToResponse(Product product);

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

    @Mapping(source = "userId", target = "user.id")
    @Mapping(target = "cartVariants", ignore = true)
    public abstract Cart requestToEntity(ClientCartRequest request);

    public Cart partialUpdate(Cart entity, ClientCartRequest request) {

        return null;
    }

}
