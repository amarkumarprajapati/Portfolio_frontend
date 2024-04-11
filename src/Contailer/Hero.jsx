import React from "react";
import { SocialIcon } from "react-social-icons";
import Services from "./Services";

const Hero = () => {
  return (
    <div>
      <div></div>
      <div className="flex m-auto w-fit py-5">
        <div className="">
          <div className=" lg:w-[830px] mt-10  flex flex-col gap-5">
            <h4 className="text-4xl font-bold text-blue-900 text-gradient">
              I am Amar
            </h4>
            <h1 className="text-7xl font-bold w-[780px] text-violet-800 text-gradient">
              Full Stack Developer + UX Designer
            </h1>
            <p className="w-[50%] text-lg text-gradient">
              I break down complex user experinece problems to create integritiy
              focussed solutions that connect billions of people
            </p>
            <div className="flex flex-row gap-5 items-center">
              <button className="w-56 h-12 rounded-full border-2 border-blue-500 hover:bg-gradient-to-r from-blue-500 to-blue-700 hover:bg-clip-text hover:text-transparent hover:transition duration-300 ease-in-out">
                <span>Download CV</span>
              </button>

              <div className="flex flex-row gap-4">
                <SocialIcon url="www.twitter.com" />
                <SocialIcon url="www.web.com" />
                <SocialIcon url="www.linkedin.com" />
                <SocialIcon url="www.github.com" />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-black mt-10 px-5 py-10 rounded-lg rotate-div ">
          <img src="/src/Assects/images/myimage.png" alt="image" />
        </div>
      </div>
      {/* section - 2 - experience */}
      <div>
        <div className="flex justify-center items-center flex-row gap-40 py-32 text-gradient">
          <div className=" text-violet-800 flex flex-row gap-2 items-center">
            <h1 className="text-7xl font-bold ">14</h1>
            <p className="w-24 text-lg mx-2 font-bold ">Years of Experience</p>
          </div>
          <div className=" text-violet-800 flex flex-row gap-2 items-center">
            <h1 className="text-7xl font-bold ">14</h1>
            <p className="w-24 text-lg mx-2 font-bold ">Project Completed</p>
          </div>
          <div className=" text-violet-800 flex flex-row gap-2 items-center">
            <h1 className="text-7xl font-bold ">14</h1>
            <p className="w-24 text-lg font-bold ">Happy Clients</p>
          </div>
          <div className=" text-violet-800 flex flex-row gap-2 items-center">
            <h1 className="text-7xl font-bold ">14</h1>
            <p className="w-24 text-lg mx-2 font-bold ">Years of Experience</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
