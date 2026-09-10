package com.ncm.electro.entity.waybill;

import com.ncm.electro.entity.BaseEntity;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "waybill_log")
public class WaybillLog extends BaseEntity {
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "waybill_id", nullable = false)
    private Waybill waybill;

    @Column(name = "previous_status")
    private Integer previousStatus;

    @Column(name = "current_status")
    private Integer currentStatus;

}