import React, { useState, useEffect } from "react";
import { tabData } from "./work/sample";
import { motion, AnimatePresence } from "framer-motion";
import { endpoint } from "../Services/endpoint";
import axios from "axios";
import { baseurl } from "../Services/baseurl";

const Works = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(`${baseurl}${endpoint.projectimages}`);
        console.log("response", response.data);
        if (response.data.success) {
          setImages(response.data.images);
        }
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div>
      <div>
        <div className=" flex flex-col gap-4">
          <h1 className="text-5xl py-10 mt-5 text-blue-800 font-bold text-center">
            My Quality Services
          </h1>
          <p className="w-[43%] text-lg text-center  m-auto">
            We put your ideas and thus your wishes in the form of a unique web
            project that inspires you and your customers.
          </p>
        </div>
      </div>
      <div>
        <div className="justify-center items-center px-10 py-10">
          <div className="flex justify-center items-center rounded-full flex-row gap-7 w-fit px-2 m-auto bg-[#F6F3FC]">
            {tabData.map((tab) => (
              <motion.button
                key={tab.id}
                className={`mr-2 rounded-full py-5 focus:outline-none ${
                  activeTab === tab.id
                    ? "bg-violet-700 text-white"
                    : " text-gray-700"
                }`}
                onClick={() => setActiveTab(tab.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ minWidth: `${tab.title.length * 25}px` }}>
                {tab.title}
              </motion.button>
            ))}
          </div>
          <div className="bg-white px-5 py-16">
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
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5">
                        {images.map((image, index) => (
                          <a
                            key={index}
                            href={image.redirectUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group">
                            <img
                              src={image.url}
                              className="rounded-lg w-full h-auto object-cover transition-transform duration-300 transform group-hover:scale-105 group-hover:shadow-lg"
                              alt={image.key}
                            />
                          </a>
                        ))}
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
