package com.ncm.electro.repository.inventory;

import com.ncm.electro.entity.inventory.Transfer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TransferRepository extends JpaRepository<Transfer, Long> {
}