package com.ncm.electro.repository.waybill;

import com.ncm.electro.entity.waybill.Waybill;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface WaybillRepository extends JpaRepository<Waybill, Long>, JpaSpecificationExecutor<Waybill> {
}