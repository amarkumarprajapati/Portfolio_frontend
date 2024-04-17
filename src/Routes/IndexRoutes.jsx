import React from "react";
import Hero from "../Contailer/Hero";
import Works from "../Contailer/Works";
import Skills from "../Contailer/Skills";
import Experience from "../Contailer/Experience";
import Services from "../Contailer/Services";
import Blogs from "../Contailer/Blogs";
import Connect from "../Contailer/Connect";
import Navbar from "../Components/common/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "../Contailer/contact me/Contact";
import Footer from "../Contailer/Footer";

const IndexRoutes = () => {
  return (
    <div>
      
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Hero />
                <Navbar />
                <Hero />
                <Services />
                <Works />
                <Experience />
                <Skills />
                <Blogs />
                <Connect />
              </div>
            }
          />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
};

export default IndexRoutes;
