interface DescriptionInterface {
  title: string;
  subtitle: string;
}

function Description({ title, subtitle }: DescriptionInterface) {
  return (
    <main
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
      <p
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
      </p>
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
    </main>
  )
}

export default Description;
