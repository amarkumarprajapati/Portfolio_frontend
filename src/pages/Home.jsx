import React, { useRef, useState } from "react";
import { Button, Form, Input, message } from "antd";
import {
  DownloadOutlined,
  GithubOutlined,
  LinkedinOutlined,
  TwitterOutlined,
  ArrowUpOutlined,
} from "@ant-design/icons";
import Header from "../components/Header";
import HeroSection from "./Components/HeroSection";
import ExperienceSection from "./Components/ExperienceSection";
import PortfolioSection from "./Components/PortfolioSection";
import SkillsSection from "./Components/SkillsSection";
import ContactSection from "./Components/ContactSection";
import Footer from "./Components/Footer";

const Home = () => {
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();

  // Section Refs
  const heroRef = useRef(null);
  const portfolioRef = useRef(null);
  const experienceRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  const onFinish = () => {
    messageApi.success("Message sent successfully!");
    form.resetFields();
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {contextHolder}

      {/* Pass section refs to Header */}
      <Header
        heroRef={heroRef}
        portfolioRef={portfolioRef}
        experienceRef={experienceRef}
        skillsRef={skillsRef}
        contactRef={contactRef}
      />

      {/* Sections with refs */}
      <div ref={heroRef}>
        <HeroSection />
      </div>
      <div ref={experienceRef}>
        <ExperienceSection />
      </div>
      <div ref={portfolioRef}>
        <PortfolioSection />
      </div>
      <div ref={skillsRef}>
        <SkillsSection />
      </div>
      <div ref={contactRef}>
        <ContactSection />
      </div>

      <Footer />

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-4 bg-gradient-to-r from-[#091e79] to-[#00d4ff] text-white rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 !rounded-button whitespace-nowrap"
      >
        <ArrowUpOutlined className="text-xl" />
      </button>
    </div>
  );
};

export default Home;
