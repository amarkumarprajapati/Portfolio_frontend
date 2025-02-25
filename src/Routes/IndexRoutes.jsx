import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Hero from "../Contailer/Hero";
import Contact from "../Contailer/contact me/Contact";
import Footer from "../Contailer/Footer";
import Navbar from "../Components/common/Navbar";
import NavbarRes from "../Components/common/NavbarRes";


const IndexRoutes = () => {
  const [serverStarting, setServerStarting] = useState(true);

  useEffect(() => {
    const checkServerStatus = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 3000)); // Simulate a loading delay
        setServerStarting(false);
      } catch (error) {
        console.error("Error during server check:", error);
      }
    };

    checkServerStatus();
  }, []);

  return (
    <div>
      {serverStarting ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            backgroundColor: "#f4f4f4",
          }}
        >
          {/* New SVG Loader */}
          <svg className="pl" width="240" height="240" viewBox="0 0 240 240">
            <circle
              className="pl__ring pl__ring--a"
              cx="120"
              cy="120"
              r="105"
              fill="none"
              stroke="#000"
              strokeWidth="20"
              strokeDasharray="0 660"
              strokeDashoffset="-330"
              strokeLinecap="round"
            ></circle>
            <circle
              className="pl__ring pl__ring--b"
              cx="120"
              cy="120"
              r="35"
              fill="none"
              stroke="#000"
              strokeWidth="20"
              strokeDasharray="0 220"
              strokeDashoffset="-110"
              strokeLinecap="round"
            ></circle>
            <circle
              className="pl__ring pl__ring--c"
              cx="85"
              cy="120"
              r="70"
              fill="none"
              stroke="#000"
              strokeWidth="20"
              strokeDasharray="0 440"
              strokeLinecap="round"
            ></circle>
            <circle
              className="pl__ring pl__ring--d"
              cx="155"
              cy="120"
              r="70"
              fill="none"
              stroke="#000"
              strokeWidth="20"
              strokeDasharray="0 440"
              strokeLinecap="round"
            ></circle>
          </svg>
        </div>
      ) : (
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <MainLayout>
                  <Hero />
                </MainLayout>
              }
            />
            <Route
              path="/contact"
              element={
                <ContactLayout>
                  <Contact />
                  <Footer />
                </ContactLayout>
              }
            />
          </Routes>
        </Router>
      )}
    </div>
  );
};

const MainLayout = ({ children }) => {
  const location = useLocation();

  return (
    <div>
      <Navbar />
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

const ContactLayout = ({ children }) => {
  const location = useLocation();

  return (
    <div>
      <NavbarRes />
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default IndexRoutes;
