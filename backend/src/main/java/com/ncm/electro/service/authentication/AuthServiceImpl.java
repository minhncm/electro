package com.ncm.electro.service.authentication;

import com.ncm.electro.constant.AppConstants;
import com.ncm.electro.constant.TokenType;
import com.ncm.electro.dto.authentication.*;
import com.ncm.electro.entity.authentication.*;
import com.ncm.electro.entity.customer.Customer;
import com.ncm.electro.entity.customer.CustomerGroup;
import com.ncm.electro.entity.customer.CustomerResource;
import com.ncm.electro.entity.customer.CustomerStatus;
import com.ncm.electro.exception.AuthException;
import com.ncm.electro.mapper.authentication.UserMapper;
import com.ncm.electro.repository.authentication.UserRepository;
import com.ncm.electro.repository.authentication.VerificationRepository;
import com.ncm.electro.repository.customer.CustomerRepository;
import com.ncm.electro.service.email.EmailSenderService;
import com.ncm.electro.service.jwt.JwtService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.text.MessageFormat;
import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.Map;
import java.util.Random;
import java.util.Set;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService{
    private final AuthenticationManager authenticationManager;
    private final PasswordEncoder passwordEncoder;

    private final JwtService jwtService;
    private final EmailSenderService emailSenderService;
    private final AuthUserDetailService authUserDetailService;

    private final UserRepository userRepository;
    private final VerificationRepository verificationRepository;
    private final CustomerRepository customerRepository;

    private final UserMapper userMapper;


    @Override
    public Long registerUser(UserRequest userRequest) {
        if (userRepository.existsByUsername(userRequest.getUsername())) {
            throw new AuthException("Username is existing");
        }

        if(userRepository.existsByEmail(userRequest.getEmail())) {
            throw new AuthException("Email is existing");
        }

        User user = userMapper.requestToEntity(userRequest);
        user.setPassword(passwordEncoder.encode(userRequest.getPassword()));
        user.setStatus(UserStatus.UNVERIFIED);
        Role role = new Role();
        role.setId(3L);
        user.setRoles(Set.of(role));

        userRepository.save(user);

        Verification verification = new Verification();
        String token = generateVerificationToken();

        verification.setUser(user);
        verification.setToken(token);
        verification.setExpiredAt(Instant.now().plus(5, ChronoUnit.MINUTES));
        verification.setType(VerificationType.REGISTRATION);

        verificationRepository.save(verification);

        Map<String, Object> attributes = Map.of(
                "token", token,
                "link", MessageFormat.format("{0}/signup?userId={1}", AppConstants.FRONTEND_HOST, user.getId())
        );
        emailSenderService.sendVerificationToken(user.getEmail(), attributes);

        return user.getId();
    }

    @Override
    public void confirmRegistration(RegistrationRequest registrationRequest) {
        Verification verification = verificationRepository.findByUserId(registrationRequest.getUserId())
                .orElseThrow(() -> new AuthException("User does not exist"));

        boolean validVerification = verification.getToken().equals(registrationRequest.getToken())
                && verification.getExpiredAt().isAfter(Instant.now())
                && verification.getType().equals(VerificationType.REGISTRATION);

        if(!validVerification) {
            throw new AuthException("Invalid token registration");
        }

        User user = verification.getUser();
        user.setStatus(UserStatus.VERIFIED);
        userRepository.save(user);
        verificationRepository.delete(verification);

        Customer customer = new Customer();
        customer.setUser(user);
        customer.setCustomerGroup((CustomerGroup) new CustomerGroup().setId(1L));
        customer.setCustomerStatus((CustomerStatus) new CustomerStatus().setId(1L));
        customer.setCustomerResource((CustomerResource) new CustomerResource().setId(1L));
        customerRepository.save(customer);
    }

    @Override
    public void resendVerificationToken(Long userId) {
        Verification verification = verificationRepository.findByUserId(userId)
                .orElseThrow(() -> new AuthException("User does not exist"));
        String token = generateVerificationToken();

        verification.setToken(token);
        verification.setExpiredAt(Instant.now().plus(5, ChronoUnit.MINUTES));

        verificationRepository.save(verification);

        Map<String, Object> attributes = Map.of(
                "token", token,
                "link", MessageFormat.format("{0}/signup?userId={1}", AppConstants.FRONTEND_HOST, userId)
        );
        emailSenderService.sendVerificationToken(verification.getUser().getEmail(), attributes);
    }

    @Override
    public JwtResponse authenticate(LoginRequest request) {
        Authentication authentication = authenticationManager.authenticate(
            new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword())
        );
        AuthUser user = (AuthUser) authentication.getPrincipal();
        String accessToken = jwtService.generateToken(user, TokenType.ACCESS_TOKEN);
        String refreshToken = jwtService.generateToken(user, TokenType.REFRESH_TOKEN);

        JwtResponse response = new JwtResponse();
        response.setAccessToken(accessToken);
        response.setRefreshToken(refreshToken);
        return response;
    }

    @Override
    public JwtResponse recreateToken(String refreshToken) {
        if(refreshToken == null) {
            throw new RuntimeException("Refresh token must be null");
        }
        String username = jwtService.extraUsername(refreshToken, TokenType.REFRESH_TOKEN);
        UserDetails userDetails = authUserDetailService.loadUserByUsername(username);

        if(!jwtService.isValidToken(refreshToken, TokenType.REFRESH_TOKEN, userDetails)) {
            throw new RuntimeException("invalid refresh token");
        }
        String newAccessToken = jwtService.generateToken(userDetails, TokenType.ACCESS_TOKEN);

        JwtResponse response = new JwtResponse();
        response.setAccessToken(newAccessToken);
        return response;
    }

    @Override
    public void forgotPassword(String email) {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new AuthException("User does not exist by email"));

        if(user.getStatus().equals(UserStatus.VERIFIED)) {
            throw new AuthException("Account is not activated");
        }

        String token = UUID.randomUUID().toString();
        user.setResetPasswordToken(token);
        userRepository.save(user);
        String link = MessageFormat.format("{0}/change-password?token={1}&email={2}", AppConstants.FRONTEND_HOST, token, email);
        emailSenderService.sendForgetPasswordToken(user.getEmail(), Map.of("link", link));
    }

    @Override
    public void resetPassword(ResetPasswordRequest request) {
        User user = userRepository.findByEmailAndResetPasswordToken(request.getEmail(), request.getToken())
                .orElseThrow(() -> new AuthException("Email and/or token are invalid"));

        user.setPassword(passwordEncoder.encode(request.getPassword()));
        user.setResetPasswordToken(null);
        userRepository.save(user);
    }

    private String generateVerificationToken() {
        Random random = new Random();
        return String.format("%04d", random.nextInt(10000));
    }
}
