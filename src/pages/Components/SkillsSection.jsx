import React from 'react'
import { SkillsExpertise } from '../../Data/Dummydata'

const SkillsSection = () => {
  return (
    <div>
       <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-[#091e79] to-[#00d4ff] bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SkillsExpertise.map((category) => (
              <div
                key={category.category}
                className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
              >
                <div className="flex items-center mb-6">
                  <i
                    className={`fas ${category.icon} text-2xl bg-gradient-to-r from-[#091e79] to-[#00d4ff] bg-clip-text text-transparent mr-3`}
                  ></i>
                  <h3 className="text-xl font-bold">{category.category}</h3>
                </div>
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700 font-semibold">
                          {skill.name}
                        </span>
                        <span className="text-sm text-gray-500">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-[#091e79] to-[#00d4ff] rounded-full transition-all duration-500 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default SkillsSection
