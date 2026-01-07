import styles from "./Page.module.css";

export const Page = () => {
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
