import { useContext } from "react";
import { StoreContext } from "./StoreProvider";
import type { StoreType } from "./types";

export function useStore() {
  const context = useContext<StoreType>(StoreContext);

  if (context === undefined) {
    throw new Error("useStore must be used within a ThemeProvider");
  }

  return context;
}
