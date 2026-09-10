package com.ncm.electro.dto.product;

import com.ncm.electro.dto.BaseResponse;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = true)
public class ParentCategoryResponse extends BaseResponse {
    private String name;
    private String slug;
    private String description;
    private String thumbnail;
    private Integer status;
}
