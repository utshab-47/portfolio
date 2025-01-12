import React from 'react';
import utshab from './uttu.jpg';
export function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-white">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
            <div className="relative aspect-square rounded-lg overflow-hidden ring-4 ring-white/20">
              <img
                src={utshab}
                alt="Profile"
                className="w-full h-full object-cover transform transition duration-500 group-hover:scale-105"
              />
            </div>
          </div>
          <div className="space-y-6">
            <p className="text-lg text-white/90 leading-relaxed">
              I am a Computer Engineering Student with basic skills and good academics.
            </p>
            <p className="text-lg text-white/90 leading-relaxed">
              With a basic Ideas in Networking and AI, I am good to go.
            </p>
            <div className="pt-4">
              <div className="h-1 w-20 bg-blue-400 rounded-full mb-4"></div>
              <p className="text-white/80 italic">
                "Passionate about technology and continuous learning"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}