import { propertyCategories } from "../content/content";
import { PropertyCategoryPage } from "./PropertyCategoryPage";

export function SingleFamilyHomes() {
  return <PropertyCategoryPage category={propertyCategories.find((c) => c.slug === "single-family-homes")!} />;
}
