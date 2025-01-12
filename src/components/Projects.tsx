import React from 'react';

export function Projects() {
  const projects = [
    {
      title: "Multimodal Emotion Recognition From Text and Speech",
      description: "An advanced AI system that analyzes emotions from both textual and audio inputs, utilizing deep learning models for multimodal sentiment analysis.",
      image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Movie Recommendation System",
      description: "A personalized movie recommendation engine using collaborative filtering and content-based algorithms to suggest films based on user preferences.",
      image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-rose-900 via-red-900 to-orange-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-rose-200">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 border border-rose-500/20">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-rose-200">{project.title}</h3>
                <p className="text-rose-100/80">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}