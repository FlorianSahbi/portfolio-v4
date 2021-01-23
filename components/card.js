function Card() {
  return (
    <div className="group relative bg-blue-900 h-60 flex flex-col items-center justify-center space-y-5 w-full text-center rounded-xl shadow-xl transition cursor-pointer text-gray-50 opacity-100 hover:opacity-100">
      <img className="w-5/6 h-5/6 z-10 m-8 absolute object-cover transition transform -translate-y-0 group-hover:-translate-y-16 border-4 block rounded-xl" src="https://mattfarley.ca/img/projects/wfdesignbuild.png"></img>
      <button className="absolute transition transform translate-y-0  group-hover:translate-y-16 px-4 py-1 text-sm text-gray-50 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent">
        Message
      </button>
    </div>
  )
}

export default Card;
