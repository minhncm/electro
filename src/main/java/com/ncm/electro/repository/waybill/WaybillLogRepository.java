package com.ncm.electro.repository.waybill;

import com.ncm.electro.entity.waybill.WaybillLog;
import org.springframework.data.jpa.repository.JpaRepository;

public interface WaybillLogRepository extends JpaRepository<WaybillLog, Long> {
}