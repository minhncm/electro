package com.ncm.electro.specification;

import com.ncm.electro.entity.order.Order;
import io.github.perplexhub.rsql.RSQLJPASupport;
import org.springframework.data.jpa.domain.Specification;

public class OrderSpecification {
    public static Specification<Order> sort(String sort) {
        if(sort == null) return ((root, query, cb) -> cb.conjunction());
        return RSQLJPASupport.toSort(sort);
    }

    public static Specification<Order> filter(String filter) {
        if(filter == null) return ((root, query, cb) -> cb.conjunction());
        return RSQLJPASupport.toSpecification(filter);
    }

    public static Specification<Order> compareUsername(String username) {
        if(username == null) return ((root, query, cb) -> cb.conjunction());
        return RSQLJPASupport.toSpecification("user.username==" + username);
    }
}
