import React from "react";
import { SocialIcon } from "react-social-icons";
import profileimage from "/src/Assects/images/myimage.png";
import Details from "./Details";
import Services from "./Services";
import Works from "./Works";
import Experience from "./Experience";
import Skills from "./Skills";
import Blogs from "./Blogs";
import Connect from "./Connect";
import Footer from "./Footer";

const Hero = () => {
  const herosectiondata = {
    name: "Amar Kumar Prajapati",
    designation: "Full Stack Developer",
    details: "I specialize in creating innovative solutions and building scalable web applications.",
  };

  const download = () => {
    const blob = new Blob([], { type: "application/pdf" });
    const blobUrl = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = blobUrl;
    link.setAttribute("download", "Amar Kumar Prajapati.pdf");
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    <div className="relative">
      {/* Snowfall Effect */}
      <div className="snowflakes" aria-hidden="true">
        <div className="snowflake">❅</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">❄</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">❄</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">❄</div>
      </div>

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row m-auto w-fit py-5">
        <div className="w-full lg:w-[830px] mt-10 flex flex-col gap-5">
          <h4 className="text-4xl font-bold text-blue-900">
            I am {herosectiondata.name}
          </h4>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-violet-800">
            {herosectiondata.designation}
          </h1>
          <p className="w-full sm:w-[80%] md:w-[60%] lg:w-[50%] text-lg">
            {herosectiondata.details}
          </p>
          <button
            onClick={download}
            className="w-56 h-12 font-bold rounded-full border-2 border-blue-500 relative flex items-center justify-center"
          >
            Download CV
          </button>

          <div className="flex flex-row gap-4 mt-5">
            <SocialIcon
              url="https://twitter.com/amarkumarprajap"
              target="_blank"
              rel="noopener noreferrer"
            />
            <SocialIcon
              url="https://quiet-mooncake-32763c.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            />
            <SocialIcon
              url="https://www.linkedin.com/in/amar-kumar-prajapati-76255072/"
              target="_blank"
              rel="noopener noreferrer"
            />
            <SocialIcon
              url="https://github.com/amarkumarprajapati"
              target="_blank"
              rel="noopener noreferrer"
            />
          </div>
        </div>

        <div className="bg-black mt-10 px-5 py-10 rounded-lg w-full md:w-auto">
          <img src={profileimage} alt="profile" className="w-full md:w-auto" />
        </div>
      </div>

      <Details herosection={[herosectiondata]} />
      <Services herosection={[herosectiondata]} />
      <Works />
      <Experience herosection={[herosectiondata]} />
      <Skills />
      <Blogs />
      <Connect />
      <Footer />
    </div>
  );
};

export default Hero;
