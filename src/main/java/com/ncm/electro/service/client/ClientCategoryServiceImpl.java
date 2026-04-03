package com.ncm.electro.service.client;

import com.ncm.electro.dto.CollectionWrapper;
import com.ncm.electro.dto.client.ClientCategoryResponse;
import com.ncm.electro.dto.client.ClientFilterResponse;
import com.ncm.electro.entity.product.Brand;
import com.ncm.electro.entity.product.Category;
import com.ncm.electro.mapper.client.ClientBrandMapper;
import com.ncm.electro.mapper.client.ClientCategoryMapper;
import com.ncm.electro.repository.product.BrandRepository;
import com.ncm.electro.repository.product.CategoryRepository;
import com.ncm.electro.repository.product.VariantRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ClientCategoryServiceImpl implements ClientCategoryService {
    public final CategoryRepository categoryRepository;
    public final ClientCategoryMapper clientCategoryMapper;
    public final BrandRepository brandRepository;
    public final VariantRepository variantRepository;
    public final ClientBrandMapper clientBrandMapper;

    @Override
    public CollectionWrapper<ClientCategoryResponse> findAll() {
        List<Category> categories = categoryRepository.findByParentCategoryIsNull();
        List<ClientCategoryResponse> clientCategoryResponses = clientCategoryMapper.entityToResponse(categories, 3);
        return CollectionWrapper.of(clientCategoryResponses);
    }

    @Override
    public ClientCategoryResponse findBySlug(String slug) {
        Category category = categoryRepository.findBySlug(slug);
        return clientCategoryMapper.entityToResponse(category, true);
    }

    @Override
    public ClientFilterResponse findFilterBySlug(String slug) {
        ClientFilterResponse clientFilterResponse = new ClientFilterResponse();

        List<Brand> brands = brandRepository.findByCategorySlug(slug);
        clientFilterResponse.setBrands(
                brands.stream().map(clientBrandMapper::entityToResponse).toList()
        );

        ClientFilterResponse.PriceRange priceRange = variantRepository.findPriceRangeByCategorySlug(slug);
        clientFilterResponse.setPriceRange(priceRange);
        return clientFilterResponse;
    }
}
