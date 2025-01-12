import React from 'react';
import { GraduationCap } from 'lucide-react';

export function Education() {
  const education = [
    {
      degree: "Bachelor's of Computer Engineering",
      institution: "Khwopa College of Engineering(TU)",
      year: "2019 - 2024",
      description: "Relevant coursework in Data Structures, Algorithms, Web Development",
    },
    {
      degree: "+2 Science",
      institution: "Khwopa Higher Secondary School, Bhaktapur",
      year: "2017 - 2019",
      description: "Focus on Mathematics and Computer Science",
      gpa: "3.64"
    }
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Education</h2>
        <div className="space-y-8">
          {education.map((item, index) => (
            <div key={index} className="flex gap-4 items-start bg-gray-50 p-6 rounded-lg">
              <div className="bg-blue-100 p-3 rounded-full">
                <GraduationCap className="text-blue-600" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold">{item.degree}</h3>
                <p className="text-gray-600">{item.institution}</p>
                <p className="text-sm text-gray-500">{item.year}</p>
                <p className="mt-2 text-gray-700">{item.description}</p>
                <p className="text-sm text-gray-600 mt-1">GPA: {item.gpa}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}