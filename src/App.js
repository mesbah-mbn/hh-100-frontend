import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import HeroSlider from "./components/HeroSlider";
import About from "./components/About";
import Footer from "./components/Footer";
import MultiStepForm from "./components/MultiStepForm";
import PrivacyPolicy from "./components/PrivacyPolicy";
import ContactForm from "./components/ContactForm";

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
              <HeroSlider />
              <ContactForm />
              <About />
            </>
          }
        />

        <Route
          path="/datenschutz"
          element={<PrivacyPolicy />}
        />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;