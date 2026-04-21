package com.ncm.electro.mapper.client;

import com.ncm.electro.dto.client.ClientWishRequest;
import com.ncm.electro.dto.client.ClientWishResponse;
import com.ncm.electro.entity.client.Wish;
import com.ncm.electro.mapper.GenericMapper;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface ClientWishMapper extends GenericMapper<Wish, ClientWishRequest, ClientWishResponse> {
    @Mapping(source = "userId", target = "user.id")
    @Mapping(source = "productId", target = "product.id")
    Wish requestToEntity(ClientWishRequest request);
}
