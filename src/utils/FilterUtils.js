export const StringOperator = {
  EQUALS: "str_eq",
  NOT_EQUALS: "str_neq",
  CONTAINS: "str_ct",
  NOT_CONTAINS: "str_nct",
  STARTS_WITH: "str_sw",
  ENDS_WITH: "str_ew",
  IN: "str_in",
  NOT_IN: "str_nin",
  IS_NULL: "str_n",
  IS_NOT_NULL: "str_nn",
};

export const NumberOperator = {
  EQUALS: "num_eq",
  NOT_EQUALS: "num_neq",
  LESS_THAN: "num_lt",
  LESS_THAN_OR_EQUAL_TO: "num_lte",
  GREATER_THAN: "num_gt",
  GREATER_THAN_OR_EQUAL_TO: "num_gte",
  BETWEEN: "num_bw",
  NOT_BETWEEN: "num_nbw",
  IS_NULL: "num_n",
  IS_NOT_NULL: "num_nn",
};

export const BooleanOperator = {
  EQUALS: "bool_eq",
  NOT_EQUALS: "bool_neq",
  IS_NULL: "bool_n",
  IS_NOT_NULL: "bool_nn",
};

export const DateOperator = {
  EQUALS: "date_eq",
  NOT_EQUALS: "date_neq",
  BEFORE: "date_bf",
  AFTER: "date_af",
  BETWEEN: "date_bw",
  NOT_BETWEEN: "date_nbw",
  IS_NULL: "date_n",
  IS_NOT_NULL: "date_nn",
};

export const OrderType = {
  ASC: "asc",
  DESC: "desc",
};

export const SortCriteria = {
  property: "",
  order: OrderType,
};

export const FilterCriteria = {
  property: "",
  type: "",
  operator: "",
  value: "",
};

export const Filter = {
  id: "",
  createdAt: "",
  updatedAt: "",
  createdBy: null,
  updatedBy: null,
  name: "",
  sortCriteriaList: [],
  filterCriteriaList: [],
};

export class FilterUtils {
  static convertToSortRSQL = (filter) => {
    if (!filter) return "";

    return filter.sortCriteriaList
      .filter((item) => item.property !== null && item.order !== null)
      .map((item) => item.property + "," + item.order)
      .join(";");
  };

  static convertToFilterRSQL = (filter) => {
    if (!filter) return "";
    return filter.filterCriteriaList
      .map(this.convertFilterCriteriaToRSQL)
      .filter(Boolean)
      .join(";");
  };

  static convertFilterCriteriaToRSQL = (filterCriteria) => {
    if (filterCriteria.property && filterCriteria.operator) {
      if (filterCriteria.value) {
        switch (filterCriteria.operator) {
          case StringOperator.EQUALS:
            return filterCriteria.property + "=='" + filterCriteria.value + "'";
          case StringOperator.NOT_EQUALS:
            return filterCriteria.property + "!='" + filterCriteria.value + "'";
          case StringOperator.CONTAINS:
            return (
              filterCriteria.property + "=like='" + filterCriteria.value + "'"
            );
          case StringOperator.NOT_CONTAINS:
            return (
              filterCriteria.property +
              "=notlike='" +
              filterCriteria.value +
              "'"
            );
          case StringOperator.STARTS_WITH:
            return (
              filterCriteria.property + "=='" + filterCriteria.value + "*'"
            );
          case StringOperator.ENDS_WITH:
            return (
              filterCriteria.property + "=='*" + filterCriteria.value + "'"
            );

          case NumberOperator.EQUALS:
          case DateOperator.EQUALS:
            return filterCriteria.property + "==" + filterCriteria.value;
          case NumberOperator.NOT_EQUALS:
          case DateOperator.NOT_EQUALS:
            return filterCriteria.property + "!=" + filterCriteria.value;
          case NumberOperator.LESS_THAN:
            return filterCriteria.property + "=lt=" + filterCriteria.value;
          case NumberOperator.LESS_THAN_OR_EQUAL_TO:
          case DateOperator.BEFORE:
            return filterCriteria.property + "=le=" + filterCriteria.value;
          case NumberOperator.GREATER_THAN:
            return filterCriteria.property + "=gt=" + filterCriteria.value;
          case NumberOperator.GREATER_THAN_OR_EQUAL_TO:
          case DateOperator.AFTER:
            return filterCriteria.property + "=ge=" + filterCriteria.value;
          default:
            return "";
        }
      } else {
        switch (filterCriteria.operator) {
          case StringOperator.IS_NULL:
          case NumberOperator.IS_NULL:
          case DateOperator.IS_NULL:
            return filterCriteria.property + "=isnull=''";
          case StringOperator.IS_NOT_NULL:
          case NumberOperator.IS_NOT_NULL:
          case DateOperator.IS_NOT_NULL:
            return filterCriteria.property + "=isnotnull=''";
          default:
            return "";
        }
      }
    }
    return "";
  };
}

export default FilterUtils;
