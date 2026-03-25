import Navbar from "./components/Navbar";
import HeroSlider from "./components/HeroSlider";
import ProductCards from "./components/ProductCards";
import About from "./components/About";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import { useRef, useState } from "react";

function App() {
  const formRef = useRef(null);
  const [selectedProduct, setSelectedProduct] = useState("");

  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
    formRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToForm = () => {
    formRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Navbar />
      <HeroSlider onScrollToForm={scrollToForm} />
      <ProductCards onSelectProduct={handleSelectProduct} />
      <About />

      <div ref={formRef}>
        <ContactForm selectedProduct={selectedProduct} />
      </div>

      <Footer />
    </div>
  );
}

export default App;