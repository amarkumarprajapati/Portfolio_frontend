import { useState, useEffect } from "react";
import React from "react";
import { endpoint } from "../Services/endpoint";
import axiosInstance from "../Services/apiResponce";

const Details = () => {
  let [herosection, setHeroSection] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get(`${endpoint.hero}`);

        setHeroSection(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    const timeoutId = setTimeout(fetchData);
    return () => clearTimeout(timeoutId);
  }, []);
  return (
    <div>
      <div>
        <div className="flex justify-center items-center flex-row gap-40 py-32 text-gradient">
          <div className=" text-violet-800 flex flex-row gap-2 items-center">
            <h1 className="text-7xl font-bold ">
              {herosection[0]?.experience}
            </h1>
            <p className="w-24 text-lg mx-2 font-bold ">Years of Experience</p>
          </div>
          <div className=" text-violet-800 flex flex-row gap-2 items-center">
            <h1 className="text-7xl font-bold ">{herosection[0]?.project}</h1>

            <p className="w-24 text-lg mx-2 font-bold ">Project Completed</p>
          </div>
          <div className=" text-violet-800 flex flex-row gap-2 items-center">
            <h1 className="text-7xl font-bold ">{herosection[0]?.clients}</h1>

            <p className="w-24 text-lg font-bold ">Happy Clients</p>
          </div>
          <div className=" text-violet-800 flex flex-row gap-2 items-center">
            <h1 className="text-7xl font-bold ">{herosection[0]?.ratings}</h1>
            <p className="w-24 text-lg mx-2 font-bold ">Years of Experience</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
