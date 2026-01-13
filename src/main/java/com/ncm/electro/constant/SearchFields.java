package com.ncm.electro.constant;

import java.util.List;

public final class SearchFields {
    public static final List<String> PROVINCE = List.of(
            "name",
            "code"
    );

    public static final List<String> DISTRICT = List.of(
            "name",
            "code",
            "province.name",
            "province.code"
    );

    public static final List<String> WARD = List.of(
            "name",
            "code",
            "district.name",
            "district.code"
    );

    public static final List<String> ADDRESS = List.of(
            "line",
            "province.name",
            "province.code",
            "district.name",
            "district.code"
    );

    public static final List<String> USER = List.of(
            "username",
            "fullName",
            "email",
            "phone",
            "address.line",
            "address.province.name",
            "address.province.code",
            "address.district.name",
            "address.district.code"
    );

    public static final List<String> ROLE = List.of(
            "code",
            "name"
    );
}
