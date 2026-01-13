package com.ncm.electro.repository.client;

import com.ncm.electro.entity.client.Wish;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface WishRepository extends JpaRepository<Wish, Long>, JpaSpecificationExecutor<Wish> {
}