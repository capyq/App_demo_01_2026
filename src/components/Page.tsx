import { useEffect } from "react";
import { useStore } from "../store/useStore";
import { Content } from "./Content";
import { MainHeader } from "./MainHeader";
import { Menu } from "./Menu";
import styles from "./Page.module.css";

export const Page = () => {
  const { setList } = useStore();

  useEffect(() => {
    const run = async () => {
      const response = await fetch("/api/data.json");
      const data = await response.json();
      setList(data);
    };

    run();
  }, [setList]);

  return (
    <main className={styles.mainPage}>
      <MainHeader />
      <section className={styles.mainPage__content}>
        <Menu />
        <Content />
      </section>
    </main>
  );
};
