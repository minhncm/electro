import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";

const authState = {
  user: null,
  currentSignupUserId: null,
};

const useAuthStore = create(
  devtools(
    persist(
      (set) => ({
        ...authState,
        setUser: (user) => set(() => ({ user }), false, "AuthStore/setUser"),
        resetAuthState: () =>
          set(() => ({ ...authState }), false, "AuthStore/resetAuthState"),
        updateCurrentSignupUserId: (value) =>
          set(
            () => ({ currentSignupUserId: value }),
            false,
            "AuthStore/updateCurrentSignupUserId",
          ),
      }),
      {
        name: "electro-auth-store",
        storage: createJSONStorage(() => localStorage),
      },
    ),
    { name: "AuthStore", anonymousActionType: "AuthStore" },
  ),
);

export default useAuthStore;
