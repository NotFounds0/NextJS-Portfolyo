import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const SocialMedia_icons = () => {
  const socialLinks = [
    {
      name: "GitHub",
      icon: FaGithub,
      url: "https://github.com/yourusername",
      color: "hover:text-gray-400",
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      url: "https://linkedin.com/in/yourusername",
      color: "hover:text-blue-500",
    },
    {
      name: "Twitter",
      icon: FaTwitter,
      url: "https://twitter.com/yourusername",
      color: "hover:text-blue-400",
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      url: "https://instagram.com/yourusername",
      color: "hover:text-pink-500",
    },
    {
      name: "YouTube",
      icon: FaYoutube,
      url: "https://youtube.com/c/yourusername",
      color: "hover:text-red-500",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-gray-300 ${social.color} transition-all duration-300 transform hover:scale-110`}
          aria-label={social.name}
        >
          <social.icon size={32} />
          <span className="sr-only">{social.name}</span>
        </a>
      ))}
    </div>
  );
};

export default SocialMedia_icons;
