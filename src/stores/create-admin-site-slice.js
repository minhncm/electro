const initialAdminSiteState = {
  opened: false,
};

const createAdminSiteSlice = (set) => ({
  ...initialAdminSiteState,
  toggleOpened: () => set((state) => ({ opened: !state.opened })),
});

export default createAdminSiteSlice;
