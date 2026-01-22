package com.ncm.electro.mapper.product;

import com.ncm.electro.dto.product.TagRequest;
import com.ncm.electro.dto.product.TagResponse;
import com.ncm.electro.entity.product.Tag;
import com.ncm.electro.mapper.GenericMapper;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface TagMapper extends GenericMapper<Tag, TagRequest, TagResponse> {
}
