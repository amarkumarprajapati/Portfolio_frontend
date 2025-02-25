import React from 'react'
import { experience } from '../../Data/Dummydata'

const ExperienceSection = () => {
  return (
    <div>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-[#091e79] to-[#00d4ff] bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <div className="space-y-8">
            {experience.map((experience, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-8 transform hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">
                      {experience.company}
                    </h3>
                    <p className="text-xl text-gray-600">
                      {experience.position}
                    </p>
                  </div>
                  <div className="mt-2 md:mt-0 text-right">
                    <p className="text-gray-600">{experience.period}</p>
                    <p className="text-gray-500">{experience.location}</p>
                  </div>
                </div>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  {experience.achievements.map(
                    (achievement, achievementIndex) => (
                      <li key={achievementIndex}>{achievement}</li>
                    )
                  )}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ExperienceSection
