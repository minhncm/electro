package com.ncm.electro.controller;

import com.ncm.electro.constant.SearchFields;
import com.ncm.electro.dto.address.*;
import com.ncm.electro.entity.address.District;
import com.ncm.electro.entity.address.Province;
import com.ncm.electro.entity.address.Ward;
import com.ncm.electro.mapper.address.DistrictMapper;
import com.ncm.electro.mapper.address.ProvinceMapper;
import com.ncm.electro.mapper.address.WardMapper;
import com.ncm.electro.repository.address.DistrictRepository;
import com.ncm.electro.repository.address.ProvinceRepository;
import com.ncm.electro.repository.address.WardRepository;
import com.ncm.electro.service.CrudService;
import com.ncm.electro.service.GenericService;
import jakarta.annotation.PostConstruct;
import lombok.AllArgsConstructor;
import org.springframework.context.ApplicationContext;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.mvc.method.RequestMappingInfo;
import org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerMapping;
import org.springframework.web.util.pattern.PathPatternParser;
import tools.jackson.databind.JsonNode;

import java.util.List;

@Component
@AllArgsConstructor
public class GenericMappingRegister {

    private ApplicationContext context;
    private RequestMappingHandlerMapping handlerMapping;

    //controller
    private GenericController<ProvinceRequest, ProvinceResponse> provinceController;
    private GenericController<DistrictRequest, DistrictResponse> districtController;
    private GenericController<WardRequest, WardResponse> wardController;

    //service
    private GenericService<Province, ProvinceRequest, ProvinceResponse> provinceService;
    private GenericService<District, DistrictRequest, DistrictResponse> districtService;
    private GenericService<Ward, WardRequest, WardResponse> wardService;

    @PostConstruct
    public void registerControllers() throws NoSuchMethodException {
        register("provinces", provinceController, provinceService.init(
                context.getBean(ProvinceRepository.class),
                context.getBean(ProvinceMapper.class),
                SearchFields.PROVINCE,
                Province.class.getSimpleName()), ProvinceRequest.class);

        register("districts", districtController, districtService.init(
                context.getBean(DistrictRepository.class),
                context.getBean(DistrictMapper.class),
                SearchFields.DISTRICT,
                District.class.getSimpleName()
        ), DistrictRequest.class);

        register("wards", wardController, wardService.init(
                context.getBean(WardRepository.class),
                context.getBean(WardMapper.class),
                SearchFields.WARD,
                Ward.class.getSimpleName()
        ), WardRequest.class);
    }

    private <I, O> void register(String resource,
                          GenericController<I, O> controller,
                          CrudService<Long, I, O> service,
                          Class<I> requestType)
            throws NoSuchMethodException {
        RequestMappingInfo.BuilderConfiguration options = new RequestMappingInfo.BuilderConfiguration();
        options.setPatternParser(new PathPatternParser());

        controller.setCrudService(service);
        controller.setRequestType(requestType);

        handlerMapping.registerMapping(
                RequestMappingInfo.paths("/api/" + resource)
                        .methods(RequestMethod.GET)
                        .produces(MediaType.APPLICATION_JSON_VALUE)
                        .options(options)
                        .build(),
                controller,
                controller.getClass().getMethod("getAllResources",
                        int.class, int.class, String.class, String.class, String.class, boolean.class)
        );

        handlerMapping.registerMapping(
                RequestMappingInfo.paths("/api/" + resource + "/{id}")
                        .methods(RequestMethod.GET)
                        .produces(MediaType.APPLICATION_JSON_VALUE)
                        .options(options)
                        .build(),
                controller,
                controller.getClass().getMethod("getResource", Long.class)
        );

        handlerMapping.registerMapping(
                RequestMappingInfo.paths("/api/" + resource)
                        .methods(RequestMethod.POST)
                        .consumes(MediaType.APPLICATION_JSON_VALUE)
                        .produces(MediaType.APPLICATION_JSON_VALUE)
                        .options(options)
                        .build(),
                controller,
                controller.getClass().getMethod("createResource", JsonNode.class)
        );

        handlerMapping.registerMapping(
                RequestMappingInfo.paths("/api/" + resource + "/{id}")
                        .methods(RequestMethod.PUT)
                        .consumes(MediaType.APPLICATION_JSON_VALUE)
                        .produces(MediaType.APPLICATION_JSON_VALUE)
                        .options(options)
                        .build(),
                controller,
                controller.getClass().getMethod("updateResource", Long.class, JsonNode.class)
        );

        handlerMapping.registerMapping(
                RequestMappingInfo.paths("/api/" + resource + "/{id}")
                        .methods(RequestMethod.DELETE)
                        .options(options)
                        .build(),
                controller,
                controller.getClass().getMethod("deleteResource", Long.class)
        );

        handlerMapping.registerMapping(
                RequestMappingInfo.paths("/api/" + resource)
                        .methods(RequestMethod.DELETE)
                        .consumes(MediaType.APPLICATION_JSON_VALUE)
                        .options(options)
                        .build(),
                controller,
                controller.getClass().getMethod("deleteResource", List.class)
        );
    }
}
