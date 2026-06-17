package com.ncm.electro.specification;

import com.ncm.electro.entity.client.Wish;
import com.ncm.electro.entity.general.Notification;
import io.github.perplexhub.rsql.RSQLJPASupport;
import org.springframework.data.jpa.domain.Specification;

public class NotificationSpecification {
    public static Specification<Notification> sort(String sort) {
        if(sort == null) return ((root, query, cb) -> cb.conjunction());
        return RSQLJPASupport.toSort(sort);
    }

    public static Specification<Notification> filter(String filter) {
        if(filter == null) return ((root, query, cb) -> cb.conjunction());
        return RSQLJPASupport.toSpecification(filter);
    }

    public static Specification<Notification> hasUsername(String username) {
        if(username == null) return ((root, query, cb) -> cb.conjunction());
        return RSQLJPASupport.toSpecification("user.username==" + username);
    }
}
