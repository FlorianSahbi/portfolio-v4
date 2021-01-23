function Skill({ icon, title, description, subtitle1, languages, subtitle2, tools }) {
  return (
    <div className="h-full w-full py-16 px-8">
      <img className="mx-auto mb-8" src={icon} />
      <p className="font-bold text-xl mb-4">
        {title}
      </p>
      <p className="font-extralight mb-8">
        {description}
      </p>

      <p className="text-blue-900 mb-4">
        {subtitle1}
      </p>

      <p className="font-extralight mb-8">
        {languages}
      </p>

      <p className="text-blue-900 mb-4">
        {subtitle2}
      </p>
      <ul className="flex flex-col space-y-1 text-gray-900 font-extralight">
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
