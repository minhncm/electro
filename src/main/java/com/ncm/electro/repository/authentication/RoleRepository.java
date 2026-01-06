package com.ncm.electro.repository.authentication;

import com.ncm.electro.entity.authentication.Role;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepository extends JpaRepository<Role, Long> {
}