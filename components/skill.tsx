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
      <p
        className="font-bold text-xl text-gray-800 dark:text-yellow-100 mb-4"
      >
        {title}
      </p>
      <p
        className="dark:text-yellow-50 mb-8"
      >
        {description}
      </p>

      <p
        className="font-semibold text-lg text-blue-900 dark:text-yellow-100 mb-4"
      >
        {subtitle1}
      </p>

      <p
        className="dark:text-yellow-50 mb-8"
      >
        {languages}
      </p>

      <p
        className="font-semibold text-lg text-blue-900 dark:text-yellow-100 mb-4"
      >
        {subtitle2}
      </p>
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
