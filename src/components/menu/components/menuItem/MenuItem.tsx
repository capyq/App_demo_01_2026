import clsx from "clsx";
import styles from "./MenuItem.module.css";

type MenuItemProps<T extends { id: number; name: string }> = {
  // props
  item: T;
  isSelected: boolean;
  onSelect: (item: T) => void;
};

export const MenuItem = <T extends { id: number; name: string }>({
  item,
  isSelected,
  onSelect,
}: MenuItemProps<T>) => {
  const displayStyle = clsx(styles.menuItem, {
    [styles.menuItem__selected]: isSelected,
  });
  return (
    <div onClick={() => onSelect(item)} className={displayStyle}>
      {item.name}
    </div>
  );
};
