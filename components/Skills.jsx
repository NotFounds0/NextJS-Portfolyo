import Image from "next/image";
import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    { name: "HTML", icon: "/skills/html.png", color: "orange" },
    { name: "CSS", icon: "/skills/css.png", color: "blue" },
    { name: "TAILWINDCSS", icon: "/skills/tailwindcss.png", color: "sky" },
    { name: "JAVASCRIPT", icon: "/skills/js.png", color: "yellow" },
    { name: "ReactJS", icon: "/skills/react.png", color: "teal" },
    { name: "NODEJS", icon: "/skills/nodejs.png", color: "green" },
    { name: "C#", icon: "/skills/csharp.png", color: "pink" },
    { name: "SQL", icon: "/skills/sql.png", color: "blue" },
    { name: "MONGODB", icon: "/skills/mongodb.png", color: "green" },
  ];

  return (
    <div className="mt-32 px-5 md:px-0" id="Skills">
      <h1 className="text-gray-300 text-4xl font-bold mb-10">
        Kullandığım Teknolojiler
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {skills.map((skill, index) => (
          <div
            key={skill.name}
            className={`bg-gray-800 rounded-xl p-6 flex flex-col items-center justify-center hover:shadow-lg hover:shadow-${skill.color}-500/30 transition-all duration-300 transform hover:-translate-y-2`}
          >
            <div className="relative w-16 h-16 mb-4">
              <Image
                src={skill.icon}
                alt={skill.name}
                layout="fill"
                objectFit="contain"
                className="filter drop-shadow-md"
              />
            </div>
            <span className="text-gray-300 font-semibold text-center">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
