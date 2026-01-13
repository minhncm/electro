package com.ncm.electro.entity.product;

import com.ncm.electro.entity.BaseEntity;
import com.ncm.electro.entity.address.Address;
import com.ncm.electro.entity.inventory.PurchaseOrder;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.LinkedHashSet;
import java.util.Set;

@Getter
@Setter
@Entity
@Table(name = "supplier")
public class Supplier extends BaseEntity {
    @Column(name = "display_name", nullable = false)
    private String displayName;

    @Column(name = "code", nullable = false)
    private String code;

    @Column(name = "contact_fullname")
    private String contactFullname;

    @Column(name = "contact_email")
    private String contactEmail;

    @Column(name = "contact_phone")
    private String contactPhone;

    @Column(name = "company_name")
    private String companyName;

    @Column(name = "tax_code")
    private String taxCode;

    @Column(name = "email")
    private String email;

    @Column(name = "phone")
    private String phone;

    @Column(name = "fax")
    private String fax;

    @Column(name = "website")
    private String website;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "address_id")
    private Address address;

    @Column(name = "description")
    private String description;

    @Column(name = "note")
    private String note;

    @Column(name = "status", nullable = false)
    private Byte status;

    @OneToMany(mappedBy = "supplier")
    private Set<Product> products = new LinkedHashSet<>();

    @OneToMany(mappedBy = "supplier")
    private Set<PurchaseOrder> purchaseOrders = new LinkedHashSet<>();

}