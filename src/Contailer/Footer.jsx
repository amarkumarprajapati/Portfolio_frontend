// import React from "react";

// const Footer = () => {
//   return (
//     <div>
//       <div className="bg-[#2A1454] h- ">
//         <div className=" w-fit m-auto px-5 py-5">
//           <img src="/src/Assects/images/newlogo.png" alt="" />
//         </div>
//         <div>
//             <ul className="flex text-white gap-10 text-lg  text-center justify-center">
//                 <li>Services</li>
//                 <li>Works</li>
//                 <li>Resume</li>
//                 <li>Skills</li>
//                 <li>Testimonials</li>
//                 <li>Contact</li>
//             </ul>
//         </div>
//         <div className="text-center flex flex-col px-4 py-4 text-lg text-blue-400 font-semibold">
//             <h1>© 2024 All rights reserved by ThemeJunction</h1>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;

import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  const openComponentBPage = () => {
    const componentBUrl = "/Contact";
    window.open(componentBUrl, "_blank");
  };

  return (
    <div className="flex flex-col md:flex-row justify-center bg-gradient-to-b from-violet-500 via-purple-500 to-blue-500 text-white py-16 md:py-24 gap-10 md:gap-52 px-6 md:px-0">
      <div className="flex flex-col mb-8 md:mb-12 md:mr-10">
        <h1 className="text-3xl md:text-4xl font-bold">
          Let's design something
          <br />
          <span className="text-blue-500">together?</span>
        </h1>
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={openComponentBPage}
          className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-yellow-400 hover:to-green-500 text-white py-3 md:py-4 px-8 md:px-5 rounded-full mt-4 md:mt-6 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50"
        >
          Contact Me
        </motion.button>
      </div>
      <div className="flex flex-col text-center md:text-left">
        <h1 className="text-2xl font-bold md:text-4xl mb-4">
          You can find me on
        </h1>
        <span className="text-blue-500 mb-2">Social media:</span>
        <div className="flex flex-col md:flex-col gap-4 md:gap-10">
          <a
            href="https://www.linkedin.com/in/amar-prajapati-76255072/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-yellow-400 hover:to-green-500 text-white py-3 md:py-4 px-8 md:px-10 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 mb-2 md:mb-0"
            >
              LinkedIn
            </motion.button>
          </a>
          <a
            href="https://github.com/amarkumarprajapati?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-yellow-400 hover:to-green-500 text-white py-3 md:py-4 px-8 md:px-10 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 mb-2 md:mb-0"
            >
              Github
            </motion.button>
          </a>
          <a
            href="https://www.facebook.com/amarkk1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-yellow-400 hover:to-green-500 text-white py-3 md:py-4 px-8 md:px-10 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 mb-2 md:mb-0"
            >
              Facebook
            </motion.button>
          </a>
          <a
            href="https://www.instagram.com/amarkumarprajapatikkr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-yellow-400 hover:to-green-500 text-white py-3 md:py-4 px-8 md:px-10 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50"
            >
              Instagram
            </motion.button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
