package com.ncm.electro.controller;

import com.ncm.electro.constant.AppConstants;
import com.ncm.electro.dto.ListResponse;
import com.ncm.electro.service.CrudService;
import jakarta.annotation.Nullable;
import lombok.Setter;
import org.springframework.context.annotation.Scope;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import tools.jackson.databind.JsonNode;

import java.util.List;

@Component
@Setter
@Scope("prototype")
public class  GenericController<I, O> {
    private CrudService<Long, I, O> crudService;
    private Class<I> requestType;

    public ResponseEntity<ListResponse<O>> getAllResources(
            @RequestParam(value = "page", defaultValue = AppConstants.DEFAULT_PAGE_NUMBER) int page,
            @RequestParam(value = "size", defaultValue = AppConstants.DEFAULT_PAGE_SIZE) int size,
            @RequestParam(value = "sort", defaultValue = AppConstants.DEFAULT_SORT) String sort,
            @RequestParam(value = "filter", required = false) @Nullable String filter,
            @RequestParam(value = "search", required = false) @Nullable String search,
            @RequestParam(value = "all", required = false) boolean all
            ) {
        return ResponseEntity.status(HttpStatus.OK).body(crudService.findAll(page, size, sort, filter, search, all));
    }

    public ResponseEntity<O> getResource(@PathVariable("id") Long id) {
        return ResponseEntity.status(HttpStatus.OK).body(crudService.findById(id));
    }

    public ResponseEntity<O> createResource(@RequestBody JsonNode request) {
        return ResponseEntity.status(HttpStatus.CREATED).body(crudService.save(request, requestType));
    }

    public ResponseEntity<O> updateResource(@PathVariable("id") Long id, @RequestBody JsonNode request) {
        return ResponseEntity.status(HttpStatus.OK).body(crudService.save(id, request, requestType));
    }

    public ResponseEntity<Void> deleteResource(@PathVariable("id") Long id) {
        crudService.delete(id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }

    public ResponseEntity<Void> deleteResource(@RequestBody List<Long> ids) {
        crudService.delete(ids);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }
}
