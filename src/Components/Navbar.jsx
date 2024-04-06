import React from "react";

const Navbar = () => {
  return (
    <div>
      <div>
        <div className="justify-between items-center flex px-10 py-10 ">
          <div className=" flex justify-center items-center flex-row gap-5 m-5 mx-28 font-semibold">
            <img src="/src/Assects/images/1.png" className="w-16" alt="" />
            <h1>Amarkumarprajapati@gmail.com</h1>
          </div>
          <div className="flex flex-row gap-5 justify-center items-center mx-24">
            <ul className="flex flex-row gap-10 font-semibold ">
              <li className="text-lg list-none">Services</li>
              <li className="text-lg list-none">Works</li>
              <li className="text-lg list-none">Resume</li>
              <li className="text-lg list-none">Skills</li>
              <li className="text-lg list-none">Testimonials</li>
              <li className="text-lg list-none">Contact</li>
            </ul>
            <button className="bg-gradient-to-r from-blue-500 to-blue-800 text-white py-3 w-[150px] px-10 rounded-full">
              Hire Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
