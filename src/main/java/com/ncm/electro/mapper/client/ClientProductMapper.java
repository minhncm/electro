package com.ncm.electro.mapper.client;

import com.ncm.electro.dto.client.ClientBrandResponse;
import com.ncm.electro.dto.client.ClientListedProductResponse;
import com.ncm.electro.dto.client.ClientProductResponse;
import com.ncm.electro.dto.client.ClientPromotionResponse;
import com.ncm.electro.entity.general.Image;
import com.ncm.electro.entity.product.Product;
import com.ncm.electro.entity.product.Variant;
import com.ncm.electro.mapper.genaral.ImageMapper;
import com.ncm.electro.utils.InventoryUtils;
import lombok.RequiredArgsConstructor;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;
import org.springframework.stereotype.Component;

import java.util.Collections;
import java.util.List;
import java.util.Map;

//TODO refactor
@Component
@RequiredArgsConstructor
public class ClientProductMapper {
    private final ImageMapper imageMapper;
    private final ClientCategoryMapper clientCategoryMapper;
    public ClientListedProductResponse entityToListedResponse
            (Product product, Map<String, Integer> inventoryIndices, ClientPromotionResponse promotionResponse) {
        ClientListedProductResponse clientListedProductResponse = ClientListedProductResponse.builder()
                .id(product.getId())
                .name(product.getName())
                .slug(product.getSlug())
                .thumbnail(product.getImages().stream()
                        .filter(Image::getIsThumbnail)
                        .findAny()
                        .map(Image::getPath)
                        .orElse(null))
                .build();

        List<Double> prices = product.getVariants().stream()
                .map(Variant::getPrice).distinct().sorted().toList();

        clientListedProductResponse.setPriceRange(
                prices.isEmpty()
                        ? Collections.emptyList()
                        : prices.size() == 1
                        ? List.of(prices.get(0))
                        : List.of(prices.get(0), prices.get(prices.size() - 1)));

        clientListedProductResponse.setVariants(product.getVariants().stream()
                .map(variant -> ClientListedProductResponse.ClientListedVariantResponse.builder()
                        .id(variant.getId())
                        .price(variant.getPrice())
                        .properties(variant.getProperties())
                        .build())
                .toList());
        clientListedProductResponse.setSaleable(inventoryIndices.get("available") > 0);

        clientListedProductResponse.setPromotion(promotionResponse);
        return clientListedProductResponse;
    }

    public ClientProductResponse entityToResponse(Product product) {
        return  ClientProductResponse.builder()
                .id(product.getId())
                .name(product.getName())
                .slug(product.getSlug())
                .shortDescription(product.getShortDescription())
                .description(product.getDescription())
                .images(imageMapper.entityToResponse(product.getImages()))
                .category(clientCategoryMapper.entityToResponse(product.getCategory(), false))
                .brand(product.getBrand() == null ? null : new ClientBrandResponse()
                        .setId(product.getBrand().getId())
                        .setName(product.getBrand().getName()))
                .specifications(product.getSpecifications())
                .build();
    }
}
