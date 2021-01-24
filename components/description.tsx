interface DescriptionInterface {
  title: string;
  subtitle: string;
}

function Description({ title, subtitle }: DescriptionInterface) {
  return (
    <div className="w-full bg-gradient-to-b from-blue-900 to-blue-900 dark:from-gray-800 dark:to-gray-800 text-center text-gray-50 p-16 px-8">
      <h3 className="font-bold text-2xl mb-5 sm:max-w-lg mx-auto dark:text-yellow-100">
        {title}
      </h3>
      <p className="font-extralight text-md leading-7 sm:max-w-6xl mx-auto dark:text-yellow-50">
        {subtitle}
      </p>
    </div>
  )
}

export default Description;
