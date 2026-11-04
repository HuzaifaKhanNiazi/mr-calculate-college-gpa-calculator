import HomePage from "./pages/Homepage.jsx";
import GpaCalculator from "./components/Gpacalculator.jsx";
import Layout from "./components/Layout.jsx";
import NotFoundPage from "./pages/404.jsx";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./pages/AboutUs.jsx";
import { FAQS } from "./pages/FAQS.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import TermsOfUse from "./pages/TermsOfUse.jsx";
function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/college-gpa-calculator" element={<GpaCalculator />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/faqs" element={<FAQS />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
export default App;
