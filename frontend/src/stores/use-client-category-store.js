const { create } = require("zustand");
const { devtools } = require("zustand/middleware");

const initialClientCategoryState = {
  totalProducts: 0,
  activePage: 1,
  activeBrandFilter: null,
  activePriceFilter: null,
  activeSort: "latest",
  activeSearch: null,
  activeSaleable: false,
};

const useClientCategoryStore = create(
  devtools(
    (set) => ({
      ...initialClientCategoryState,
      updateTotalProducts: (value) =>
        set(
          () => ({ totalProducts: value }),
          false,
          "ClientCategoryStore/updateTotalProducts",
        ),
      updateActivePage: (value) =>
        set(
          () => ({ activePage: value }),
          false,
          "ClientCategoryStore/updateActivePage",
        ),
      updateActiveBrandFilter: (value) =>
        set(
          () => ({ activeBrandFilter: value }),
          false,
          "ClientCategoryStore/updateActiveBrandFilter",
        ),
      updateActivePriceFilter: (value) =>
        set(
          () => ({ activePriceFilter: value }),
          false,
          "ClientCategoryStore/updateActivePriceFilter",
        ),
      updateActiveSort: (value) =>
        set(
          () => ({ activeSort: value }),
          false,
          "ClientCategoryStore/updateActiveSort",
        ),
      updateActiveSearch: (value) =>
        set(
          () => ({ activeSearch: value }),
          false,
          "ClientCategoryStore/updateActiveSearch",
        ),

      updateActiveSaleable: (value) =>
        set(
          () => ({ activeSaleable: value }),
          false,
          "ClientCategoryStore/updateActiveSaleable",
        ),
      resetClientCategoryState: () =>
        set(
          initialClientCategoryState,
          false,
          "ClientCategoryStore/resetClientCategoryState",
        ),
    }),
    { name: "ClientCategoryStore", anonymousActionType: "ClientCategoryStore" },
  ),
);

export default useClientCategoryStore;
