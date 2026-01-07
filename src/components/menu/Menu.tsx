import { MenuItem } from "./components/menuItem/MenuItem";
import styles from "./Menu.module.css";

type MenuProps<T extends { id: number; name: string }> = {
  // props
  items: T[];
  onSelectItem: (item: T) => void;
  selectedItemId?: number;
};

export const Menu = <T extends { id: number; name: string }>({
  items: features,
  onSelectItem: onSelectFeature,
  selectedItemId,
}: MenuProps<T>) => {
  return (
    <div className={styles.menu}>
      {features.map((feature) => (
        <MenuItem<T>
          key={feature.id}
          item={feature}
          isSelected={selectedItemId === feature.id} // You might want to manage selected state
          onSelect={onSelectFeature}
        />
      ))}
    </div>
  );
};
