package com.ncm.electro.repository.authentication;

import com.ncm.electro.entity.authentication.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}