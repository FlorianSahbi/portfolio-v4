import React from "react";
import { skills, SkillInterface } from "../pages/api/data";
import Skill from "./skill";

function Skills() {
  return (
    <div
      className="
        bg-gray-50
        dark:bg-gray-800
        px-8
        py-8
        "
    >
      <div
        className="
            grid
            grid-cols-1
            rounded-xl
            shadow-xl
            text-center
            border-2 
            divide-y-2
            divide-gray-300
            dark:divide-yellow-50
            bg-gray-200
            dark:bg-gray-900
            border-gray-300
            dark:border-yellow-50
            md:grid-cols-3
            md:divide-x-2
            md:divide-y-0
            "
      >
        {skills.map(
          ({
            icon,
            title,
            description,
            subtitle1,
            languages,
            subtitle2,
            tools,
          }: SkillInterface) => {
            return (
              <Skill
                icon={icon}
                title={title}
                description={description}
                subtitle1={subtitle1}
                languages={languages}
                subtitle2={subtitle2}
                tools={tools}
              />
            );
          }
        )}
      </div>
    </div>
  );
}

export default Skills;
