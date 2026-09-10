package com.ncm.electro.service.client;

import com.ncm.electro.dto.authentication.UserResponse;
import com.ncm.electro.dto.client.ClientEmailSettingUserRequest;
import com.ncm.electro.dto.client.ClientPasswordSettingUserRequest;
import com.ncm.electro.dto.client.ClientPersonalSettingUserRequest;
import com.ncm.electro.dto.client.ClientPhoneSettingUserRequest;
import com.ncm.electro.entity.authentication.User;
import com.ncm.electro.exception.InvalidPasswordException;
import com.ncm.electro.exception.WrongOldPasswordException;
import com.ncm.electro.mapper.authentication.UserMapper;
import com.ncm.electro.repository.authentication.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.function.Function;
import java.util.regex.Pattern;

@Service
@RequiredArgsConstructor
public class ClientUserServiceImpl implements ClientUserService{
    private final UserRepository userRepository;
    private final UserMapper userMapper;
    private final PasswordEncoder passwordEncoder;
    private final Pattern PASSWORD_REGEX = Pattern.compile(
            "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$"
    );
    @Override
    public UserResponse findByUsername(String username) {
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException(username));
        return  userMapper.entityToResponse(user);
    }

    @Override
    public UserResponse updatePersonal(String username, ClientPersonalSettingUserRequest request) {
       return updateUser(username, user -> userMapper.partialUpdate(user,request));
    }

    @Override
    public UserResponse updatePhone(String username, ClientPhoneSettingUserRequest request) {
        return updateUser(username, user -> userMapper.partialUpdate(user,request));
    }

    @Override
    public UserResponse updateEmail(String username, ClientEmailSettingUserRequest request) {
        return updateUser(username, user -> userMapper.partialUpdate(user,request));
    }

    @Override
    public UserResponse updatePassword(String username, ClientPasswordSettingUserRequest request) {
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException(username));

        if(!passwordEncoder.matches(request.getOldPassword(), user.getPassword())) {
            throw new WrongOldPasswordException();
        }

        if(!PASSWORD_REGEX.matcher(request.getNewPassword()).matches()) {
            throw new InvalidPasswordException();
        }
        String newPassword = passwordEncoder.encode(request.getNewPassword());
        user.setPassword(newPassword);
        userRepository.save(user);
        return userMapper.entityToResponse(user);
    }

    private UserResponse updateUser(String username, Function<User, User> updateFn) {
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException(username));
        user = updateFn.apply(user);
        userRepository.save(user);
        return userMapper.entityToResponse(user);
    }
}
