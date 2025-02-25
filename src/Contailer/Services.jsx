import axios from "axios";
import React, { useEffect, useState } from "react";
import axiosInstance from "../Services/apiResponce";
import { baseurl } from "../Services/baseurl";
import { endpoint } from "../Services/endpoint";

const Services = ({ herosection }) => {
  const getdata = () => {
    async function any() {
      var a = await fetch("base/api");
      var b = 20;
      newdata1(a, b);
    }

    function newdata1(a, b) {
      let sum = a + b;
    }
  };
  getdata();

  return (
    <div>
      <div className="bg-[#F6F3FC]">
        <div className=" text-center px-10 py-10">
          <h1 className="text-5xl text-gradient font-bold px-5 py-10">
            My Quality Services
          </h1>
          <p className=" text-sm font-semibold w-[35%] m-auto ">
            We put your ideas and thus your wishes in the form of a unique web
            project that inspires you and you customers.
          </p>
        </div>
        <div class="flex flex-col">
          <div class="item flex flex-row py-10 px-10 gap-5 justify-center items-center hover:text-white hover:bg-gradient-to-r from-violet-500 to-violet-950 w-fit m-auto">
            <h4 class="text-2xl font-semibold">01</h4>
            <h1 class="text-5xl w-[550px] font-bold">UI/UX Design</h1>
            <p class="w-[550px]">Branding Design</p>
          </div>

          <hr className="w-[82%] m-auto" />
          <div class="item flex flex-row py-10 px-10 gap-5 justify-center items-center hover:text-white hover:bg-gradient-to-r from-violet-500 to-violet-950 w-fit m-auto">
            <h4 class="text-2xl font-semibold">01</h4>
            <h1 class="text-5xl w-[550px] font-bold">React</h1>
            <p class="w-[550px]"> React</p>
          </div>
          <hr className="w-[82%] m-auto" />
          <div class="item flex flex-row py-10 px-10 gap-5 justify-center items-center hover:text-white hover:bg-gradient-to-r from-violet-500 to-violet-950 w-fit m-auto">
            <h4 class="text-2xl font-semibold">01</h4>
            <h1 class="text-5xl w-[550px] font-bold">Node.js</h1>
            <p class="w-[550px]">node.js</p>
          </div>
          <hr className="w-[82%] m-auto" />
          <div class="item flex flex-row py-10 px-10 gap-5 justify-center items-center hover:text-white hover:bg-gradient-to-r from-violet-500 to-violet-950 w-fit m-auto">
            <h4 class="text-2xl font-semibold">01</h4>
            <h1 class="text-5xl w-[550px] font-bold">Mongodb</h1>
            <p class="w-[550px]"> Mongodb</p>
          </div>
          <hr className="w-[82%] m-auto" />
        </div>
      </div>
    </div>
  );
};

export default Services;
