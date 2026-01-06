import { useStore } from "../store/useStore";
import styles from "./Menu.module.css";
import { MenuItem } from "./MenuItem";

export const Menu = () => {
  const { list } = useStore();
  return (
    <aside className={styles.menu}>
      {list?.map((item) => (
        <MenuItem key={item.id} item={item} />
      ))}
    </aside>
  );
};
