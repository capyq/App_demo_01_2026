import { useTheme } from "../../context/ThemeContext";
import styles from "./HeaderApp.module.css";

export const HeaderApp = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <section className={styles.headerApp}>
      <h1>Feature List</h1>
      <div className={styles.headerApp__toggle}>
        <label htmlFor="switch-theme">Enable Dark Mode</label>
        <input
          type="checkbox"
          id="switch-theme"
          checked={theme === "dark"}
          onChange={toggleTheme}
        />
      </div>
    </section>
  );
};
