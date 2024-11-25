import React, { useEffect, useState } from "react";
import { SocialIcon } from "react-social-icons";
import profileimage from "/src/Assects/images/myimage.png";
import axiosInstance from "../Services/apiResponce";
import { showToast } from "../utils/tostify";
import { endpoint } from "../Services/endpoint";
import Details from "./Details";
import Services from "./Services";
import Works from "./Works";
import Experience from "./Experience";
import Skills from "./Skills";
import Blogs from "./Blogs";
import Connect from "./Connect";
import Footer from "./Footer";

const Hero = () => {
  const [loading, setLoading] = useState(true);
  const [downloading, setDownloading] = useState(false);
  const [herosection, setHeroSection] = useState("");
  const [retry, setRetry] = useState(false);
  const [timeoutReached, setTimeoutReached] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const heroDataResponse = await axiosInstance.get(`${endpoint.hero}`);
        setHeroSection(heroDataResponse.data);
        setLoading(false);
      } catch (error) {
        showToast("Error fetching data", "error");
        setLoading(false);
        setTimeoutReached(true);
      }
    };

    const timer = setTimeout(() => {
      if (loading) {
        setTimeoutReached(true);
      }
    }, 5000);

    fetchData();

    return () => clearTimeout(timer);
  }, [retry]);

  const handleRetry = () => {
    setRetry((prev) => !prev);
    setLoading(true);
    setTimeoutReached(false);
  };

  const download = () => {
    setDownloading(true);

    axiosInstance
      .post(`${endpoint.downloadcv}`, {}, { responseType: "blob" })
      .then((response) => {
        const blob = new Blob([response.data], { type: "application/pdf" });
        const blobUrl = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = blobUrl;
        link.setAttribute("download", "Amar Kumar Prajapati.pdf");
        document.body.appendChild(link);
        link.click();
        link.remove();

        showToast("Download started", "success");
      })
      .catch(() => {
        showToast("Error starting download", "error");
      })
      .finally(() => {
        setDownloading(false);
      });
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="spinner"></div>
        <p className="mt-4 text-gray-600">
          Please wait while requesting to the server to start
        </p>
        {timeoutReached && (
          <button
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
            onClick={handleRetry}
          >
            Retry
          </button>
        )}
      </div>
    );
  }

  const herosectiondata = herosection[0] || {};
  return (
    <div>
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
            disabled={downloading}
            className="w-56 h-12 font-bold rounded-full border-2 border-blue-500 relative flex items-center justify-center"
          >
            {downloading ? (
              <>
                <div className="spinner"></div>
              </>
            ) : (
              "Download CV"
            )}
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

      <Details herosection={herosection} />
      <Services herosection={herosection} />
      <Works />
      <Experience herosection={herosection} />
      <Skills />
      <Blogs />
      <Connect />
      <Footer />
    </div>
  );
};

export default Hero;
