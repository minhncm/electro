import useAppStore from "~/stores/use-app-store";

function useManagePaginationViewModel() {
  const { setSelection, activePage, setActivePage, activePageSize, setActivePageSize } = useAppStore();

  const handlePaginationButton = (page) => {
    if (page !== activePage) {
      setSelection([]);
      setActivePage(page);
    }
  };

  const handlePageSizeSelect = (size) => {
    const pageSize = Number(size);
    if (pageSize !== activePageSize) {
      setSelection([]);
      setActivePage(1);
      setActivePageSize(pageSize);
    }
  };

  return {
    activePage,
    activePageSize,
    handlePaginationButton,
    handlePageSizeSelect,
  };
}

export default useManagePaginationViewModel;
