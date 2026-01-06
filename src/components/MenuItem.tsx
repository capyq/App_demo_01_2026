import { useCallback } from "react";
import styles from "./MenuItem.module.css";
import { useStore } from "../store/useStore";
import clsx from "clsx";
import type { ListItem } from "../store/types";

export type MenuItemProps = { item: ListItem };
export const MenuItem = ({ item: { id, name } }: MenuItemProps) => {
  const { setSelectedItem, selectedItem } = useStore();

  const handleSelectRow = useCallback(() => {
    setSelectedItem(id);
  }, [id, setSelectedItem]);

  return (
    <button
      className={clsx(styles.menuItem, {
        [styles.menuItem__selected]: selectedItem === id,
      })}
      onClick={handleSelectRow}
    >
      {name}
    </button>
  );
};
