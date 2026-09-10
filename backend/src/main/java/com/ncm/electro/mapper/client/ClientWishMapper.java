package com.ncm.electro.mapper.client;

import com.ncm.electro.dto.client.ClientWishRequest;
import com.ncm.electro.dto.client.ClientWishResponse;
import com.ncm.electro.entity.client.Wish;
import com.ncm.electro.entity.general.Image;
import com.ncm.electro.entity.product.Product;
import com.ncm.electro.mapper.GenericMapper;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public abstract class ClientWishMapper implements GenericMapper<Wish, ClientWishRequest, ClientWishResponse> {

    @Mapping(target = "thumbnail", expression = "java(mapThumbnail(product))")
    protected abstract ClientWishResponse.ClientProductResponse productToClientProductResponse(Product product);

    protected String mapThumbnail(Product product) {
        return product.getImages().stream()
                .filter(Image::getIsThumbnail)
                .findAny()
                .map(Image::getPath)
                .orElse(null);
    }

    @Mapping(source = "userId", target = "user.id")
    @Mapping(source = "productId", target = "product.id")
    public abstract Wish requestToEntity(ClientWishRequest request);
}
