import { useState, useEffect } from "react";
import React from "react";
import { endpoint } from "../Services/endpoint";
import axiosInstance from "../Services/apiResponce";

const Details = ({herosection}) => {
 
  return (
    <div>
      <div>
        <div className="flex justify-center items-center flex-row gap-40 py-32 text-gradient">
          <div className=" text-violet-800 flex flex-row gap-2 items-center">
            <h1 className="text-7xl font-bold ">
              3.2
            </h1>
            <p className="w-24 text-lg mx-2 font-bold ">Years of Experience</p>
          </div>
          <div className=" text-violet-800 flex flex-row gap-2 items-center">
            <h1 className="text-7xl font-bold ">4</h1>

            <p className="w-24 text-lg mx-2 font-bold ">Major Project Completed</p>
          </div>
          <div className=" text-violet-800 flex flex-row gap-2 items-center">
            <h1 className="text-7xl font-bold ">4</h1>

            <p className="w-24 text-lg font-bold ">Happy Clients</p>
          </div>
          <div className=" text-violet-800 flex flex-row gap-2 items-center">
            <h1 className="text-7xl font-bold ">3.2</h1>
            <p className="w-24 text-lg mx-2 font-bold ">Years of Experience</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
