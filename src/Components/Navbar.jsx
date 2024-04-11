import React, { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("Services");

  const handleSectionClick = (sectionName) => {
    setActiveSection(sectionName);
    console.log("Active Section:", sectionName);
  };

  const underlineVariants = {
    hidden: { width: 0 },
    visible: { width: "100%" }
  };

  return (
    <div>
      <div>
        <div className="justify-between items-center flex px-10 py-10 ">
          <div className=" flex justify-center items-center flex-row gap-5  mx-28 font-semibold">
            <img
              src="/src/Assects/images/newlogo.png"
              className="w-16"
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
                    ? "border-b-2 border-blue-500 text-2xl text-blue-900"
                    : ""
                }`}
                onClick={() => handleSectionClick("Services")}
              >
                Services
              </motion.li>
              <motion.li
                whileHover={{ borderBottomWidth: "2px" }}
                variants={underlineVariants}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className={`text-lg list-none ${
                  activeSection === "Works"
                    ? "border-b-2 border-blue-500 text-2xl text-blue-900"
                    : ""
                }`}
                onClick={() => handleSectionClick("Works")}
              >
                Works
              </motion.li>
              <motion.li
                whileHover={{ borderBottomWidth: "2px" }}
                variants={underlineVariants}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className={`text-lg list-none ${
                  activeSection === "Resume"
                    ? "border-b-2 border-blue-500 text-2xl text-blue-900"
                    : ""
                }`}
                onClick={() => handleSectionClick("Resume")}
              >
                Resume
              </motion.li>
              <motion.li
                whileHover={{ borderBottomWidth: "2px" }}
                variants={underlineVariants}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className={`text-lg list-none ${
                  activeSection === "Resume"
                    ? "border-b-2 border-blue-500 text-2xl text-blue-900"
                    : ""
                }`}
                onClick={() => handleSectionClick("Skills")}
              >
                Skills
              </motion.li>
              <motion.li
                whileHover={{ borderBottomWidth: "2px" }}
                variants={underlineVariants}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className={`text-lg list-none ${
                  activeSection === "Resume"
                    ? "border-b-2 border-blue-500 text-2xl text-blue-900"
                    : ""
                }`}
                onClick={() => handleSectionClick("Testimonials")}
              >
                Testimonials
              </motion.li>
              <motion.li
                whileHover={{ borderBottomWidth: "2px" }}
                variants={underlineVariants}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className={`text-lg list-none ${
                  activeSection === "Resume"
                    ? "border-b-2 border-blue-500 text-2xl text-blue-900"
                    : ""
                }`}
                onClick={() => handleSectionClick("Contact")}
              >
                Contact
              </motion.li>
              
            </ul>
            <button className="bg-gradient-to-r from-blue-500 to-blue-800 text-white py-3 w-[150px] px-10 rounded-full">
              Hire Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
