import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { showToast } from "../../utils/tostify";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("Services");
  const [isLoading, setIsLoading] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  let navigate = useNavigate();

  const hireme = () => {
    setIsLoading(true);
    setTimeout(() => {
      if (window.location.pathname !== "/") {
        showToast();
      } else {
        navigate("/contact");
      }
      setIsLoading(false);
    }, 1000);
  };

  const handleSectionClick = (sectionName) => {
    setActiveSection(sectionName);
    setMenuOpen(false);
    console.log("Active Section:", sectionName);
  };

  const underlineVariants = {
    hidden: { width: 0 },
    visible: { width: "100%" },
  };

  return (
    <div className="w-full bg-white shadow-md">
      <div className="flex justify-between items-center px-6 py-4 md:px-10">
        <div className="flex items-center gap-4">
          <img
            onClick={() => navigate("/")}
            src="/src/Assects/images/newlogo.png"
            className="w-12 md:w-16 cursor-pointer"
            alt="Logo"
          />
          <h1 className="hidden md:block">Amarkumarprajapati@gmail.com</h1>
        </div>
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        <ul className="hidden md:flex flex-row gap-8 font-semibold cursor-pointer">
          {[
            "Services",
            "Works",
            "Resume",
            "Skills",
            "Testimonials",
            "Contact",
          ].map((section) => (
            <motion.li
              key={section}
              whileHover={{ borderBottomWidth: "2px" }}
              variants={underlineVariants}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              className={`text-lg list-none ${
                activeSection === section
                  ? "border-b-2 border-blue-500 text-blue-900"
                  : ""
              }`}
              onClick={() => handleSectionClick(section)}
            >
              {section}
            </motion.li>
          ))}
        </ul>
        <button
          onClick={hireme}
          className="hidden md:block bg-gradient-to-r from-blue-500 to-blue-800 text-white py-3 px-10 rounded-full relative"
        >
          {isLoading ? (
            <div className="absolute inset-0 flex items-center justify-center">
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 4.418 3.582 8 8 8v-4c-1.793 0-3.469-.603-4.799-1.709l1.414-1.414zM20 12a8 8 0 01-8 8v4c4.418 0 8-3.582 8-8h-4zm-2-5.291A7.962 7.962 0 0120 12h4c0-4.418-3.582-8-8-8v4c1.793 0 3.469.603 4.799 1.709l-1.414 1.414z"
                ></path>
              </svg>
            </div>
          ) : (
            "Hire Me"
          )}
        </button>
      </div>
      {menuOpen && (
        <ul className="flex flex-col items-center gap-4 font-semibold md:hidden bg-white shadow-md py-4">
          {[
            "Services",
            "Works",
            "Resume",
            "Skills",
            "Testimonials",
            "Contact",
          ].map((section) => (
            <li
              key={section}
              className={`text-lg list-none ${
                activeSection === section ? "text-blue-900" : ""
              }`}
              onClick={() => handleSectionClick(section)}
            >
              {section}
            </li>
          ))}
          <button
            onClick={hireme}
            className="bg-gradient-to-r from-blue-500 to-blue-800 text-white py-2 px-6 rounded-full relative"
          >
            {isLoading ? (
              <div className="absolute inset-0 flex items-center justify-center">
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 4.418 3.582 8 8 8v-4c-1.793 0-3.469-.603-4.799-1.709l1.414-1.414zM20 12a8 8 0 01-8 8v4c4.418 0 8-3.582 8-8h-4zm-2-5.291A7.962 7.962 0 0120 12h4c0-4.418-3.582-8-8-8v4c1.793 0 3.469.603 4.799 1.709l-1.414 1.414z"
                  ></path>
                </svg>
              </div>
            ) : (
              "Hire Me"
            )}
          </button>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
