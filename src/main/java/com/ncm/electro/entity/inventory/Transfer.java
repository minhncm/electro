package com.ncm.electro.entity.inventory;

import com.ncm.electro.entity.BaseEntity;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "transfer")
public class Transfer extends BaseEntity {
    @Column(name = "code", nullable = false)
    private String code;

    @OneToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "export_docket_id", referencedColumnName = "id", nullable = false, unique = true)
    private Docket exportDocket;

    @OneToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "import_docket_id", referencedColumnName = "id", nullable = false, unique = true)
    private Docket importDocket;

    @Column(name = "note")
    private String note;

}