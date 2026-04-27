package com.ncm.electro.service.client;

import com.ncm.electro.dto.authentication.UserResponse;
import com.ncm.electro.entity.authentication.User;
import com.ncm.electro.mapper.authentication.UserMapper;
import com.ncm.electro.repository.authentication.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class ClientUserServiceImpl implements ClientUserService{
    private final UserRepository userRepository;
    private final UserMapper userMapper;
    @Override
    public UserResponse findByUsername(String username) {
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException(username));
        return  userMapper.entityToResponse(user);
    }
}
