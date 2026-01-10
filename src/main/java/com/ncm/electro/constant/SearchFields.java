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
}
