function Skill({ icon, title, description, subtitle1, languages, subtitle2, tools }) {
  return (
    <div className="h-full w-full py-16 px-8">
      <img className="mx-auto mb-8 h-20" src={icon} />
      <p className="font-bold text-xl mb-4 dark:text-yellow-100">
        {title}
      </p>
      <p className="font-extralight mb-8 dark:text-yellow-50">
        {description}
      </p>

      <p className="text-blue-900 dark:text-yellow-100 mb-4">
        {subtitle1}
      </p>

      <p className="font-extralight mb-8 dark:text-yellow-50">
        {languages}
      </p>

      <p className="text-blue-900 dark:text-yellow-100 mb-4">
        {subtitle2}
      </p>
      <ul className="flex flex-col space-y-1 text-gray-900 dark:text-yellow-50 font-extralight">
        {tools.map(tool => {
          return (
            <li>
              {tool}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Skill;
