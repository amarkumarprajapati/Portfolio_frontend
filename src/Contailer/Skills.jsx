import React from "react";
import figma from "../Assects/images/figma.png";
import Reactimage from "../Assects/images/images-removebg-preview.png";
import Tailwind from "../Assects/images/images__1_-removebg-preview.png";
import Node from "../Assects/images/1_TY9uBBO9leUbRtlXmQBiug-removebg-preview.png";
import express from "../Assects/images/f3a9a38b-116d-4b35-8f46-8d8abb78166f-removebg-preview.png";

const Skills = () => {
  return (
    <div>
      <div>
        <div className="text-center py-5 bg-[#F6F3FC]">
          <h1 className="text-5xl py-10 text-blue-800 font-bold">My Skills</h1>
          <p className="text-sm font-semibold w-[35%] m-auto">
            We put your ideas and thus your wishes in the form of a unique web
            project that inspires you and you customers.
          </p>
        </div>
      </div>
      <div className="flex bg-[#F6F3FC]">
        <div className="flex w-fit m-auto flex-row gap-24 py-10 ">
          <div className=" w-fit m-auto bg-white px-12 py-5 rounded-3xl">
            <div className="flex flex-col ">
              <img
                src={figma}
                className="w-[50px] h-[60px] mix-blend-multiply hover:mix-blend-normal"
                alt="image"
              />
            </div>
            <div className="mt-4">
              <p className="text-violet-700">Figma</p>
            </div>
          </div>
          <div className=" w-fit m-auto bg-white px-12  py-5 rounded-3xl ">
            <div className="flex flex-col ">
              <img
                src={Reactimage}
                className="w-[60px] h-[60px] mix-blend-multiply hover:mix-blend-normal"
                alt="image"
              />
            </div>
            <div className="mt-4">
              <p className="text-violet-700">React</p>
            </div>
          </div>
          <div className=" w-fit m-auto bg-white px-12 py-5  rounded-3xl">
            <div className="flex flex-col ">
              <img
                src={Tailwind}
                className="w-[60px] h-[60px] mix-blend-multiply hover:mix-blend-normal"
                alt="image"
              />
            </div>
            <div className="mt-4">
              <p className="text-violet-700">Tailwind</p>
            </div>
          </div>
          <div className=" w-fit m-auto bg-white px-12 py-5 rounded-3xl ">
            <div className="flex flex-col ">
              <img
                src={Node}
                className="w-[60px] h-[60px] mix-blend-multiply hover:mix-blend-normal"
                alt="image"
              />
            </div>
            <div className="mt-4">
              <p className="text-violet-700">Node</p>
            </div>
          </div>
          <div className=" w-fit m-auto bg-white px-12 py-5 rounded-3xl ">
            <div className="flex flex-col ">
              <img
                src={express}
                className="w-[60px] h-[60px] mix-blend-multiply hover:mix-blend-normal"
                alt="image"
              />
            </div>
            <div className="mt-4">
              <p className="text-violet-700">Express</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
