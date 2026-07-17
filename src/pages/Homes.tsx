import { propertyCategories } from "../content/content";
import { PropertyCategoryPage } from "./PropertyCategoryPage";

export function Homes() {
  return <PropertyCategoryPage category={propertyCategories.find((c) => c.slug === "homes")!} />;
}
