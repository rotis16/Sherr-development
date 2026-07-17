import { Route, Routes } from "react-router-dom";
import { RootLayout } from "./layouts/RootLayout";
import { BlueBoxManagement } from "./pages/BlueBoxManagement";
import { CommercialProperties } from "./pages/CommercialProperties";
import { CompanyHistory } from "./pages/CompanyHistory";
import { CompanyProfile } from "./pages/CompanyProfile";
import { Contact } from "./pages/Contact";
import { Employment } from "./pages/Employment";
import { Gallery } from "./pages/Gallery";
import { Home } from "./pages/Home";
import { JointVenture } from "./pages/JointVenture";
import { MultifamilyHousing } from "./pages/MultifamilyHousing";
import { NotFound } from "./pages/NotFound";
import { SingleFamilyHomes } from "./pages/SingleFamilyHomes";
import { Team } from "./pages/Team";

export default function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="company-history" element={<CompanyHistory />} />
        <Route path="company-profile" element={<CompanyProfile />} />
        <Route path="team" element={<Team />} />
        <Route path="blue-box-management" element={<BlueBoxManagement />} />
        <Route path="joint-venture" element={<JointVenture />} />
        <Route path="multifamily-housing" element={<MultifamilyHousing />} />
        <Route path="single-family-homes" element={<SingleFamilyHomes />} />
        <Route path="commercial-properties" element={<CommercialProperties />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="employment" element={<Employment />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
