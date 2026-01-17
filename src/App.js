import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";

import Home from "../src/pages/Home";
import Services from "../src/pages/Services";
import Portfolio from "../src/pages/Portfolio";
import Contact from "../src/pages/Contact";
import MentionsLegales from "../src/pages/MentionLegales";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mentions-legales" element={<MentionsLegales />} />
      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;
