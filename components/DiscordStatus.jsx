const DiscordStatus = ({ data }) => {
  return (
    <div>
      {data?.data.discord_status === "online" ? (
        <div className="flex items-center gap-2">
          <p className="text-white">
            Şuanda Discordda{" "}
            <span className="text-green-500 font-bold">Çevrimiçi</span>.
          </p>
          <p className="bg-green-600 animate-pulse w-4 h-4 rounded-full"></p>{" "}
        </div>
      ) : null}
      {data?.data.discord_status === "idle" ? (
        <div className="flex items-center gap-2">
          <p className="text-white">
            Şuanda Discordda{" "}
            <span className="text-orange-500 font-bold">Boşta</span>.
          </p>
          <p className="bg-orange-600 animate-pulse w-4 h-4 rounded-full"></p>{" "}
        </div>
      ) : null}
      {data?.data.discord_status === "dnd" ? (
        <div className="flex items-center gap-2">
          <p className="text-white">
            Şuanda Discordda{" "}
            <span className="text-red-500 font-bold">Meşgul</span>.
          </p>
          <p className="bg-red-600 animate-pulse w-3 h-3 rounded-full"></p>{" "}
        </div>
      ) : null}
      {data?.data.discord_status === "offline" ? (
        <div className="flex items-center gap-2">
          <p className="text-white">
            Şuanda Discordda{" "}
            <span className="text-gray-500 font-bold">Çevrimdışı</span>.
          </p>
          <p className="bg-gray-600 animate-pulse w-4 h-4 rounded-full"></p>{" "}
        </div>
      ) : null}
    </div>
  );
};

export default DiscordStatus;
