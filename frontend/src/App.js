import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import CursorEffect from "./components/CursorEffect"; // Import CursorEffect
import { Routes, Route } from 'react-router-dom';
import Photography from "./pages/Photography";
import Blog from "./pages/Blog";
import Page from "./components/Page";

const App = () => {
  return (
    <>
      <CursorEffect /> {/* Add this to use the component */}
      <Navbar />
      <Page />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/photography" element={<Photography />} />
        <Route path="/blog" element={<Blog />} /> 
      </Routes>
      <Footer />
    </>
  );
};

export default App;
