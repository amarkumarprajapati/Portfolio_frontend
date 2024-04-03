import React from "react";
import { SocialIcon } from "react-social-icons";
import Services from "./Services";

const Hero = () => {
  return (
    <div>
      <div>
      </div>
      <div className="flex m-auto w-fit py-5">
        <div className="">
          <div className=" lg:w-[830px] mt-10  flex flex-col gap-5">
            <h4 className="text-4xl font-bold text-blue-900">I am Amar</h4>
            <h1 className="text-7xl font-bold w-[780px] text-violet-800">
              Full Stack Developer + UX Designer
            </h1>
            <p className="w-[50%] text-lg">
              I break down complex user experinece problems to create integritiy
              focussed solutions that connect billions of people
            </p>
            <div className="flex flex-row gap-5 items-center">
              <button className="w-56 h-12 hover:bg-violet-600 hover:border-none hover:text-white rounded-full border-2 border-blue-500">
                Download CV
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
        <div className="bg-black mt-10 rounded-lg">
          <img src="/src/Assects/images/myimage.png" alt="" />
        </div>
      </div>
      {/* section - 2 - experience */}
      <div>
        <div className="flex justify-center items-center flex-row gap-40 py-32">
          <div className=" text-violet-800 flex flex-row gap-2 items-center">
            <h1 className="text-7xl font-bold ">14</h1>
            <p className="w-24 text-sm font-bold ">Years of Experience</p>
          </div>
          <div className=" text-violet-800 flex flex-row gap-2 items-center">
            <h1 className="text-7xl font-bold ">14</h1>
            <p className="w-24 text-sm font-bold ">Years of Experience</p>
          </div>
          <div className=" text-violet-800 flex flex-row gap-2 items-center">
            <h1 className="text-7xl font-bold ">14</h1>
            <p className="w-24 text-sm font-bold ">Years of Experience</p>
          </div>
          <div className=" text-violet-800 flex flex-row gap-2 items-center">
            <h1 className="text-7xl font-bold ">14</h1>
            <p className="w-24 text-sm font-bold ">Years of Experience</p>
          </div>
        </div>
      </div>
      <div>
        <Services/>
      </div>
    </div>
  );
};

export default Hero;
