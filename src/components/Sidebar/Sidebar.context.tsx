import { createContext, ReactNode, useContext, useMemo } from "react";
import type SidebarProps from "./Sidebar.types";

const SidebarContext = createContext<
  | {
      onLinkClick: SidebarProps["onLinkClick"];
    }
  | undefined
>(undefined);

function useSidebarContext() {
  const context = useContext(SidebarContext);

  if (context === undefined) {
    throw new Error(
      "useSidebarContext must be within a SidebarContext Provider!"
    );
  }

  return context;
}

function SidebarContextProvider({
  children,
  value: { onLinkClick },
}: {
  children: ReactNode;
  value: { onLinkClick: SidebarProps["onLinkClick"] };
}) {
  const memoizedValue = useMemo(
    () => ({
      onLinkClick,
    }),
    [onLinkClick]
  );

  return (
    <SidebarContext.Provider value={memoizedValue}>
      {children}
    </SidebarContext.Provider>
  );
}

export { useSidebarContext, SidebarContextProvider };
