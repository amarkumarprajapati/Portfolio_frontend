import React, { useState, useEffect } from "react";
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
import NavbarRes from "../Components/common/NavbarRes";

const IndexRoutes = () => {
  const [serverStarting, setServerStarting] = useState(true);

  useEffect(() => {
    const checkServerStatus = async () => {
      try {
        await fetch("/api/server");
        setServerStarting(false);
      } catch (error) {
        console.error("Failed to start server:", error);
      }
    };

    checkServerStatus();
  }, []);

  return (
    <div>
      {serverStarting ? (
        <div>
          <h1>Server is starting...</h1>
        </div>
      ) : (
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <div>
                  <Navbar />
                  <Hero />
                  <Services />
                  <Works />
                  <Experience />
                  <Skills />
                  <Blogs />
                  <Connect />
                  <Footer />
                </div>
              }
            />
            <Route
              path="/contact"
              element={
                <div>
                  <NavbarRes />
                  <Contact />
                  <Footer />
                </div>
              }
            />
          </Routes>
        </Router>
      )}
    </div>
  );
};

export default IndexRoutes;
