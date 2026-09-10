package com.ncm.electro.specification;

import com.ncm.electro.entity.client.Wish;
import io.github.perplexhub.rsql.RSQLJPASupport;
import org.springframework.data.jpa.domain.Specification;

public class WishSpecification {
    public static Specification<Wish> sort(String sort) {
        if(sort == null) return ((root, query, cb) -> cb.conjunction());
        return RSQLJPASupport.toSort(sort);
    }

    public static Specification<Wish> filter(String filter) {
        if(filter == null) return ((root, query, cb) -> cb.conjunction());
        return RSQLJPASupport.toSpecification(filter);
    }

    public static Specification<Wish> hasUsername(String username) {
        if(username == null) return ((root, query, cb) -> cb.conjunction());
        return RSQLJPASupport.toSpecification("user.username==" + username);
    }
}
