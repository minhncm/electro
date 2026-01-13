package com.ncm.electro.repository.inventory;

import com.ncm.electro.entity.inventory.Destination;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface DestinationRepository extends JpaRepository<Destination, Long>, JpaSpecificationExecutor<Destination> {
}