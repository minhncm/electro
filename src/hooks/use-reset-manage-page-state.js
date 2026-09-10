import { useEffect } from "react";
import useAppStore from "~/stores/use-app-store";

function useResetManagePageState() {
  const { resetManagePageState } = useAppStore();
  useEffect(() => {
    resetManagePageState();
  }, [resetManagePageState]);
}

export default useResetManagePageState;
