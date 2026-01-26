package com.ncm.electro.repository.inventory;

import com.ncm.electro.entity.inventory.Destination;
import org.jspecify.annotations.NullMarked;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

@NullMarked
public interface DestinationRepository extends JpaRepository<Destination, Long>, JpaSpecificationExecutor<Destination> {
    @EntityGraph(attributePaths = {"address", "address.district", "address.province"})
    Page<Destination> findAll(Specification<Destination> specification, Pageable pageable);
}