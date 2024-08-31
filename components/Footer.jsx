import React from "react";
import { FaHeart, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold text-white mb-2">İsminiz</h2>
            <p className="text-sm">Frontend Developer & UI/UX</p>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">
                <FaGithub size={24} />
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">
                <FaLinkedin size={24} />
              </a>
              <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">
                <FaTwitter size={24} />
              </a>
            </div>
            <p className="text-sm text-center md:text-right">
              © {currentYear} Tüm hakları saklıdır.
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-sm flex items-center justify-center">
            Made with <FaHeart className="text-red-500 mx-1" /> by{" "}
            <a href="#" className="text-blue-400 hover:text-blue-300 ml-1 transition-colors duration-300">
              NotFounds
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
