package com.ncm.electro.service.authentication;

import com.ncm.electro.constant.FieldName;
import com.ncm.electro.entity.authentication.User;
import com.ncm.electro.exception.ResourceNotFoundException;
import com.ncm.electro.repository.authentication.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthUserDetailService implements UserDetailsService {
    private final UserRepository userRepository;
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return userRepository.findByUsername(username)
                .map(AuthUser::new)
                .orElseThrow(() -> new ResourceNotFoundException(User.class.getSimpleName(), FieldName.USERNAME, username));
    }
}
