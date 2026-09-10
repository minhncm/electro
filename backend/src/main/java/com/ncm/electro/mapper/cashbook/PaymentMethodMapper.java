package com.ncm.electro.mapper.cashbook;

import com.ncm.electro.dto.cashbook.PaymentMethodRequest;
import com.ncm.electro.dto.cashbook.PaymentMethodResponse;
import com.ncm.electro.entity.cashbook.PaymentMethod;
import com.ncm.electro.mapper.GenericMapper;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface PaymentMethodMapper extends GenericMapper<PaymentMethod, PaymentMethodRequest, PaymentMethodResponse> {
}
