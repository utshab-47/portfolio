import React from 'react';
import { Github, Facebook, Instagram, Youtube } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iYSIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVHJhbnNmb3JtPSJyb3RhdGUoNDUpIj48cGF0aCBkPSJNLTEwIDMwaDYwdjJoLTYweiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2EpIi8+PC9zdmc+')] opacity-20"></div>
      
      <div className="relative max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="backdrop-blur-sm bg-white/5 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-pink-200">LOCATION</h3>
            <p className="text-gray-200">Banepa, Kavre, Nepal</p>
          </div>

          <div className="backdrop-blur-sm bg-white/5 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-pink-200">ACROSS THE WEB</h3>
            <div className="flex gap-4">
              <a href="https://github.com/utshab-47" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-gray-400 hover:scale-110 transition-all duration-300">
                <Github size={24} />
              </a>
              <a href="https://www.facebook.com/utshab.timalsina.3" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-blue-600 hover:scale-110 transition-all duration-300">
                <Facebook size={24} />
              </a>
              <a href="https://www.instagram.com/utshabtimalsina/" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-pink-600 hover:scale-110 transition-all duration-300">
                <Instagram size={24} />
              </a>
              <a href="https://www.youtube.com/@utshabtimalsina9854" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-red-600 hover:scale-110 transition-all duration-300">
                <Youtube size={24} />
              </a>
            </div>
          </div>

          <div className="backdrop-blur-sm bg-white/5 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-pink-200">ABOUT ME</h3>
            <p className="text-gray-200">I love coding and traveling.</p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center text-gray-300">
          © {currentYear} Utshab. All rights reserved.
        </div>
      </div>
    </footer>
  );
}