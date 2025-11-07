const makeCaterogyBreadcrumbs = (category) => {
  if (!category.categoryParent) {
    return [category];
  }

  return [...makeCaterogyBreadcrumbs(category.categoryParent), category];
};

const MiscUtils = {
  makeCaterogyBreadcrumbs,
};

export default MiscUtils;
