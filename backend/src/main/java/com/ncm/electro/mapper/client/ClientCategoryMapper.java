package com.ncm.electro.mapper.client;

import com.ncm.electro.dto.client.ClientCategoryResponse;
import com.ncm.electro.entity.product.Category;
import org.springframework.stereotype.Component;

import java.util.Collections;
import java.util.List;
import java.util.stream.Stream;

@Component
public class ClientCategoryMapper {
    public List<ClientCategoryResponse> entityToResponse(List<Category> categories, int maxLevel){
        if(maxLevel == 0)
            return Collections.emptyList();

        return categories.stream()
                .flatMap(category -> Stream.of(new ClientCategoryResponse()
                        .setName(category.getName())
                        .setSlug(category.getSlug())
                        .setChildren(entityToResponse(category.getCategories(), maxLevel - 1))))
                .toList();
    }

    public ClientCategoryResponse entityToResponse(Category category, boolean isParent) {
        if(category == null)
            return null;

        ClientCategoryResponse categoryResponse = new ClientCategoryResponse()
                .setName(category.getName())
                .setSlug(category.getSlug());

        if(!isParent) {
            categoryResponse.setChildren(entityToResponse(category.getCategories(), 1));
        }

        if(category.getParentCategory() == null) {
            return categoryResponse;
        }
        return categoryResponse.setParent(entityToResponse(category.getParentCategory(), true));
    }

}
