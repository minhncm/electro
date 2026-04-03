package com.ncm.electro.utils;

import com.ncm.electro.constant.FieldName;
import com.ncm.electro.entity.address.District;
import com.ncm.electro.entity.address.Province;
import com.ncm.electro.entity.address.Ward;
import com.ncm.electro.entity.authentication.Role;
import com.ncm.electro.entity.customer.CustomerGroup;
import com.ncm.electro.entity.customer.CustomerResource;
import com.ncm.electro.entity.customer.CustomerStatus;
import com.ncm.electro.entity.employee.*;
import com.ncm.electro.entity.inventory.Docket;
import com.ncm.electro.entity.order.Order;
import com.ncm.electro.entity.product.Category;
import com.ncm.electro.entity.product.Variant;
import com.ncm.electro.exception.ResourceNotFoundException;
import com.ncm.electro.repository.address.DistrictRepository;
import com.ncm.electro.repository.address.ProvinceRepository;
import com.ncm.electro.repository.address.WardRepository;
import com.ncm.electro.repository.authentication.RoleRepository;
import jakarta.annotation.Nullable;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;
import org.springframework.beans.factory.annotation.Autowired;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public abstract class MapperUtils {
    @Autowired
    private ProvinceRepository provinceRepository;
    @Autowired
    private DistrictRepository districtRepository;
    @Autowired
    private WardRepository wardRepository;
    @Autowired
    private RoleRepository roleRepository;

    public Province mapToProvince(@Nullable Long id) {
        return id == null ? null :
                provinceRepository.findById(id).orElseThrow(() ->
                        new ResourceNotFoundException(Province.class.getSimpleName(), FieldName.ID, id));
    }

    public District mapToDistrict(@Nullable Long id) {
        return id == null ? null :
                districtRepository.findById(id).orElseThrow(() ->
                        new ResourceNotFoundException(District.class.getSimpleName(), FieldName.ID, id));
    }

    public Ward mapToWard(@Nullable Long id) {
        return id == null ? null :
                wardRepository.findById(id).orElseThrow(() ->
                        new ResourceNotFoundException(Ward.class.getSimpleName(), FieldName.ID, id));
    }

    public Role mapToRole(@Nullable Long id) {
        return id == null ? null :
                roleRepository.findById(id).orElseThrow(() ->
                        new ResourceNotFoundException(Role.class.getSimpleName(), FieldName.ID, id));
    }
    public abstract Office mapToOffice(Long id);
    public abstract Department mapToDepartment(Long id);
    public abstract JobType mapToJobType(Long id);
    public abstract JobLevel mapToJobLevel(Long id);
    public abstract JobTitle mapToJobTitle(Long id);
    public abstract CustomerGroup mapToCustomerGroup(Long id);
    public abstract CustomerResource mapToCustomerResource(Long id);
    public abstract CustomerStatus mapToCustomerStatus(Long id);
    public abstract Category mapToCategory(Long id);
    public abstract Variant mapToVariant(Long id);

}
