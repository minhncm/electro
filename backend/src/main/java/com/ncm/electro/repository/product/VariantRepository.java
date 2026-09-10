package com.ncm.electro.repository.product;

import com.ncm.electro.dto.client.ClientFilterResponse;
import com.ncm.electro.entity.product.Variant;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;

public interface VariantRepository extends JpaRepository<Variant, Long>, JpaSpecificationExecutor<Variant> {
    @Query("SELECT new com.ncm.electro.dto.client.ClientFilterResponse$PriceRange(MIN(v.price), MAX(v.price)) FROM Variant v " +
            "JOIN v.product p JOIN p.category c WHERE c.slug = :slug")
    ClientFilterResponse.PriceRange findPriceRangeByCategorySlug(String slug);
}