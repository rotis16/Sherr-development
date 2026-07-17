import { propertyCategories } from "../content/content";
import { PropertyCategoryPage } from "./PropertyCategoryPage";

export function CommercialProperties() {
  return (
    <PropertyCategoryPage category={propertyCategories.find((c) => c.slug === "commercial-properties")!} />
  );
}
