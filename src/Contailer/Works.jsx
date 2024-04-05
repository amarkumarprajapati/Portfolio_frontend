import React, { useState } from "react";
import { tabData } from "./work/sample";
import { motion, AnimatePresence } from "framer-motion";
import { buttonVariants } from "../helper/button";

const Works = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div>
      <div>
        <div className="text-center">
          <h1 className="text-5xl py-10 text-blue-800 font-bold">
            My Quality Services
          </h1>
          <p className="text-sm font-semibold w-[35%] m-auto">
            We put your ideas and thus your wishes in the form of a unique web
            project that inspires you and your customers.
          </p>
        </div>
      </div>
      <div>
        <div className="justify-center items-center">
          <div className="flex justify-center items-center rounded-full flex-row gap-7 w-fit px-2 m-auto bg-[#F6F3FC]">
            {tabData.map((tab) => (
              <motion.button
                key={tab.id}
                className={`mr-2 rounded-full py-5 focus:outline-none ${
                  activeTab === tab.id
                    ? "bg-violet-700 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
                onClick={() => setActiveTab(tab.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ minWidth: `${tab.title.length * 25}px` }}>
                {tab.title}
              </motion.button>
            ))}
          </div>
          <div className="bg-white p-4">
            <AnimatePresence>
              {tabData.map(
                (tab) =>
                  activeTab === tab.id && (
                    <motion.div
                      key={tab.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="w-full">
                      <div className="flex">
                        <img
                          src="/src/Assects/images/2.jpg"
                          className="rounded-lg mx-5"
                          alt="image"
                        />
                        <img
                          src="/src/Assects/images/2.jpg"
                          className="rounded-lg mx-5"
                          alt="image"
                        />
                      </div>
                    </motion.div>
                  )
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
