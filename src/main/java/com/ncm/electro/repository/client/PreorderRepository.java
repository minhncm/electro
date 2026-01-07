package com.ncm.electro.repository.client;

import com.ncm.electro.entity.client.Preorder;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface PreorderRepository extends JpaRepository<Preorder, Long>, JpaSpecificationExecutor<Preorder> {
}