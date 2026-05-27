package com.ncm.electro.repository.waybill;

import com.ncm.electro.entity.waybill.Waybill;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface WaybillRepository extends JpaRepository<Waybill, Long>, JpaSpecificationExecutor<Waybill> {
    @Query("SELECT w FROM Waybill w WHERE w.order.id =: orderId")
    Optional<Waybill> findByOrderId(Long orderId);
}