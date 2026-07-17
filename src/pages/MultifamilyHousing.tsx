import { propertyCategories } from "../content/content";
import { PropertyCategoryPage } from "./PropertyCategoryPage";

export function MultifamilyHousing() {
  return <PropertyCategoryPage category={propertyCategories.find((c) => c.slug === "multifamily-housing")!} />;
}
