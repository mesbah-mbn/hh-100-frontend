import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import HeroSlider from "./components/HeroSlider";
import About from "./components/About";
import Footer from "./components/Footer";
import MultiStepForm from "./components/MultiStepForm";
import PrivacyPolicy from "./components/PrivacyPolicy";
import ContactForm from "./components/ContactForm";
import WebsiteContext from "./components/WebsiteContext";
import FlashCard from "./components/FlashCard";
import Impressum from "./pages/Impressum";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <br />
              <MultiStepForm />
              <FlashCard />
              <HeroSlider />
              <WebsiteContext />
              <ContactForm />
              <About />
            </>
          }
        />

        <Route path="/datenschutz" element={<PrivacyPolicy />} />
        <Route path="/impressum" element={<Impressum />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
