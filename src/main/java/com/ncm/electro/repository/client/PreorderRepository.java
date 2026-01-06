package com.ncm.electro.repository.client;

import com.ncm.electro.entity.client.Preorder;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PreorderRepository extends JpaRepository<Preorder, Long> {
}