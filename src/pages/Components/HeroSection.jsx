import { Button } from "antd";
import React from "react";
import {
  DownloadOutlined,
  GithubOutlined,
  LinkedinOutlined,
  TwitterOutlined,
  ArrowUpOutlined,
} from "@ant-design/icons";

const HeroSection = () => {
  return (
    <div>
      <section
       
        className="pt-24 bg-gradient-to-br from-[#091e79]/5 to-[#00d4ff]/5"
      >
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-[#091e79] to-[#00d4ff] bg-clip-text text-transparent">
              Amar Kumar Prajapati
              </h1>
              <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-[#091e79] to-[#00d4ff] bg-clip-text text-transparent">
                MERN Stack Developer
              </h1>
              <p className="text-gray-700 text-lg mb-8">
              I specialize in creating innovative solutions and building scalable web applications.
              </p>
              <Button
                type="primary"
                icon={<DownloadOutlined />}
                size="large"
                className="bg-gradient-to-r from-[#091e79] to-[#00d4ff] border-none !rounded-button whitespace-nowrap"
              >
                Download CV
              </Button>
            </div>
            <div className="relative">
              <img
                src="https://public.readdy.ai/ai/img_res/edf548557d0f0c519891239bbbfe8936.jpg"
                alt="Profile"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
