import React, { useEffect, useState } from "react";
import { SocialIcon } from "react-social-icons";
import Services from "./Services";
import profileimage from "/src/Assects/images/myimage.png";
import axiosInstance from "../Services/apiResponce";
import { showToast } from "../utils/tostify";
import { endpoint } from "../Services/endpoint";
import Works from "./Works";
import Skills from "./Skills";
import Blogs from "./Blogs";
import Connect from "./Connect";
import Footer from "./Footer";
import Experience from "./Experience";
import Details from "./Details";

const Hero = () => {
  const [getdata, setGetData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [serverStatus, setServerStatus] = useState("");
  const [downloading, setDownloading] = useState(false);
  const [error, setError] = useState(null);
  const [herosection, setHeroSection] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const currentTime = new Date().toISOString();
        const totalTimeSpent = calculateTotalTimeSpent();
        const userData = {
          timeenter: currentTime,
          totaltimewait: totalTimeSpent,
        };

        await axiosInstance.post(`${endpoint.usertrack}`, userData);
        console.log("User data sent successfully");

        const [userDataResponse, heroDataResponse] = await Promise.all([
          axiosInstance.get(`${endpoint.userdata}`),
          axiosInstance.get(`${endpoint.hero}`),
        ]);

        setGetData(userDataResponse.data);
        setHeroSection(heroDataResponse.data);
        setLoading(false);
      } catch (error) {
        console.error("Error:", error);
        handleError(error);
        setTimeout(() => setLoading(false), 5000);
      }
    };

    fetchData();
  }, []);

  const handleError = (error) => {
    if (error.response) {
      console.error("Response Error:", error.response.data);
      showToast("Error fetching data: " + error.response.data, "error");
    } else if (error.request) {
      console.error("Request Error:", error.request);
      setServerStatus("Server is not responding. Please wait...");
    } else {
      console.error("Request Setup Error:", error.message);
      showToast("Error setting up request: " + error.message, "error");
    }
    setError(error);
  };

  const calculateTotalTimeSpent = () => {
    // Placeholder implementation for calculating total time spent
    return 0; // Replace this with your actual logic
  };

  const download = () => {
    setDownloading(true);
    axiosInstance
      .post(`${endpoint.downloadcv}`)
      .then((response) => {
        if (response.status === 200) {
          showToast("Download started", "success");
        } else {
          showToast("Error starting download", "error");
        }
      })
      .catch((error) => {
        console.error("Error starting download:", error);
        showToast("Error starting download", "error");
      })
      .finally(() => {
        setDownloading(false);
      });
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="w-16 h-16 relative">
          <div className="absolute top-0 left-0 w-4 h-4 bg-blue-500 rounded-full animate-ping"></div>
          <div className="absolute top-0 left-0 w-4 h-4 bg-blue-500 rounded-full animate-pulse"></div>
        </div>
        <p className="mt-4 text-gray-600">
          Please wait while Connecting to server...
        </p>
        {serverStatus && <p className="mt-2 text-red-600">{serverStatus}</p>}
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <p className="text-red-600">Error: {error.message}</p>
        <button
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => window.location.reload()}
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div>
      <div className="flex m-auto w-fit py-5">
        <div className=" lg:w-[830px] mt-10  flex flex-col gap-5">
          <h4 className="text-4xl font-bold text-blue-900 text-gradient">
            I am {herosection[0]?.name}
          </h4>
          <h1 className="text-7xl font-bold w-[780px] text-violet-800 text-gradient">
            {herosection[0]?.designation}
          </h1>
          <p className="w-[50%] text-lg text-gradient">
            {herosection[0]?.details}
          </p>
          <div className="flex flex-row gap-5 items-center">
            <button
              onClick={download}
              disabled={downloading}
              className="w-56 h-12 font-bold rounded-full border-2 border-blue-500 from-blue-500 to-blue-700 relative"
            >
              {!downloading ? (
                <span>Download CV</span>
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="font-bold">Requesting...</div>
                </div>
              )}
            </button>
            <div className="flex flex-row gap-4">
              <SocialIcon
                url="www.twitter.com"
                onClick={() => {
                  window.open("https://twitter.com/amarkumarprajap", "self");
                }}
              />
              <SocialIcon
                url="www.web.com"
                onClick={() => {
                  window.open(
                    "https://quiet-mooncake-32763c.netlify.app/",
                    "self"
                  );
                }}
              />
              <SocialIcon
                url="www.linkedin.com"
                onClick={() => {
                  window.open(
                    "https://www.linkedin.com/in/amar-kumar-prajapati-76255072/",
                    "self"
                  );
                }}
              />
              <SocialIcon
                url="www.github.com"
                onClick={() => {
                  window.open("https://github.com/amarkumarprajapati", "self");
                }}
              />
            </div>
          </div>
        </div>
        <div className="bg-black mt-10 px-5 py-10 rounded-lg rotate-div ">
          <img src={profileimage} alt="image" />
        </div>
      </div>
      <div>
        <Details />
        <Services />
        <Works />
        <Experience />
        <Skills />
        <Blogs />
        <Connect />
        <Footer />
      </div>
    </div>
  );
};

export default Hero;
