import { useEffect, useState } from "react";
import styles from "./MainPage.module.css";
import { getFeatureList } from "../data-access/featureList";
import type { Feature } from "../model/featureList";
import { Menu } from "../components/menu/Menu";
import { FeatureDisplay } from "./components/feature/FeatureDisplay";

export const MainPage = () => {
  const [selectedFeature, setSelectedFeature] = useState<Feature>();
  const [data, setData] = useState<Feature[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getFeatureList();
        setData(result);
      } catch (error) {
        console.error("Error fetching feature list:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className={styles.mainPage}>
      <Menu
        items={data}
        onSelectItem={setSelectedFeature}
        selectedItemId={selectedFeature?.id}
      />
      {selectedFeature && <FeatureDisplay feature={selectedFeature} />}
    </section>
  );
};
