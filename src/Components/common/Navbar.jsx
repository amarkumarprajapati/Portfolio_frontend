import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { showToast } from "../../utils/tostify";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("Services");
  const [isLoading, setIsLoading] = useState(false);
  let navigate = useNavigate();

  function hireme() {
    setIsLoading(true);
    setTimeout(() => {
      if (window.location.pathname !== "/") {
        showToast();
      } else {
        navigate("/contact");
      }
    }, 1000);
  }

  const handleSectionClick = (sectionName) => {
    setActiveSection(sectionName);
    console.log("Active Section:", sectionName);
  };

  const underlineVariants = {
    hidden: { width: 0 },
    visible: { width: "100%" },
  };

  return (
    <div>
      <div>
        <div className="justify-between items-center flex px-10 py-10 ">
          <div className=" flex justify-center items-center flex-row gap-5  mx-28 font-semibold">
            <img
              onClick={() => {
                navigate("/");
              }}
              src="/src/Assects/images/newlogo.png"
              className="w-16 cursor-pointer"
              alt=""
            />
            <h1>Amarkumarprajapati@gmail.com</h1>
          </div>
          <div className="flex flex-row gap-5 justify-center items-center mx-24">
            <ul className="flex flex-row gap-10 font-semibold  cursor-pointer">
              <motion.li
                whileHover={{ borderBottomWidth: "2px" }}
                variants={underlineVariants}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className={`text-lg list-none ${
                  activeSection === "Services"
                    ? "border-b-2 border-blue-500  text-blue-900"
                    : ""
                }`}
                onClick={() => handleSectionClick("Services")}>
                Services
              </motion.li>
              <motion.li
                whileHover={{ borderBottomWidth: "2px" }}
                variants={underlineVariants}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className={`text-lg list-none ${
                  activeSection === "Works"
                    ? "border-b-2 border-blue-500 text-blue-900"
                    : ""
                }`}
                onClick={() => handleSectionClick("Works")}>
                Works
              </motion.li>
              <motion.li
                whileHover={{ borderBottomWidth: "2px" }}
                variants={underlineVariants}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className={`text-lg list-none ${
                  activeSection === "Resume"
                    ? "border-b-2 border-blue-500 text-blue-900"
                    : ""
                }`}
                onClick={() => handleSectionClick("Resume")}>
                Resume
              </motion.li>
              <motion.li
                whileHover={{ borderBottomWidth: "2px" }}
                variants={underlineVariants}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className={`text-lg list-none ${
                  activeSection === "Skills"
                    ? "border-b-2 border-blue-500  text-blue-900"
                    : ""
                }`}
                onClick={() => handleSectionClick("Skills")}>
                Skills
              </motion.li>
              <motion.li
                whileHover={{ borderBottomWidth: "2px" }}
                variants={underlineVariants}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className={`text-lg list-none ${
                  activeSection === "Testimonials"
                    ? "border-b-2 border-blue-500 text-blue-900"
                    : ""
                }`}
                onClick={() => handleSectionClick("Testimonials")}>
                Testimonials
              </motion.li>
              <motion.li
                whileHover={{ borderBottomWidth: "2px" }}
                variants={underlineVariants}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className={`text-lg list-none ${
                  activeSection === "Contact"
                    ? "border-b-2 border-blue-500 text-blue-900"
                    : ""
                }`}
                onClick={() => handleSectionClick("Contact")}>
                Contact
              </motion.li>
            </ul>
            <button
              onClick={hireme}
              className="bg-gradient-to-r from-blue-500 to-blue-800 text-white py-3 w-[150px] px-10 h-12 rounded-full relative">
              {isLoading ? (
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 4.418 3.582 8 8 8v-4c-1.793 0-3.469-.603-4.799-1.709l1.414-1.414zM20 12a8 8 0 01-8 8v4c4.418 0 8-3.582 8-8h-4zm-2-5.291A7.962 7.962 0 0120 12h4c0-4.418-3.582-8-8-8v4c1.793 0 3.469.603 4.799 1.709l-1.414 1.414z"></path>
                  </svg>
                </div>
              ) : (
                "Hire Me"
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
