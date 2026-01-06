import { useMemo } from "react";
import { useStore } from "../store/useStore";
import styles from "./Content.module.css";

export const Content = () => {
  const { selectedItem, list } = useStore();
  const content = useMemo(
    () => list.find((item) => item.id === selectedItem),
    [selectedItem, list]
  );

  return <article className={styles.content}>{content?.description}</article>;
};
