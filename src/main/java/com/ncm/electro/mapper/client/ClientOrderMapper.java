package com.ncm.electro.mapper.client;
import com.ncm.electro.dto.client.ClientOrderRequest;
import com.ncm.electro.dto.client.ClientOrderResponse;
import com.ncm.electro.dto.client.ClientOrderVariantResponse;
import com.ncm.electro.dto.client.ClientSimpleOrderResponse;
import com.ncm.electro.entity.general.Image;
import com.ncm.electro.entity.order.Order;
import com.ncm.electro.entity.product.Product;
import com.ncm.electro.entity.review.Review;
import com.ncm.electro.mapper.GenericMapper;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.ReportingPolicy;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public abstract class ClientOrderMapper implements GenericMapper<Order, ClientOrderRequest, ClientOrderResponse> {
    public abstract ClientSimpleOrderResponse entityToSimpleResponse(Order order);

    @Mapping(target = "thumbnail", expression = "java(mapThumbnail(product))")
    @Mapping(target = "reviewed", expression = "java(mapIsReviewed(product))")
    protected abstract ClientOrderVariantResponse.ClientVariantResponse.ClientProductResponse entityToResponse(Product product);

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

    // TODO: chỉnh sửa lại sau khi làm auth
    protected boolean mapIsReviewed(Product product) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String username = authentication.getName();
        return product.getReviews().stream()
                .map(Review::getUser)
                .anyMatch(user -> user.getUsername().equals(username));
    }


}
