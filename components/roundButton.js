function RoundButton() {
  return (
    <div className="group flex justify-center items-center transition mx-2 h-10 w-10 rounded-full border-2 dark:border-yellow-100 border-blue-600 p-2 dark:hover:bg-yellow-50 dark:hover:border-yellow-50 hover:border-blue-300 dark:hover:text-gray-900 hover:bg-blue-300 cursor-pointer">
      <a href="https://www.linkedin.com/in/floriansahbi/">
        <p className="text-gray-50 dark:text-yellow-50 dark:group-hover:text-gray-900 group-hover:text-gray-900">
          in
        </p>
      </a>
    </div>
  )
}

export default RoundButton;