package com.ncm.electro.service.client;

import com.ncm.electro.constant.FieldName;
import com.ncm.electro.dto.ListResponse;
import com.ncm.electro.dto.client.ClientListedProductResponse;
import com.ncm.electro.dto.client.ClientProductResponse;
import com.ncm.electro.entity.BaseEntity;
import com.ncm.electro.entity.inventory.DocketVariant;
import com.ncm.electro.entity.product.Product;
import com.ncm.electro.entity.promotion.Promotion;
import com.ncm.electro.exception.ResourceNotFoundException;
import com.ncm.electro.mapper.client.ClientProductMapper;
import com.ncm.electro.repository.inventory.DocketVariantRepository;
import com.ncm.electro.repository.product.ProductRepository;
import com.ncm.electro.repository.promotion.PromotionRepository;
import com.ncm.electro.repository.review.ReviewRepository;
import com.ncm.electro.specification.ProductSpecification;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;


@Service
@RequiredArgsConstructor
public class ClientProductServiceImpl implements ClientProductService{
    private final ProductRepository productRepository;
    private final ClientProductMapper clientProductMapper;
    private final DocketVariantRepository docketVariantRepository;
    private final PromotionRepository promotionRepository;
    private final ReviewRepository reviewRepository;

    @Override
    public ListResponse<ClientListedProductResponse> findAll(int page, int size, String filter, String sort, String search, boolean saleable) {
        Page<Product> products = productRepository.findAll(
                ProductSpecification.filter(filter)
                .and(ProductSpecification.search(search))
                .and(ProductSpecification.sort(sort))
                .and(ProductSpecification.saleable(saleable)),
                PageRequest.of(page - 1, size));

        List<ClientListedProductResponse> clientListedProductResponses = getClientListedProductResponses(products);
        return ListResponse.of(clientListedProductResponses, products);
    }

    @Override
    public ClientProductResponse findBySlug(String slug) {
        Product product = productRepository.findBySlug(slug)
                .orElseThrow(() -> new ResourceNotFoundException(Product.class.getSimpleName(), FieldName.SLUG, slug));

        int averageRatingScore = reviewRepository.findAverageRatingScoreByProductId(product.getId());
        int countReviews = reviewRepository.countByProductId(product.getId());

        List<ClientListedProductResponse> relateProductResponses = getRelateProducts(product);
        List<DocketVariant> productTransactions = docketVariantRepository.findByProductId(product.getId());
        List<Promotion> promotions = promotionRepository.findActivePromotionByProductId(product.getId());
        return clientProductMapper.entityToResponse(product, productTransactions, averageRatingScore, countReviews, relateProductResponses, promotions);

    }

    private List<ClientListedProductResponse> getRelateProducts(Product product) {
        Page<Product> relateProducts = productRepository.findAll(
                ProductSpecification.filter(String.format("category.id==%s;id!=%s",
                                Optional.ofNullable(product.getCategory())
                                        .map(BaseEntity::getId)
                                        .map(Object::toString)
                                        .orElse("0"),
                                product.getId()))
                        .and(ProductSpecification.search(null))
                        .and(ProductSpecification.sort("random"))
                        .and(ProductSpecification.saleable(false)),
                PageRequest.of( 0, 4));

        return getClientListedProductResponses(relateProducts);
    }

    private List<ClientListedProductResponse> getClientListedProductResponses(Page<Product> products) {
        List<Long> productIds = products.stream().map(Product::getId).toList();
        List<DocketVariant> allTransactions = docketVariantRepository.findByProductId(productIds);
        List<Promotion> allPromotions = promotionRepository.findActivePromotionByProductId(productIds);
        List<ClientListedProductResponse> clientListedProductResponses = new ArrayList<>();
        for (Product product : products) {
            List<DocketVariant> productTransactions = allTransactions.stream()
                    .filter(dv -> dv.getVariant().getProduct().getId().equals(product.getId()))
                    .toList();

            List<Promotion> promotions = allPromotions.stream()
                    .filter(pr -> pr.getProducts().stream()
                            .anyMatch(p -> p.getId().equals(product.getId())))
                    .toList();
            ClientListedProductResponse clientListedProductResponse = clientProductMapper.entityToResponse(product, productTransactions, promotions);
            clientListedProductResponses.add(clientListedProductResponse);
        }
        return clientListedProductResponses;
    }
}

