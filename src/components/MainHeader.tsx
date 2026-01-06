import { useCallback, useMemo } from "react";
import { useStore } from "../store/useStore";
import styles from "./MainHeader.module.css";

export const MainHeader = () => {
  const { setTheme, theme } = useStore();

  const handleChangeTheme = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const isChecked = event.target.checked;
      setTheme(isChecked ? "dark" : "light");
    },
    [setTheme]
  );

  const labelValue = useMemo(
    () => (theme === "dark" ? "Disable Dark Mode" : "Enable Dark Mode"),
    [theme]
  );

  return (
    <header className={styles.mainHeader}>
      <h1>Feature List</h1>
      <div className={styles.mainHeader__toggle}>
        <input type="checkbox" id="themeToggle" onChange={handleChangeTheme} />
        <label htmlFor="themeToggle">{labelValue}</label>
      </div>
    </header>
  );
};
