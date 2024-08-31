import React from "react";
import {
  FaDiscord,
  FaInstagram,
  FaLinkedin,
  FaSteam,
  FaYoutube,
  FaGithub,
} from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const Accounts = () => {
  const accounts = [
    {
      name: "Email",
      icon: MdOutlineEmail,
      link: "mailto:deneme@gmail.com",
      color: "text-blue-500",
      bgColor: "bg-blue-500",
      username: "deneme@gmail.com",
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      link: "www.google.com",
      color: "text-pink-500",
      bgColor: "bg-pink-500",
      username: "insta_name",
    },
    {
      name: "Youtube",
      icon: FaYoutube,
      link: "link",
      color: "text-red-500",
      bgColor: "bg-red-500",
      username: "youtube_name",
    },
    {
      name: "Discord",
      icon: FaDiscord,
      link: "link",
      color: "text-indigo-500",
      bgColor: "bg-indigo-500",
      username: "discord_name",
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      link: "link",
      color: "text-sky-500",
      bgColor: "bg-sky-500",
      username: "linkedin_name",
    },
    {
      name: "Github",
      icon: FaGithub,
      link: "link",
      color: "text-gray-500",
      bgColor: "bg-gray-500",
      username: "github_name",
    },
    {
      name: "Steam",
      icon: FaSteam,
      link: "link",
      color: "text-gray-500",
      bgColor: "bg-gray-500",
      username: "steam_name",
    },
  ];

  return (
    <div className="mt-32 px-5 md:px-0" id="Accounts">
      <h1 className="text-gray-300 text-4xl font-bold mb-10">Hesaplarım</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {accounts.map((account) => (
          <a
            key={account.name}
            href={account.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 rounded-xl p-6 flex flex-col items-center justify-center transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg hover:shadow-gray-700 group relative overflow-hidden"
          >
            <div
              className={`text-5xl mb-4 ${account.color} transition-transform duration-300 group-hover:scale-110`}
            >
              <account.icon />
            </div>
            <h2 className="text-gray-300 font-bold text-xl mb-2 transition-colors duration-300 group-hover:text-white">
              {account.name}
            </h2>
            <span className="text-gray-400 text-sm transition-colors duration-300 group-hover:text-gray-300">
              {account.username}
            </span>
            <div
              className={`absolute inset-x-0 bottom-0 h-1 ${account.bgColor} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}
            ></div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Accounts;
