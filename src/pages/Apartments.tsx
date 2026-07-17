import { propertyCategories } from "../content/content";
import { PropertyCategoryPage } from "./PropertyCategoryPage";

export function Apartments() {
  return <PropertyCategoryPage category={propertyCategories.find((c) => c.slug === "apartments")!} />;
}
