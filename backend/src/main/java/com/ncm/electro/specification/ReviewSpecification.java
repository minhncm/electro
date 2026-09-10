package com.ncm.electro.specification;

import com.ncm.electro.entity.review.Review;
import io.github.perplexhub.rsql.RSQLJPASupport;
import org.springframework.data.jpa.domain.Specification;

public class ReviewSpecification {
    public static Specification<Review> filter(String filter) {
        if(filter == null) return ((root, query, cb) -> cb.conjunction());
        return RSQLJPASupport.toSpecification(filter);
    }

    public static Specification<Review> sort(String sort) {
        if(sort == null) return ((root, query, cb) -> cb.conjunction());
        return RSQLJPASupport.toSort(sort);
    }

    public static Specification<Review> hasProductSlug(String productSlug) {
        if(productSlug == null) return ((root, query, cb) -> cb.conjunction());
        return RSQLJPASupport.toSpecification("product.slug==" + productSlug);
    }

    public static Specification<Review> hasUsername(String username) {
        if(username == null) return ((root, query, cb) -> cb.conjunction());
        return RSQLJPASupport.toSpecification("user.username==" + username);
    }
}
