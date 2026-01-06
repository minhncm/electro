package com.ncm.electro.repository.inventory;

import com.ncm.electro.entity.inventory.DocketReason;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DocketReasonRepository extends JpaRepository<DocketReason, Long> {
}