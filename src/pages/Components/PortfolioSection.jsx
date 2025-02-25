import React from "react";
import { portfilio } from "../../Data/Dummydata";
import { Button } from "antd";

const PortfolioSection = () => {
  return (
    <div>
      <section
        
        className="py-20 bg-gradient-to-br from-[#091e79]/5 to-[#00d4ff]/5"
      >
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-[#091e79] to-[#00d4ff] bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {portfilio.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <Button
                      type="primary"
                      href={ project.link}
                      target="_blank"
                      className="bg-gradient-to-r from-[#091e79] to-[#00d4ff] border-none !rounded-button whitespace-nowrap"
                    >
                      Live Demo
                    </Button>
                    <Button className="!rounded-button whitespace-nowrap">
                      Source Code
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioSection;
