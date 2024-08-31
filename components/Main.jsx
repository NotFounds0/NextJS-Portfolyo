import React from "react";
import DiscordStatus from "./DiscordStatus";
import SocialMedia_icons from "./SocialMedia_icons";
import { FaSpotify } from "react-icons/fa";
import { GiLoveSong } from "react-icons/gi";
import Image from "next/image";

const Main = ({ data }) => {
  const getBorderColor = (status) => {
    switch (status) {
      case "online":
        return "border-green-500";
      case "idle":
        return "border-yellow-500";
      case "dnd":
        return "border-red-500";
      default:
        return "border-gray-500";
    }
  };

  const borderColorClass = getBorderColor(data?.data.discord_status);

  return (
    <div className=" bg-gradient-to-br from-gray-900 to-gray-800 py-20 px-5 md:px-10">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row gap-10 items-center md:items-start">
          <Image
            src={"/img/logo.webp"}
            alt="logo"
            width={150}
            height={150}
            className={`rounded-full border-4 ${borderColorClass} shadow-lg shadow-${borderColorClass}/20`}
          />
          <div className="flex flex-col items-center md:items-start">
            <h1 className="text-white font-bold text-3xl md:text-4xl mb-2">
              {data?.data.discord_user.username}
            </h1>
            <span className="text-green-400 text-xl mb-1">
              {data?.data.discord_user.global_name}
            </span>
            <span className="text-indigo-400 font-semibold text-lg mb-1">
              FrontEnd Developer
            </span>
            <span className="text-gray-400 italic">name surname</span>
          </div>
        </div>

        <p className="text-gray-300 text-lg mt-8 mb-10 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          aspernatur quas, iste odio nobis illo non voluptatem eaque deleniti
          corrupti reprehenderit, aliquam natus cumque, dignissimos dolor
          blanditiis fugiat? Dicta, blanditiis.
        </p>

        <div className="flex flex-col md:flex-row items-center gap-10 mb-10">
          <DiscordStatus data={data} />
          <SocialMedia_icons />
        </div>

        {data?.data.spotify ? (
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
            <h2 className="text-gray-200 font-bold text-xl flex items-center gap-3 mb-4">
              <FaSpotify className="text-green-400 text-2xl" />
              Spotifyda dinliyor
            </h2>
            <div className="flex items-center gap-4">
              <Image
                src={data.data.spotify.album_art_url}
                alt="album art"
                width={80}
                height={80}
                className="rounded-md shadow-md"
              />
              <div>
                <h3 className="text-white font-semibold text-lg">
                  {data?.data.spotify.song}
                </h3>
                <p className="text-gray-400">{data?.data.spotify.artist}</p>
              </div>
              <GiLoveSong className="text-pink-500 text-3xl ml-auto" />
            </div>
          </div>
        ) : (
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
            <h2 className="text-gray-400 font-bold text-xl flex items-center gap-3">
              <FaSpotify className="text-green-400 text-2xl" />
              Spotifyda Çevrimdışı
              <span className="animate-pulse w-3 h-3 bg-gray-600 rounded-full ml-2"></span>
            </h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default Main;
