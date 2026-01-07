import type { Feature } from "../model/featureList";

export const getFeatureList = async () => {
  const response = await fetch("/api/data.json");
  console.log("🚀 ~ getFeatureList ~ response:", response);
  const data: Feature[] = await response.json();
  return data;
};
