package com.ncm.electro.service.client;

import com.ncm.electro.constant.FieldName;
import com.ncm.electro.dto.ListResponse;
import com.ncm.electro.dto.client.ClientOrderResponse;
import com.ncm.electro.dto.client.ClientWishRequest;
import com.ncm.electro.dto.client.ClientWishResponse;
import com.ncm.electro.entity.client.Wish;
import com.ncm.electro.exception.DuplicatedWishException;
import com.ncm.electro.exception.ResourceNotFoundException;
import com.ncm.electro.mapper.client.ClientWishMapper;
import com.ncm.electro.repository.client.WishRepository;
import com.ncm.electro.specification.WishSpecification;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ClientWishServiceImpl implements ClientWishService{
    private final WishRepository wishRepository;
    private final ClientWishMapper clientWishMapper;
    @Override
    public ListResponse<ClientWishResponse> findAllByUsername(String username, int page, int size, String sort, String filter) {
        Page<Wish> wishes = wishRepository.findAll(
                WishSpecification.sort(sort)
                        .and(WishSpecification.filter(filter))
                        .and(WishSpecification.hasUsername(username)),
                PageRequest.of(page - 1, size));
        List<ClientWishResponse> responses = clientWishMapper.entityToResponse(wishes.toList());
        return ListResponse.of(responses, wishes);
    }

    @Override
    public ClientWishResponse addWishItem(ClientWishRequest request) {
        Optional<Wish> wishOpt = wishRepository.findByUserIdAndProductId(request.getUserId(), request.getProductId());
        if(wishOpt.isPresent()) {
            throw new DuplicatedWishException(request.getProductId());
        }
        Wish wish = clientWishMapper.requestToEntity(request);
        wishRepository.save(wish);
        return clientWishMapper.entityToResponse(wish);
    }

    @Override
    public void delete(List<Long> ids) {
        wishRepository.deleteAllById(ids);
    }
}
