import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { createTrackedSelector } from "react-tracked";
import createManagePageSlice from "~/stores/create-manage-page-slice";

export const extractValue = (state, value, key) => ({
  [key]: typeof value === "function" ? value(state[key]) : value,
});

const useAppStore = create(
  devtools(
    (...methods) => ({
      ...createManagePageSlice(...methods),
    }),
    {
      name: "AppStore",
      anonymousActionType: "AppStore",
    },
  ),
);

export default createTrackedSelector(useAppStore);
