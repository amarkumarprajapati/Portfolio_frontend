import React from "react";

const Skills = () => {
  return (
    <div>
      <div>
        <div className="text-center py-5">
          <h1 className="text-5xl py-10 text-blue-800 font-bold">My Skills</h1>
          <p className="text-sm font-semibold w-[35%] m-auto">
            We put your ideas and thus your wishes in the form of a unique web
            project that inspires you and you customers.
          </p>
        </div>
      </div>
      <div className="flex w-fit m-auto flex-row gap-36 py-10">
        <div className=" w-fit m-auto bg-pink-900 px-12 py-5 rounded-3xl">
          <img src="/src/Assects/images/figma.png" className="w-12 mix-blend-multiply hover:mix-blend-normal" alt="image" />
          <p className="text-violet-700">Figma</p>
        </div>
        <div className=" w-fit m-auto bg-pink-900 px-12 py-5 ">
          <img src="/src/Assects/images/figma.png" className="w-12 mix-blend-multiply hover:mix-blend-normal" alt="image" />
          <p className="text-violet-700">Figma</p>
        </div>
        <div className=" w-fit m-auto bg-pink-900 px-12 py-5 ">
          <img src="/src/Assects/images/figma.png" className="w-12 mix-blend-multiply hover:mix-blend-normal" alt="image" />
          <p className="text-violet-700">Figma</p>
        </div>
        <div className=" w-fit m-auto bg-pink-900 px-12 py-5 ">
          <img src="/src/Assects/images/figma.png" className="w-12 mix-blend-multiply hover:mix-blend-normal" alt="image" />
          <p className="text-violet-700">Figma</p>
        </div>
        <div className=" w-fit m-auto bg-pink-900 px-12 py-5 ">
          <img src="/src/Assects/images/figma.png" className="w-12 mix-blend-multiply hover:mix-blend-normal" alt="image" />
          <p className="text-violet-700">Figma</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
