package com.ncm.electro.mapper.genaral;

import com.ncm.electro.dto.genaral.ImageRequest;
import com.ncm.electro.dto.genaral.ImageResponse;
import com.ncm.electro.entity.general.Image;
import com.ncm.electro.mapper.GenericMapper;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface ImageMapper extends GenericMapper<Image, ImageRequest, ImageResponse> {
}
