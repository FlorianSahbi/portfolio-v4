import React from "react";
import { ProjectInterface, projects } from "../pages/api/data";
import Card from "./card";

function Projects() {
  return (
    <div
      className="
        text-center
        text-gray-600 
        font-extralight
        bg-gray-50
        dark:bg-gray-800
        px-8
        py-8
        "
    >
      <div>
        <p
          className="
            font-bold 
            text-xl
            text-gray-800
            dark:text-yellow-100
            mb-4
            "
        >
          My Recent Work
        </p>
        <p
          className="
            font-extralight 
            dark:text-yellow-50
            mb-8
            "
        >
          Here are a few projects I've worked on recently. Want to see more? Email me.
        </p>
      </div>
      <div
        className="
          dark:bg-gray-800 
          grid 
          grid-cols-1 
          gap-8
          sm:grid-cols-3
          "
      >
        {projects.map(({ src }: ProjectInterface) => {
          return (
            <Card
              key={`card-${src}`}
              src={src}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Projects;
