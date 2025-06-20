// src/components/Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false); // メニューを閉じる
  };

  return (
    <header className="bg-gray-800 shadow-md py-4 px-6">
      <div className="container mx-auto">
        {/* ハンバーガーメニューボタン（モバイル用） */}
        <div className="md:hidden flex justify-start">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 hover:text-blue-600 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* ナビゲーション */}
        <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:block`}>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
            <Link
              to="/"
              className="text-white font-semibold hover:text-blue-600 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <a
              href="#about"
              onClick={(e) => scrollToSection(e, 'about')}
              className="text-white font-semibold hover:text-blue-600 transition-colors duration-200 cursor-pointer"
            >
              About me
            </a>
            <a
              href="#projects"
              onClick={(e) => scrollToSection(e, 'projects')}
              className="text-white font-semibold hover:text-blue-600 transition-colors duration-200 cursor-pointer"
            >
              Projects
            </a>
            <a
              href="#activities"
              onClick={(e) => scrollToSection(e, 'activities')}
              className="text-white font-semibold hover:text-blue-600 transition-colors duration-200 cursor-pointer"
            >
              Activities
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
