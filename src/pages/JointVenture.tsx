import { propertyCategories } from "../content/content";
import { PropertyCategoryPage } from "./PropertyCategoryPage";

export function JointVenture() {
  return <PropertyCategoryPage category={propertyCategories.find((c) => c.slug === "joint-venture")!} />;
}
