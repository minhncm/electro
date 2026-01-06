package com.ncm.electro.entity.authentication;

import com.ncm.electro.entity.BaseEntity;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.Instant;

@Getter
@Setter
@Entity
@Table(name = "verification")
public class Verification extends BaseEntity {
    @OneToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @Column(name = "token", nullable = false)
    private String token;

    @Column(name = "expired_at", nullable = false)
    private Instant expiredAt;

    @Column(name = "type", nullable = false)
    @Enumerated(EnumType.STRING)
    private VerificationType type;

}