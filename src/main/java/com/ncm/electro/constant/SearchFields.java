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

    public static final List<String> DEPARTMENT = List.of(
            "name"
    );

    public static final List<String> JOB_LEVEL = List.of(
            "name"
    );

    public static final List<String> JOB_TITLE = List.of(
            "name"
    );

    public static final List<String> JOB_TYPE = List.of(
            "name"
    );

    public static final List<String> OFFICE = List.of(
            "name",
            "address.line",
            "address.province.name",
            "address.province.code",
            "address.district.name",
            "address.district.code"
    );

    public static final List<String> EMPLOYEE = List.of(
            "user.username",
            "user.fullname",
            "user.email",
            "user.phone",
            "user.address.line",
            "user.address.province.name",
            "user.address.province.code",
            "user.address.district.name",
            "user.address.district.code",
            "office.name",
            "office.address.line",
            "office.address.province.name",
            "office.address.province.code",
            "office.address.district.name",
            "office.address.district.code",
            "department.name",
            "jobType.name",
            "jobLevel.name",
            "jobTitle.name"
    );

    public static final List<String> CUSTOMER_GROUP = List.of(
            "code",
            "name",
            "description"
    );

    public static final List<String> CUSTOMER_RESOURCE = List.of(
            "code",
            "name",
            "description"
    );

    public static final List<String> CUSTOMER_STATUS = List.of(
            "code",
            "name",
            "description"
    );

    public static final List<String> CUSTOMER = List.of(
            "user.username",
            "user.fullname",
            "user.email",
            "user.phone",
            "user.address.line",
            "user.address.province.name",
            "user.address.province.code",
            "user.address.district.name",
            "user.address.district.code",
            "customerGroup.code",
            "customerGroup.name",
            "customerResource.code",
            "customerResource.name",
            "customerStatus.code",
            "customerStatus.name"
    );

    public static final List<String> PROPERTY = List.of(
            "name",
            "code",
            "description"
    );

    public static final List<String> CATEGORY = List.of(
            "name",
            "code",
            "description"
    );

    public static final List<String> TAG = List.of(
            "name",
            "slug"
    );

    public static final List<String> GUARANTEE = List.of(
            "name",
            "description"
    );

    public static final List<String> UNIT = List.of(
            "name"
    );

    public static final List<String> SUPPLIER = List.of(
            "displayName",
                    "code",
                    "contactFullname",
                    "contactEmail",
                    "contactPhone",
                    "companyName",
                    "taxCode",
                    "email",
                    "phone",
                    "fax",
                    "website",
                    "address.province.name",
                    "address.province.code",
                    "address.district.name",
                    "address.district.code",
                    "description",
                    "note"
    );

    public static final List<String> BRAND = List.of(
            "name",
            "code",
            "description"
    );

    public static final List<String> SPECIFICATION = List.of(
            "name",
            "code",
            "description"
    );
}
