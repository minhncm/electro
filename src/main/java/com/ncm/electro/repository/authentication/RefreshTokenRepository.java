package com.ncm.electro.repository.authentication;

import com.ncm.electro.entity.authentication.RefreshToken;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface RefreshTokenRepository extends JpaRepository<RefreshToken, Long>, JpaSpecificationExecutor<RefreshToken> {
}