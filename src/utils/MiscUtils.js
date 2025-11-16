const makeCaterogyBreadcrumbs = (category) => {
  if (!category.categoryParent) {
    return [category];
  }

  return [...makeCaterogyBreadcrumbs(category.categoryParent), category];
};

const toVND = (value) => {
  value = value.toString().replace(/\./g, "");
  const formatted = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  })
    .format(value)
    .trim();

  return formatted;
};

const calculateDiscountedPrice = (price, discount) => (price * (100 - discount)) / 100;

const generatePriceOptions = (filterPriceQuartiles) => {
  const start = filterPriceQuartiles[0];
  const end = filterPriceQuartiles[1];

  let step = 100_000;

  if (end - start >= 10_000_000) {
    step = 10_000_000;
  }

  const prices = [];

  for (let i = start; i <= end; i += step) {
    prices.push(i);
  }

  const priceOptions = [];

  for (let i = 0; i <= prices.length; i++) {
    if (i === 0) {
      priceOptions.push(["0", String(prices[0])]);
    } else if (i === prices.length) {
      priceOptions.push([String(prices[prices.length - 1]), "max"]);
    } else {
      priceOptions.push([String(prices[i - 1]), String(prices[i])]);
    }
  }

  return priceOptions;
};

const readablePriceOption = (priceOption) => {
  const replaceMillion = (price) => price.replace(/000000$/, " tr");

  if (priceOption[0] === "0") {
    return "Dưới " + replaceMillion(priceOption[1]);
  } else if (priceOption[1] === "max") {
    return "Trên " + replaceMillion(priceOption[0]);
  }

  return replaceMillion(priceOption[0]) + " đến " + replaceMillion(priceOption[1]);
};

const MiscUtils = {
  makeCaterogyBreadcrumbs,
  toVND,
  calculateDiscountedPrice,
  generatePriceOptions,
  readablePriceOption,
};

export default MiscUtils;
