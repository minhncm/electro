package com.ncm.electro.repository.inventory;

import com.ncm.electro.entity.inventory.Count;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface CountRepository extends JpaRepository<Count, Long>, JpaSpecificationExecutor<Count> {
}