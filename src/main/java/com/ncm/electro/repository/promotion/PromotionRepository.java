package com.ncm.electro.repository.promotion;

import com.ncm.electro.entity.promotion.Promotion;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface PromotionRepository extends JpaRepository<Promotion, Long>, JpaSpecificationExecutor<Promotion> {

    @Query("SELECT pr FROM Promotion pr join pr.products p WHERE p.id = :productId AND pr.status = 1 " +
            "AND CURRENT_DATE BETWEEN pr.startDate AND pr.endDate")
    List<Promotion> findActivePromotionByProductId(Long productId);
}