interface SkillInterface {
  icon: string;
  title: string;
  description: string;
  subtitle1: string;
  languages: string;
  subtitle2: string;
  tools: string[];
}

function Skill({ icon, title, description, subtitle1, languages, subtitle2, tools }: SkillInterface) {
  return (
    <div
      className="h-full w-full p-8 text-gray-600 font-extralight"
    >
      <img
        className="mx-auto h-20 mb-8"
        alt={`skill-${icon}`}
        src={icon}
      />
      <h3
        className="font-bold text-xl text-gray-800 dark:text-yellow-100 mb-4"
      >
        {title}
      </h3>
      <p
        className="dark:text-yellow-50 mb-8"
      >
        {description}
      </p>

      <h4
        className="font-semibold text-lg text-blue-900 dark:text-yellow-100 mb-4"
      >
        {subtitle1}
      </h4>

      <p
        className="dark:text-yellow-50 mb-8"
      >
        {languages}
      </p>

      <h4
        className="font-semibold text-lg text-blue-900 dark:text-yellow-100 mb-4"
      >
        {subtitle2}
      </h4>
      <ul
        className="flex flex-col space-y-1 dark:text-yellow-50"
      >
        {tools.map(tool => {
          return (
            <li
              key={`tool-${tool}`}
            >
              {tool}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Skill;
