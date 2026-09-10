import * as PageConfig from "~/pages/PageConfig";
import { extractValue } from "~/stores/use-app-store";

const initialManagePageState = {
  activePage: PageConfig.initialListResponse.page,
  activePageSize: PageConfig.initialListResponse.size,
  activeFilter: null,
  searchToken: "",
  selection: [],
  filters: [],
  activeFilterPanel: false,
};

const createManagePageSlice = (set, get) => ({
  ...initialManagePageState,
  setActivePage: (value) => set((state) => extractValue(state, value, "activePage"), false, "AppStore/activePage"),
  setActivePageSize: (value) =>
    set((state) => extractValue(state, value, "activePageSize"), false, "AppStore/activePageSize"),
  setActiveFilter: (value) =>
    set((state) => extractValue(state, value, "activeFilter"), false, "AppStore/activeFilter"),
  setSearchToken: (value) => set((state) => extractValue(state, value, "searchToken"), false, "AppStore/searchToken"),
  setSelection: (value) => set((state) => extractValue(state, value, "selection"), false, "AppStore/selection"),
  setFilters: (value) => set((state) => extractValue(state, value, "filters"), false, "AppStore/filters"),
  setActiveFilterPanel: (value) =>
    set((state) => extractValue(state, value, "activeFilterPanel"), false, "AppStore/activeFilterPanel"),
  getRequestParams: () => ({
    page: get().activePage,
    size: get().activePageSize,
  }),
  resetManagePageState: () => set(initialManagePageState),
});

export default createManagePageSlice;
