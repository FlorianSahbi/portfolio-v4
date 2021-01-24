import React from "react";
import { ProjectInterface, projects } from "../pages/api/data";
import Card from "./card";

function Projects() {
  return (
    <div>
      <div className="text-center py-16 dark:bg-gray-800 dark:text-yellow-100">
        <h2 className="font-bold text-3xl mb-4">
          My Recent Work
        </h2>
        <p className="font-extralight text-lg dark:text-yellow-50">
          Here are a few projects I've worked on recently. Want to see more? Email me.
        </p>
      </div>
      <div className="dark:bg-gray-800 grid grid-cols-1 gap-4 pb-4 px-4 sm:grid-cols-3">
        {projects.map(({ src }: ProjectInterface) => {
          return (
            <Card src={src} />
          )
        })}
      </div>
    </div>
  )
}

export default Projects;
