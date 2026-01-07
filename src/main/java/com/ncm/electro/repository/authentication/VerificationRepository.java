package com.ncm.electro.repository.authentication;

import com.ncm.electro.entity.authentication.Verification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface VerificationRepository extends JpaRepository<Verification, Long>, JpaSpecificationExecutor<Verification> {
}