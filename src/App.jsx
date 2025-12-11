// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import AboutUs from "./pages/About";
import Products from "./pages/Product";
import Services from "./pages/Services";
import WhatsNew from "./pages/Whats";
import Contact from "./pages/Contactus";

const Layout = ({ children }) => (
  <>
    <Navbar />
    <main className="min-h-screen">{children}</main>
    <Footer />
  </>
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout><Home /></Layout>} />
      <Route path="/about" element={<Layout><AboutUs /></Layout>} />
      <Route path="/products" element={<Layout><Products /></Layout>} />
      <Route path="/services" element={<Layout><Services /></Layout>} />
      <Route path="/whats-new" element={<Layout><WhatsNew /></Layout>} />
      <Route path="/contact" element={<Layout><Contact /></Layout>} />
    </Routes>
  );
}

export default App;