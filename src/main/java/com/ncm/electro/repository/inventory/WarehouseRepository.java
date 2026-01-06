package com.ncm.electro.repository.inventory;

import com.ncm.electro.entity.inventory.Warehouse;
import org.springframework.data.jpa.repository.JpaRepository;

public interface WarehouseRepository extends JpaRepository<Warehouse, Long> {
}