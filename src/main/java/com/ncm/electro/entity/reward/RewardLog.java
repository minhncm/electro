package com.ncm.electro.entity.reward;

import com.ncm.electro.entity.BaseEntity;
import com.ncm.electro.entity.authentication.User;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "reward_log")
public class RewardLog extends BaseEntity {
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @Column(name = "type", nullable = false)
    @Enumerated(EnumType.STRING)
    private RewardType type;

    @Column(name = "score", nullable = false)
    private Integer score;

    @Column(name = "note", nullable = false)
    private String note;

}