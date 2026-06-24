package com.ncm.electro.utils;

import com.ncm.electro.constant.FieldName;
import com.ncm.electro.entity.address.District;
import com.ncm.electro.entity.address.Province;
import com.ncm.electro.entity.address.Ward;
import com.ncm.electro.entity.authentication.Role;
import com.ncm.electro.entity.authentication.User;
import com.ncm.electro.entity.chat.Room;
import com.ncm.electro.entity.customer.CustomerGroup;
import com.ncm.electro.entity.customer.CustomerResource;
import com.ncm.electro.entity.customer.CustomerStatus;
import com.ncm.electro.entity.employee.*;
import com.ncm.electro.entity.inventory.Docket;
import com.ncm.electro.entity.order.Order;
import com.ncm.electro.entity.order.OrderCancellationReason;
import com.ncm.electro.entity.order.OrderResource;
import com.ncm.electro.entity.order.OrderVariantKey;
import com.ncm.electro.entity.product.Category;
import com.ncm.electro.entity.product.Product;
import com.ncm.electro.entity.product.Variant;
import com.ncm.electro.exception.ResourceNotFoundException;
import com.ncm.electro.repository.address.DistrictRepository;
import com.ncm.electro.repository.address.ProvinceRepository;
import com.ncm.electro.repository.address.WardRepository;
import com.ncm.electro.repository.authentication.RoleRepository;
import jakarta.annotation.Nullable;
import org.mapstruct.*;
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
    public abstract User mapToUser(Long id);
    public abstract OrderCancellationReason mapToOrderCancellationReason(Long id);
    public abstract OrderResource mapToOrderResource(Long id);
    public abstract Room mapToRoom(Long id);
    public abstract Product mapToProduct(Long id);

    @AfterMapping
    @Named("attachOrder")
    public Order attachOrder(@MappingTarget Order order) {
        order.getOrderVariants().forEach(orderVariant -> {
            orderVariant.setOrderVariantKey(new OrderVariantKey(order.getId(), orderVariant.getVariant().getId()));
            orderVariant.setOrder(order);
        });
        return order;
    }

}
