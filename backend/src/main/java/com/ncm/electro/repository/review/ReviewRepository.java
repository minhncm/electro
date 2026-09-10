package com.ncm.electro.repository.review;

import com.ncm.electro.entity.review.Review;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface ReviewRepository extends JpaRepository<Review, Long>, JpaSpecificationExecutor<Review> {
    @Query("SELECT COALESCE(CEILING(AVG(r.ratingScore)),0) FROM Review r WHERE r.product.id = :productId")
    int findAverageRatingScoreByProductId(@Param("productId") Long productId);
    int countByProductId(Long productId);
}