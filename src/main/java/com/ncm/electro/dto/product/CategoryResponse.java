package com.ncm.electro.dto.product;

import com.ncm.electro.dto.BaseResponse;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.util.List;

@Data
@EqualsAndHashCode(callSuper = true)
public class CategoryResponse extends ParentCategoryResponse {
    private ParentCategoryResponse parentCategory;
    private List<CategoryResponse> categories;
}
