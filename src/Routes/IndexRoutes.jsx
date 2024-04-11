import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Contailer/Hero";
import Works from "../Contailer/Works";
import Skills from "../Contailer/Skills";
import Experience from "../Contailer/Experience";
import Services from "../Contailer/Services";
import Blogs from "../Contailer/Blogs";
import Connect from "../Contailer/Connect";
import Footer from "../Contailer/Footer";



const IndexRoutes = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services/>
      <Works />
      <Experience/>
      <Skills />
      <Blogs/>
      <Connect/>
      <Footer/>
    </div>
  );
};

export default IndexRoutes;
