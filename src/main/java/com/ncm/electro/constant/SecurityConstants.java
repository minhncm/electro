package com.ncm.electro.constant;

public final class SecurityConstants {
    public static final String[] ADMIN_API_PATHS = {
            "/api/**"
    };

    public static final String[] CLIENT_API_PATHS = {
            "/client-api/users/**",
            "/client-api/wishes/**",
            "/client-api/preorders/**",
            "/client-api/notifications/**",
            "/client-api/reviews/**",
            "/client-api/carts/**",
            "/client-api/orders/**",
            "/client-api/chat/**"
    };

    public static final String[] WHITE_LIST = {
            "/api/auth/**",
            "/api/provinces/**",
            "/api/districts/**",
            "/api/wards/**",
            "/client-api/products/**",
            "/client-api/categories/**",
            "/client-api/reviews/products/*",
    };

    public static final class Role {
        public static final String ADMIN = "ADMIN";
        public static final String EMPLOYEE = "EMPLOYEE";
        public static final String CUSTOMER = "CUSTOMER";
    }
}
