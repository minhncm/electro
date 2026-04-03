package com.ncm.electro.repository.inventory;

import com.ncm.electro.entity.inventory.DocketVariant;
import com.ncm.electro.entity.inventory.DocketVariantKey;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface DocketVariantRepository extends JpaRepository<DocketVariant, DocketVariantKey>, JpaSpecificationExecutor<DocketVariant> {
    @Query(value = "SELECT dv " +
            "FROM DocketVariant dv " +
            "JOIN dv.variant v " +
            "WHERE v.product.id = :productId " +
            "ORDER BY dv.docket.id desc")
    List<DocketVariant> findByProductId(Long productId);

    List<DocketVariant> findByVariantId(Long variantId);
}