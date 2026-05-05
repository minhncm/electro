package com.ncm.electro.service.client;

import com.ncm.electro.constant.FieldName;
import com.ncm.electro.dto.ListResponse;
import com.ncm.electro.dto.client.ClientOrderRequest;
import com.ncm.electro.dto.client.ClientOrderResponse;
import com.ncm.electro.dto.client.ClientSimpleOrderResponse;
import com.ncm.electro.entity.order.Order;
import com.ncm.electro.exception.ResourceNotFoundException;
import com.ncm.electro.mapper.client.ClientOrderMapper;
import com.ncm.electro.repository.order.OrderRepository;
import com.ncm.electro.specification.OrderSpecification;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ClientOrderServiceImpl implements ClientOrderService{
    private final OrderRepository orderRepository;
    private final ClientOrderMapper clientOrderMapper;
    @Override
    public ListResponse<ClientSimpleOrderResponse> findAllByUsername(String username, int page, int size, String sort, String filter) {
        Page<Order> orders = orderRepository.findAll(
                OrderSpecification
                        .sort(sort)
                        .and(OrderSpecification.filter(filter))
                        .and(OrderSpecification.hasUsername(username)),
                PageRequest.of(page - 1, size));
        List<ClientSimpleOrderResponse> clientSimpleOrderResponses = orders.map(clientOrderMapper::entityToSimpleResponse).toList();
        return ListResponse.of(clientSimpleOrderResponses, orders);
    }

    @Override
    public ClientOrderResponse findByCode(String code) {
        Order order = orderRepository.findByCode(code)
                .orElseThrow(() -> new ResourceNotFoundException(Order.class.getSimpleName(), FieldName.ORDER_CODE, code));
        return clientOrderMapper.entityToResponse(order);
    }

    @Override
    public ClientOrderResponse createOrder(ClientOrderRequest request) {
        return null;
    }
}

