package com.ncm.electro.repository.authentication;

import com.ncm.electro.entity.authentication.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface UserRepository extends JpaRepository<User, Long>, JpaSpecificationExecutor<User> {

    @Override
    @EntityGraph(attributePaths = {"roles", "address.province", "address.district", "address.ward",})
    Page<User> findAll(Specification<User> specification, Pageable pageable);
}