package com.ncm.electro.specification;

import com.ncm.electro.constant.InventoryConstants;
import com.ncm.electro.constant.SearchFields;
import com.ncm.electro.entity.inventory.Docket;
import com.ncm.electro.entity.inventory.DocketVariant;
import com.ncm.electro.entity.product.Product;
import com.ncm.electro.entity.product.Variant;
import cz.jirutka.rsql.parser.ast.ComparisonOperator;
import io.github.perplexhub.rsql.RSQLCustomPredicate;
import io.github.perplexhub.rsql.RSQLJPASupport;
import jakarta.persistence.criteria.*;
import org.springframework.data.jpa.domain.Specification;

import java.util.ArrayList;
import java.util.List;

public class ProductSpecification {
    public static Specification<Product> docketedProducts() {
        return ((root, query, criteriaBuilder) -> {

            Join<Product, Variant> variant = root.join("variants");
            Join<Variant, DocketVariant> docketVariant = variant.join("docketVariants");

            query.groupBy(root.get("id"));
            query.orderBy(criteriaBuilder.desc(criteriaBuilder.max(docketVariant.get("docket").get("id"))));

            return query.getRestriction();
        });
    }

    public static Specification<Product> filter(String filter) {
        if(filter == null)
            return ((root, query, cb) -> cb.conjunction());

        RSQLCustomPredicate<String> jsonPredicate = new RSQLCustomPredicate<>(
                new ComparisonOperator("=json=", true),
                String.class,
                input -> {
                    CriteriaBuilder cb = input.getCriteriaBuilder();

                    Object[] values = input.getArguments().stream().skip(1).toArray();

                    return cb.function("JSON_EXTRACT", String.class,
                            input.getPath(),
                            cb.function("REPLACE", String.class,
                                    cb.function("JSON_UNQUOTE", String.class,
                                            cb.function("JSON_SEARCH", String.class,
                                                    input.getPath(),
                                                    cb.literal("one"),
                                                    cb.literal(input.getArguments().get(0)))),
                                    cb.literal(".code"),
                                    cb.literal(".value")
                            )
                    ).in(values);
        });

        return RSQLJPASupport.toSpecification(filter, List.of(jsonPredicate));
    }

    public static Specification<Product> search(String search) {
        return search == null
                ? ((root, query, cb) -> cb.conjunction())
                : SearchSpecification.parse(search, SearchFields.CLIENT_PRODUCT);
    }

    public static Specification<Product> sort(String sort) {
        return ((root, query, cb) -> {
            if(sort == null) return cb.conjunction();

            List<Predicate> wheres = new ArrayList<>();
            List<Order> orders = new ArrayList<>();

            Join<Product, Variant> variant = root.join("variants");
            Join<Variant, DocketVariant> docketVariant = variant.join("docketVariants");
            Join<DocketVariant, Docket> docket = docketVariant.join("docket");

            if("lowest-price".equals(sort)) {
                orders.add(cb.asc(cb.min(variant.get("price"))));
            }

            if("highest-price".equals(sort)) {
                orders.add(cb.desc(cb.max(variant.get("price"))));
            }

            if ("random".equals(sort)) {
                orders.add(cb.asc(cb.function("RAND", Double.class)));
            }

            if("latest".equals(sort)) {
                wheres.add(cb.equal(docket.get("type"), InventoryConstants.NEW));
                wheres.add(cb.equal(docket.get("status"), InventoryConstants.COMPLETED));

                orders.add(cb.desc(cb.max(docket.get("createdAt"))));
                orders.add(cb.asc(root.get("id")));
            }

            query.groupBy(root.get("id"));
            query.orderBy(orders);

            return cb.and(wheres.toArray(new Predicate[0]));
        });
    }

    public static Specification<Product> saleable(boolean saleable) {
        return ((root, query, cb) -> {
            if(!saleable) return cb.conjunction();

            Subquery<Integer> subquery = query.subquery(Integer.class);
            Root<Variant> variantSq = subquery.from(Variant.class);
            Join<Variant, DocketVariant> docketVariantSq = variantSq.join("docketVariants");
            Join<DocketVariant, Docket> docketSq = docketVariantSq.join("docket");

            subquery.select(cb.diff(
                    cb.sum(
                            cb.<Integer>selectCase()
                                    .when(cb.and(cb.equal(docketSq.get("type"), InventoryConstants.IMPORT),
                                                    cb.equal(docketSq.get("status"), InventoryConstants.COMPLETED)),
                                            docketVariantSq.get("quantity"))
                                    .when(cb.and(cb.equal(docketSq.get("type"), InventoryConstants.EXPORT),
                                                    cb.equal(docketSq.get("status"), InventoryConstants.COMPLETED)),
                                            cb.neg(docketVariantSq.get("quantity")))
                                    .otherwise(0)
                    ),
                    cb.sum(
                            cb.<Integer>selectCase()
                                    .when(cb.and(cb.equal(docketSq.get("type"), InventoryConstants.EXPORT),
                                                    docketSq.get("status").in(InventoryConstants.NEW, InventoryConstants.PROCESSING)),
                                            docketVariantSq.get("quantity"))
                                    .otherwise(0)
                    )
            ));

            subquery.where(cb.equal(variantSq.get("product").get("id"), root.get("id")));
            subquery.groupBy(variantSq.get("product").get("id"));

            return cb.greaterThan(subquery, 0);
        });
    }

}
