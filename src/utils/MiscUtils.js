import _ from "lodash";

class MiscUtils {
  static makeCaterogyBreadcrumbs = (category) => {
    if (!category.parent) {
      return [category];
    }

    return [...this.makeCaterogyBreadcrumbs(category.parent), category];
  };

  static parserPrice = (value) => (value || "").replace(/(\.)/g, "");

  static formatterPrice = (value) => {
    if (value === null || value === undefined) return 0;
    return !Number.isNaN(parseFloat(value))
      ? value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
      : "";
  };

  static toVND = (value) => {
    value = value.toString().replace(/\./g, "");
    const formatted = new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    })
      .format(value)
      .trim();

    return formatted;
  };

  static calculateDiscountedPrice = (price, discount) =>
    (price * (100 - discount)) / 100;

  static generatePriceOptions = (priceRange) => {
    let { min, max } = priceRange;
    const range = max - min;

    const step =
      range >= 40_000_000
        ? 10_000_000
        : range >= 10_000_000
          ? 5_000_000
          : range >= 1_000_000
            ? 1_000_000
            : 100_000;

    min = Math.round(min / step) * step;
    max = Math.round(max / step) * step;

    const prices = [];

    for (let i = min === 0 ? step : min; i <= max; i += step) {
      prices.push(i);
    }

    const option = [];
    for (let i = 0; i <= prices.length; i++) {
      if (i === 0) option.push(["0", String(prices[i])]);
      else if (i === prices.length)
        option.push([String(prices[prices.length - 1]), "max"]);
      else option.push([String(prices[i - 1]), String(prices[i])]);
    }

    return option;
  };

  static readablePriceOption = (priceOption) => {
    const replaceMillion = (price) => {
      if (price % 1_000_000 === 0) return `${price / 1_000_000} tr`;
      if (price % 100_000 === 0) return `${price / 1_000_000} tr`;
      if (price % 1_000 === 0) return `${price / 1_000}k`;
    };
    const [from, to] = priceOption;

    if (from === "0") {
      return "Dưới " + replaceMillion(to);
    } else if (to === "max") {
      return "Trên " + replaceMillion(from);
    }

    return replaceMillion(from) + " đến " + replaceMillion(to);
  };

  static isEqual = (first, second) => _.isEqual(first, second);
}

export default MiscUtils;
