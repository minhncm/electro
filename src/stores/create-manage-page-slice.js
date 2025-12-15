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
});
