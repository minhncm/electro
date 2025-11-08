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

const calculateDiscoutedPrice = (price, discount) => (price * (100 - discount)) / 100;

const MiscUtils = {
  makeCaterogyBreadcrumbs,
  toVND,
  calculateDiscoutedPrice,
};

export default MiscUtils;
