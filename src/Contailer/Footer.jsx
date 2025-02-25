import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import logo from "../Assects/images/newlogo.png";

const Footer = () => {
  return (
    <footer className="bg-[#0A1128] text-white py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
        <div className="flex flex-col items-start space-y-2  p-24">
          <div className="flex items-center space-x-2">
            <img src={logo} alt="Logo" className="w-10 h-10" />
            <span className="text-lg font-bold">Amar Kumar Prajapati</span>
          </div>
          <p className="text-sm">
            © 2024 Amar Kumar Prajapati. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="w-6 h-6 hover:text-blue-500 transition-colors duration-200" />
            </a>
            <a
              href="https://instagram.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="w-6 h-6 hover:text-pink-500 transition-colors duration-200" />
            </a>
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn className="w-6 h-6 hover:text-blue-600 transition-colors duration-200" />
            </a>
            <a
              href="https://github.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="w-6 h-6 hover:text-gray-400 transition-colors duration-200" />
            </a>
          </div>
        </div>

        <div className="flex flex-col space-y-2 p-24">
          <h2 className="text-lg font-semibold">Quick Links</h2>
          <a href="/web-page" className="hover:underline">
            Web page
          </a>
          <a href="/online-shop" className="hover:underline">
            Online shop
          </a>
          <a href="/seo-optimization" className="hover:underline">
            SEO optimization
          </a>
          <a href="/counseling" className="hover:underline">
            Counseling
          </a>
        </div>

        <div className="flex flex-col space-y-3 p-24">
          <h2 className="text-lg font-semibold">
            Download online sales trends in Slovenia for 2024
          </h2>
          <p className="text-sm">
            Enter your email and we will send you our detailed analysis of the
            Slovenian online store market.
          </p>
          <form className="flex flex-col space-y-2">
            <input
              type="email"
              placeholder="E-mail address"
              className="px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none"
            />
            <input
              type="text"
              placeholder="Your name"
              className="px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-300"
            >
              I want to receive trends
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
