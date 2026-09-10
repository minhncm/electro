package com.ncm.electro.repository.product;

import com.ncm.electro.entity.product.Brand;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface BrandRepository extends JpaRepository<Brand, Long>, JpaSpecificationExecutor<Brand> {
    @Query("SELECT distinct b FROM Brand b " +
            "JOIN Product p ON b.id = p.brand.id " +
            "JOIN Category c ON c.id = p.category.id " +
            "WHERE c.slug = :slug")
    List<Brand> findByCategorySlug(@Param("slug") String slug);
}