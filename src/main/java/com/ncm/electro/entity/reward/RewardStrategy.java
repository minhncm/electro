package com.ncm.electro.entity.reward;

import com.ncm.electro.entity.BaseEntity;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "reward_strategy")
public class RewardStrategy extends BaseEntity {
    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "code", nullable = false)
    private String code;

    @Column(name = "formula", nullable = false)
    private String formula;

    @Column(name = "status", nullable = false, columnDefinition = "TINYINT")
    private Integer status;

}