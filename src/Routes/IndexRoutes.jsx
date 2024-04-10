import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Contailer/Hero";
import Works from "../Contailer/Works";
import Skills from "../Contailer/Skills";
import Experience from "../Contailer/Experience";
import Services from "../Contailer/Services";
import Blogs from "../Contailer/Blogs";
import Connect from "../Contailer/Connect";



const IndexRoutes = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Works />
      <Services/>
      <Experience/>
      <Skills />
      <Blogs/>
      <Connect/>
    </div>
  );
};

export default IndexRoutes;
