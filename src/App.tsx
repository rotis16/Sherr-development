import { Route, Routes } from "react-router-dom";
import { RootLayout } from "./layouts/RootLayout";
import { Apartments } from "./pages/Apartments";
import { CommercialProperties } from "./pages/CommercialProperties";
import { CompanyProfile } from "./pages/CompanyProfile";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";
import { Homes } from "./pages/Homes";
import { JointVenture } from "./pages/JointVenture";
import { NotFound } from "./pages/NotFound";
import { Team } from "./pages/Team";

export default function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="company-profile" element={<CompanyProfile />} />
        <Route path="team" element={<Team />} />
        <Route path="homes" element={<Homes />} />
        <Route path="apartments" element={<Apartments />} />
        <Route path="commercial-properties" element={<CommercialProperties />} />
        <Route path="joint-venture" element={<JointVenture />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
