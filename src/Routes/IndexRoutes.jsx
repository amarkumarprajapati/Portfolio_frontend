import React from "react";
import Navbar from "../Components/Navbar";
import NavbarSlider from "../Components/NavbarSlider";
import Hero from "../Contailer/Hero";
import Works from "../Contailer/Works";
import Skills from "../Contailer/Skills";
import Experience from "../Contailer/Experience";
import Services from "../Contailer/Services";

const IndexRoutes = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Works />
      <Services/>
      <Experience/>
      <Skills />
    </div>
  );
};

export default IndexRoutes;
