interface DescriptionInterface {
  title: string;
  subtitle: string;
}

function Description({ title, subtitle }: DescriptionInterface) {
  return (
    <div
      className="
        w-full 
        bg-blue-900 
        dark:bg-gray-800 
        text-center 
        text-gray-200 
        font-extralight
        p-8 
        "
    >
      <h3
        className="
          mb-4 
          sm:max-w-lg 
          mx-auto 
          font-bold 
          text-xl
          dark:text-yellow-100
          "
      >
        {title}
      </h3>
      <p
        className="
          leading-7 
          sm:max-w-6xl 
          mx-auto 
          dark:text-yellow-50
          "
      >
        {subtitle}
      </p>
    </div>
  )
}

export default Description;
