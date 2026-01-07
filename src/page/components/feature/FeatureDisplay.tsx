import type { Feature } from "../../../model/featureList";
import styles from "./FeatureDisplay.module.css";

type FeatureDisplayProps = {
  feature: Feature;
};

export const FeatureDisplay = ({ feature }: FeatureDisplayProps) => {
  return <span className={styles.content}>{feature.description}</span>;
};
