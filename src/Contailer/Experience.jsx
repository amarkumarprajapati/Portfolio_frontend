import React, { useState, useEffect } from "react";
import { endpoint } from "../Services/endpoint";
import axiosInstance from "../Services/apiResponce";

const Experience = ({ herosection }) => {
  return (
    <div>
      <div className="bg-[#F6F3FC] px-10 py-10">
        <div className="flex flex-row gap-48 w-[80%] mx-24">
          <div className="flex flex-row items-center gap-3 px-10 py-10">
            <h1 className="text-5xl font-bold">My Experience</h1>
          </div>
        </div>
        <div className="flex flex-col gap-10">
          {/* first */}
          <div class="flex flex-row gap-24 m-auto w-max">
            <div class="item bg-white w-550px px-10 flex flex-col py-8 gap-2 rounded-3xl shadow-sm cursor-pointer">
              <h1 class="font-bold text-2xl justify-center">
                {/* {herosection[0]?.experiencedetsils[2]} */} DSG-US - 2020 - 2023
              </h1>
              <h1 class="text-3xl font-bold">
                {/* {herosection[0]?.experienceddegination[2]} */}Junior - MERN Stack Developer
              </h1>
              <p class="text-xl">Mumbai,india</p>
            </div>
            <div class="item bg-white w-550px gap-2 flex flex-col px-10 py-8 justify-center  rounded-3xl shadow-sm">
              <h1 class="font-bold text-2xl justify-center">
                {/* {herosection[0]?.experiencedetsils[1]} */}Freelancer - 2023 - 2024
              </h1>
              <h1 class="text-3xl font-bold">
                {/* {herosection[0]?.experienceddegination[1]} */}MERN Stack Developer
              </h1>
              <p class="text-xl">Hyderabad, India</p>
            </div>
          </div>

          {/* second*/}
          <div class="flex flex-row gap-24 m-auto w-max">
            <div class="item bg-white w-550px px-10 flex flex-col py-8 gap-2 rounded-3xl shadow-sm">
              <h1 class="font-bold text-2xl justify-center">
                {/* {herosection[0]?.experiencedetsils[0]} */} Codesis - 2024 - Presents
              </h1>
              <h1 class="text-3xl font-bold">
                {/* {herosection[0]?.experienceddegination[0]} */}SDE2 - - MERN Stack Developer
              </h1>
              <p class="text-2xl">Bangalore, India</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
