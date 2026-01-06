import { createContext, useEffect, useMemo, useState } from "react";
import type { List, StoreType, ThemeValue } from "./types";

// eslint-disable-next-line react-refresh/only-export-components
export const StoreContext = createContext<StoreType>({} as StoreType);

export function StoreProvider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [theme, setTheme] = useState<ThemeValue>("light");
  const [list, setList] = useState<List>([]);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const value = useMemo(
    () => ({ theme, setTheme, list, setList, selectedItem, setSelectedItem }),
    [list, theme, selectedItem]
  );

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
}
