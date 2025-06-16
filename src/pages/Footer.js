import React from 'react';
import { FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-400 py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* コピーライト */}
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Naoto Araki. All rights reserved.
        </p>

        {/* GitHub アイコン */}
        <a
          href="https://github.com/Naoto-Araki"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="mt-4 md:mt-0 text-gray-400 hover:text-white transition-colors"
        >
          <FaGithub size={24} />
        </a>
      </div>
    </footer>
  );
}
