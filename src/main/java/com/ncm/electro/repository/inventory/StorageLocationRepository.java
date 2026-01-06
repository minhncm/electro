package com.ncm.electro.repository.inventory;

import com.ncm.electro.entity.inventory.StorageLocation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StorageLocationRepository extends JpaRepository<StorageLocation, Long> {
}