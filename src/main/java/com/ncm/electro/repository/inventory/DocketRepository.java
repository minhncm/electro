package com.ncm.electro.repository.inventory;

import com.ncm.electro.entity.inventory.Docket;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DocketRepository extends JpaRepository<Docket, Long> {
}