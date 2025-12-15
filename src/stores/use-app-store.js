import SetStateAction from "react";
import create, { StateCreate } from "zustand";
import { devtools } from "zustand/middleware";
import { CreateTrackedSelector } from "react-tracked";

export const extractValue = (state, value, key) => ({
  [key]: typeof value === "function" ? value(state[key]) : value,
});

const useAppStore = create(
    devtools(
        
    )
);