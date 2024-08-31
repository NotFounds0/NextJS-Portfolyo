import { FaRegStar, FaExternalLinkAlt, FaCode } from "react-icons/fa";
import { FaCodeFork } from "react-icons/fa6";

const GitRepo = ({ gitData }) => {
  if (!gitData || gitData.length === 0) {
    return (
      <div className="mt-32 px-5 md:px-0" id="Projects">
        <h1 className="text-gray-300 text-5xl font-bold mb-6">
          Github Projeleri
        </h1>
        <p className="text-gray-200 font-bold mt-2 bg-red-500 py-3 px-4 rounded-lg text-sm inline-block shadow-lg">
          Repository verisi bulunamadı veya yüklenirken bir hata oluştu.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-32 px-5 md:px-0" id="Projects">
      <h1 className="text-gray-300 text-5xl font-bold mb-10">
        Github Projeleri
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {gitData.map((repo, index) => (
          <div
            key={repo.id}
            className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className="p-6">
              <h2 className="text-white text-2xl font-bold mb-3 truncate">
                {repo.name}
              </h2>
              <p className="text-gray-400 text-sm mb-4 h-12 overflow-hidden">
                {repo.description}
              </p>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <span className="text-white text-xs flex items-center bg-gray-700 rounded-full px-2 py-1">
                    <FaRegStar className="mr-1 text-yellow-400" />{" "}
                    {repo.stargazers_count}
                  </span>
                  <span className="text-white text-xs flex items-center bg-gray-700 rounded-full px-2 py-1">
                    <FaCodeFork className="mr-1 text-blue-400" />{" "}
                    {repo.forks_count}
                  </span>
                </div>
                <LanguageBadge language={repo.language} />
              </div>
              <div className="flex justify-between items-center">
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-4 py-2 rounded-full transition-colors duration-300"
                >
                  Repoya Git <FaExternalLinkAlt className="ml-2" />
                </a>
                <a
                  href={`${repo.html_url}/archive/refs/heads/main.zip`}
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                  title="Download ZIP"
                >
                  <FaCode size={20} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const LanguageBadge = ({ language }) => {
  const bgColor = {
    JavaScript: "bg-yellow-400",
    "C#": "bg-green-500",
    Python: "bg-blue-500",
    Java: "bg-red-500",
    TypeScript: "bg-blue-600",
    HTML: "bg-orange-500",
    CSS: "bg-pink-500",
  };

  return (
    <span
      className={`font-bold text-xs ${
        bgColor[language] || "bg-gray-500"
      } text-gray-900 px-2 py-1 rounded-full shadow-md`}
    >
      {language}
    </span>
  );
};

export default GitRepo;
