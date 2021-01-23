function Skill({ icon, title, description, subtitle1, languages, subtitle2, tools }) {
  return (
    <div className="h-full w-full py-16 px-8 space-y-8">
      <img className="mx-auto" src={icon} />
      <p className="font-bold text-xl">
        {title}
      </p>
      <p className="font-extralight">
        {description}
      </p>

      <p className="text-blue-900">
        {subtitle1}
      </p>

      <p className="font-extralight">
        {languages}
      </p>

      <p className="text-blue-900 -mb-0">
        {subtitle2}
      </p>

      <ul className="flex flex-col space-y-2 text-gray-900 font-extralight">
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
