package com.ncm.electro.repository.authentication;

import com.ncm.electro.entity.authentication.Verification;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VerificationRepository extends JpaRepository<Verification, Long> {
}