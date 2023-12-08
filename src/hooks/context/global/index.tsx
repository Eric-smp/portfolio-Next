import { useState, useEffect, useMemo, useContext, createContext } from "react";
import { GlobalProps, ChildrenType } from "@/types";

export const stateInitial: GlobalProps = {
  visibleMenuMobile: false,
  setVisibleMenuMobile: () => {},
};

const GlobalContext = createContext<GlobalProps>(stateInitial);

function GlobalProvider({ children }: ChildrenType) {
  const [visibleMenuMobile, setVisibleMenuMobile] = useState<boolean>(false);

  useEffect(() => {}, []);

  const value = useMemo(
    () => ({
      visibleMenuMobile,
      setVisibleMenuMobile,
    }),
    [visibleMenuMobile]
  );

  return (
    <GlobalContext.Provider value={value}> {children}</GlobalContext.Provider>
  );
}

const useGlobal = () => useContext(GlobalContext);

export { GlobalProvider, useGlobal };
