export type ListItem = {
  id: string;
  name: string;
  description: string;
};

export type List = ListItem[];

export type ThemeValue = "light" | "dark";

export type ThemeType = {
  theme: ThemeValue;
  setTheme: React.Dispatch<React.SetStateAction<ThemeValue>>;
};

export type ListType = {
  list: List;
  setList: React.Dispatch<React.SetStateAction<List>>;
};

export type SelectedItemType = {
  selectedItem: string | null;
  setSelectedItem: React.Dispatch<React.SetStateAction<string | null>>;
};

export type StoreType = ThemeType & ListType & SelectedItemType;
