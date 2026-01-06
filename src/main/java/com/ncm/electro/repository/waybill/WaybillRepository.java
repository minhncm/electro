package com.ncm.electro.repository.waybill;

import com.ncm.electro.entity.waybill.Waybill;
import org.springframework.data.jpa.repository.JpaRepository;

public interface WaybillRepository extends JpaRepository<Waybill, Long> {
}