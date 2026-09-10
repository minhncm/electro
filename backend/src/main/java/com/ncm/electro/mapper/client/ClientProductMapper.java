package com.ncm.electro.mapper.client;

import com.ncm.electro.dto.client.ClientBrandResponse;
import com.ncm.electro.dto.client.ClientListedProductResponse;
import com.ncm.electro.dto.client.ClientProductResponse;
import com.ncm.electro.dto.client.ClientPromotionResponse;
import com.ncm.electro.entity.general.Image;
import com.ncm.electro.entity.inventory.DocketVariant;
import com.ncm.electro.entity.product.Product;
import com.ncm.electro.entity.product.Variant;
import com.ncm.electro.entity.promotion.Promotion;
import com.ncm.electro.mapper.genaral.ImageMapper;
import com.ncm.electro.utils.InventoryUtils;
import lombok.RequiredArgsConstructor;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.ReportingPolicy;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring",
        unmappedTargetPolicy = ReportingPolicy.IGNORE,
        uses = {ImageMapper.class, ClientCategoryMapper.class})
public abstract class ClientProductMapper {
    @Autowired
    protected ClientCategoryMapper clientCategoryMapper;
    @Autowired
    protected ClientPromotionMapper clientPromotionMapper;

    @Mapping(target = "id", source = "product.id")
    @Mapping(target = "name", source = "product.name")
    @Mapping(target = "slug", source = "product.slug")
    @Mapping(target = "thumbnail", expression = "java(mapThumbnail(product))")
    @Mapping(target = "priceRange", expression = "java(mapPrices(product))")
    @Mapping(target = "variants", expression = "java(mapVariants(product.getVariants()))")
    @Mapping(target = "saleable", expression = "java(mapSaleable(productTransactions))")
    @Mapping(target = "promotion", expression = "java(mapPromotion(promotions))")
    public abstract ClientListedProductResponse entityToResponse(
            Product product,
            List<DocketVariant> productTransactions,
            List<Promotion> promotions);

    @Mapping(target = "category", expression = "java(clientCategoryMapper.entityToResponse(product.getCategory(), false))")
    @Mapping(target = "saleable", expression = "java(mapSaleable(productTransactions))")
    @Mapping(target = "soldQuantity", expression = "java(mapSoldQuantity(productTransactions))")
    @Mapping(target = "variants", expression = "java(mapVariants(product.getVariants(), productTransactions))")
    @Mapping(target = "relateProducts", source = "relateProductResponses")
    @Mapping(target = "brand", expression = "java(mapBrand(product))")
    @Mapping(target = "promotion", expression = "java(mapPromotion(promotions))")
    public abstract ClientProductResponse entityToResponse(
            Product product,
            List<DocketVariant> productTransactions,
            int averageRatingScore,
            int countReviews,
            List<ClientListedProductResponse> relateProductResponses,
            List<Promotion> promotions);

    protected String mapThumbnail(Product product) {
        return product.getImages().stream()
                        .filter(Image::getIsThumbnail)
                        .findAny()
                        .map(Image::getPath)
                        .orElse(null);
    }

    protected List<Double> mapPrices(Product product) {
        List<Double> prices = product.getVariants().stream()
                .map(Variant::getPrice).distinct().sorted().toList();
        return prices.isEmpty()
                        ? Collections.emptyList()
                        : prices.size() == 1
                        ? List.of(prices.get(0))
                        : List.of(prices.get(0), prices.get(prices.size() - 1));
    }

    protected List<ClientListedProductResponse.ClientListedVariantResponse> mapVariants(List<Variant> variants) {
        return variants.stream()
                .map(variant -> ClientListedProductResponse.ClientListedVariantResponse.builder()
                        .id(variant.getId())
                        .price(variant.getPrice())
                        .properties(variant.getProperties())
                        .build())
                .toList();
    }

    protected List<ClientProductResponse.ClientVariantResponse> mapVariants(
            List<Variant> variants,
            List<DocketVariant> productTransactions) {
        return variants.stream()
                .map(variant -> new ClientProductResponse.ClientVariantResponse()
                    .setId(variant.getId())
                    .setPrice(variant.getPrice())
                    .setProperties(variant.getProperties())
                    .setInventory(InventoryUtils
                            .calculateInventoryIndices(
                                    productTransactions.stream()
                                            .filter(dv -> dv.getVariant().getId().equals(variant.getId()))
                                            .toList())
                            .get("available")))
                .collect(Collectors.toList());
    }

    protected boolean mapSaleable(List<DocketVariant> productTransactions) {
        return InventoryUtils.calculateInventoryIndices(productTransactions).get("available") > 0;
    }

    protected int mapSoldQuantity(List<DocketVariant> productTransactions) {
        return InventoryUtils.calculateInventoryIndices(productTransactions).get("soldQuantity");
    }

    protected ClientBrandResponse mapBrand(Product product) {
        return product.getBrand() == null ? null : new ClientBrandResponse()
                        .setId(product.getBrand().getId())
                        .setName(product.getBrand().getName());
    }

    protected ClientPromotionResponse mapPromotion(List<Promotion> promotions) {
        return clientPromotionMapper.entityToResponse(!promotions.isEmpty() ? promotions.getFirst() : null);
    }
}
