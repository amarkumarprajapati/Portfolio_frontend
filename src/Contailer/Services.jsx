import React from "react";

const Services = () => {
  const getdata = () => {
    async function any() {
      var a = await fetch("base/api");
      var b = 20;
      newdata1(a, b);
    }

    function newdata1(a, b) {
      let sum = a + b;
      console.log(sum);
    }
  };
  getdata();

  return (
    <div>
      <div className="bg-[#F6F3FC]">
        <div className="text-center">
          <h1 className="text-5xl py-10 text-blue-800 font-bold">
            My Quality Services
          </h1>
          <p className=" text-sm font-semibold w-[35%] m-auto ">
            We put your ideas and thus your wishes in the form of a unique web
            project that inspires you and you customers.
          </p>
        </div>
        <div class="flex flex-col">
          <div class="item flex flex-row py-10 px-10  gap-5 justify-center items-center hover:text-white hover:bg-[#683CC0] w-fit m-auto">
            <h4 class="text-2xl font-semibold">01</h4>
            <h1 class="text-6xl w-[550px] font-semibold">Branding Design</h1>
            <p class="w-[550px]">
              Elizabeth some dodgy chavs are you taking the piss faff about
              pardon amongst car boot a load of old tosh is cracking goal blow
              off telling brown.
            </p>
          </div>

          <hr className="w-[82%] m-auto" />
          <div class="item flex flex-row py-10 px-10  gap-5 justify-center items-center hover:text-white hover:bg-[#683CC0] w-fit m-auto">
            <h4 class="text-2xl font-semibold">01</h4>
            <h1 class="text-6xl w-[550px] font-semibold">Branding Design</h1>
            <p class="w-[550px]">
              Elizabeth some dodgy chavs are you taking the piss faff about
              pardon amongst car boot a load of old tosh is cracking goal blow
              off telling brown.
            </p>
          </div>
          <hr className="w-[82%] m-auto" />
          <div class="item flex flex-row py-10 px-10  gap-5 justify-center items-center hover:text-white hover:bg-[#683CC0] w-fit m-auto">
            <h4 class="text-2xl font-semibold">01</h4>
            <h1 class="text-6xl w-[550px] font-semibold">Branding Design</h1>
            <p class="w-[550px]">
              Elizabeth some dodgy chavs are you taking the piss faff about
              pardon amongst car boot a load of old tosh is cracking goal blow
              off telling brown.
            </p>
          </div>
          <hr className="w-[82%] m-auto" />
          <div class="item flex flex-row py-10 px-10  gap-5 justify-center items-center hover:text-white hover:bg-[#683CC0] w-fit m-auto">
            <h4 class="text-2xl font-semibold">01</h4>
            <h1 class="text-6xl w-[550px] font-semibold">Branding Design</h1>
            <p class="w-[550px]">
              Elizabeth some dodgy chavs are you taking the piss faff about
              pardon amongst car boot a load of old tosh is cracking goal blow
              off telling brown.
            </p>
          </div>
          <hr className="w-[82%] m-auto" />
        </div>
      </div>
    </div>
  );
};

export default Services;
