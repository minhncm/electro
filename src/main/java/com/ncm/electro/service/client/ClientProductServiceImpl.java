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
import com.ncm.electro.mapper.client.ClientPromotionMapper;
import com.ncm.electro.repository.inventory.DocketVariantRepository;
import com.ncm.electro.repository.product.ProductRepository;
import com.ncm.electro.repository.promotion.PromotionRepository;
import com.ncm.electro.repository.review.ReviewRepository;
import com.ncm.electro.specification.ProductSpecification;
import com.ncm.electro.utils.InventoryUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;


@Service
@RequiredArgsConstructor
public class ClientProductServiceImpl implements ClientProductService{
    private final ProductRepository productRepository;
    private final ClientProductMapper clientProductMapper;
    private final DocketVariantRepository docketVariantRepository;
    private final PromotionRepository promotionRepository;
    private final ClientPromotionMapper clientPromotionMapper;
    private final ReviewRepository reviewRepository;

    @Override
    public ListResponse<ClientListedProductResponse> findAll(int page, int size, String filter, String sort, String search, boolean saleable) {
        Page<Product> products = productRepository.findAll(
                ProductSpecification.filter(filter)
                .and(ProductSpecification.search(search))
                .and(ProductSpecification.sort(sort))
                .and(ProductSpecification.saleable(saleable)),
                PageRequest.of(page - 1, size));

        List<ClientListedProductResponse> clientListedProductResponses = new ArrayList<>();
        for (Product product : products) {
            ClientListedProductResponse clientListedProductResponse = clientProductMapper.entityToListedResponse(product);

            List<DocketVariant> transactions = docketVariantRepository.findByProductId(product.getId());
            Map<String, Integer> inventoryIndices = InventoryUtils.calculateInventoryIndices(transactions);
            clientListedProductResponse.setSaleable(inventoryIndices.get("available") > 0);

            List<Promotion> promotions = promotionRepository.findActivePromotionByProductId(product.getId());
            clientListedProductResponse.setPromotion(
                    clientPromotionMapper.entityToResponse(!promotions.isEmpty() ? promotions.getFirst() : null));

            clientListedProductResponses.add(clientListedProductResponse);
        }
        return ListResponse.of(clientListedProductResponses, products);
    }

    @Override
    public ClientProductResponse findBySlug(String slug) {
        Product product = productRepository.findBySlug(slug)
                .orElseThrow(() -> new ResourceNotFoundException(Product.class.getSimpleName(), FieldName.SLUG, slug));

        int averageRatingScore = reviewRepository.findAverageRatingScoreByProductId(product.getId());
        int countReviews = reviewRepository.countByProductId(product.getId());

        List<ClientListedProductResponse> relateProductResponses = getRelateProducts(product);

        ClientProductResponse clientProductResponse = clientProductMapper.entityToResponse(product);
        clientProductResponse.setSaleable(InventoryUtils.
                calculateInventoryIndices(docketVariantRepository.findByProductId(product.getId()))
                .get("available") > 0);
        clientProductResponse.setSoldQuantity(InventoryUtils.
                calculateInventoryIndices(docketVariantRepository.findByProductId(product.getId()))
                .get("soldQuantity"));
        clientProductResponse.setVariants(product.getVariants().stream()
                .map(variant -> new ClientProductResponse.ClientVariantResponse()
                    .setId(variant.getId())
                    .setPrice(variant.getPrice())
                    .setProperties(variant.getProperties())
                    .setInventory(InventoryUtils
                            .calculateInventoryIndices(docketVariantRepository.findByVariantId(variant.getId()))
                            .get("available")))
                .collect(Collectors.toList()));

        clientProductResponse.setAverageRatingScore(averageRatingScore);
        clientProductResponse.setCountReviews(countReviews);
        clientProductResponse.setRelateProducts(relateProductResponses);

        List<Promotion> promotions = promotionRepository.findActivePromotionByProductId(product.getId());
        clientProductResponse.setPromotions(
                clientPromotionMapper.entityToResponse(!promotions.isEmpty() ? promotions.getFirst() : null));

        return clientProductResponse;
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

        List<ClientListedProductResponse> relateProductResponses = new ArrayList<>();
        for(Product relateProduct: relateProducts) {
            ClientListedProductResponse relateProductResponse = clientProductMapper.entityToListedResponse(relateProduct);

            relateProductResponse.setSaleable(InventoryUtils
                    .calculateInventoryIndices(docketVariantRepository.findByProductId(product.getId()))
                    .get("available") > 0);

            relateProductResponses.add(relateProductResponse);
        }
        return relateProductResponses;
    }
}

